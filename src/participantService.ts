import { z } from "zod";

const formSchema = z.object({
    firstName: z.string({required_error: "First name is required"}).min(3, { message: "Must be 3 or more characters long" }),
    lastName: z.string({required_error: "Last name is required"}).min(3, { message: "Must be 3 or more characters long" }),
    age: z.coerce.number(
        {
        required_error: "Age is required",
        invalid_type_error: "Age must be a number",
    }).min(18,{ message: "Mininal age is 18"}),
}
)

export async function getAllParticipants(){
        const response = await fetch("http://127.0.0.1:9192/api/v1/participants/getAll",{});
        const responseJson = await response.json();
        return responseJson;
    }

export async function getPaginatedParticipants(searchParams: URLSearchParams){
        const pageNumber = searchParams.get("pageNumber");
        const pageSize = searchParams.get("pageSize");
        const url = new URL("http://127.0.0.1:9192/api/v1/participants/getPaginated");

        if (pageNumber) url.searchParams.append("pageNumber", pageNumber);
        if (pageSize) url.searchParams.append("pageSize", pageSize);

        console.log(url);
        const response = await fetch(url,{});
        const responseJson = await response.json();
        return responseJson;
    }

export async function createParticipant(formData: FormData){

    const validatedFields = formSchema.safeParse({
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        age: formData.get("age")
    })

    if(!validatedFields.success){
        return{
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to create participant.',
        }
    }
    console.log(validatedFields.data)

    const response = await fetch("http://127.0.0.1:9192/api/v1/participants/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedFields.data),
    })
    console.log(validatedFields);
    const message = await response.json()

    console.log(message);
}