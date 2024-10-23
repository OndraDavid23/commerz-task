import { Link, Outlet } from "react-router-dom";
export default function Home(){

    const date = new Date().toDateString();
    console.log(date);

    return(
        <div>
        <div className= "flex w-full bg-cbgreen items-end">
            <div className="p-2">
            <img
            className="w-16 ml-12"
            src="cb-logo.png"/>
            </div>
            <div className="h-full">
            <Link to={"/participants"}>
            <p className="text-cbfont font-bold	text-center border-b-4 border-cbgreen transition duration-150 hover:border-cbyellow p-2 ml-6">
            Interview participants
            </p>
            </Link>
            </div>
        </div>
        <div>
            <Outlet/>           
        </div>
        <div className= "bg-cbgreen text-cbfont bottom-0 md:absolute w-full">
        <p>
            {date}
        </p>
        </div>
        </div>
    )
}