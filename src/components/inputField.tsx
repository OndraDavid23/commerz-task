export default function InputField({label, name, required}:{label: string, name: string, required?:boolean}){
    return(
    <>
        <label className="mt-2 font-bold">
        {label}
        </label>
        <div className="border-b">
        <input
        id={name}
        name={name}
        type={name}
        autoComplete={name}
        className="border-1 p-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 w-full"
        required={required}
        />
        </div>
    </>

    )
}