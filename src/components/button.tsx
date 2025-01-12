export default function Button({name}: {name:string}){
    return(
    <button className="bg-cbyellow max-w-fit rounded-full py-4 px-8 font-bold">
        {name}
    </button>
    )
}