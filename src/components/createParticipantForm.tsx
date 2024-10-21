import { useState } from "react";
import { createParticipant } from "../participantService";
import InputField from "./inputField";
import { useNavigate } from "react-router-dom";

export default function CreateParticipantForm(){
    
    const [errors, setErrors] = useState<{ [key: string]: string[] }>({});
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const result  = await createParticipant(formData);
        if(result?.errors){
            setErrors(result.errors);
        }
        else{
            setErrors({});   
            return navigate("/participants")
        }

    }

    return(
    <form onSubmit={handleSubmit}>
        <div className="flex flex-col max-w-lg mx-auto h-full">
            <InputField label="First name" name="firstName" required={true}/>
            {errors.firstName && 
            <p className="text-red-600">
                {errors.firstName}
            </p>}
            <InputField label="Last name"  name="lastName" required={true}/>
            {errors.lastName && 
            <p className="text-red-600">
                {errors.lastName}
            </p>}
            <InputField label="Age"  name="age" required={true}/>
            {errors.age && 
            <p className="text-red-600">
                {errors.age}
            </p>}
            <div className="mt-4">
            <button className="bg-cbyellow max-w-fit rounded-full py-4 px-8 font-bold">
                Add participant
            </button>
            </div>
        </div>
    </form>
    )
}