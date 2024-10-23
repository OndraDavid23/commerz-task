
import { Link } from "react-router-dom";
import ParticipantTable from "../components/participantTable";
export default function Participants(){

    return(
        <>
        <div className="flex justify-center ">
            <div className="flex-row">
            <div className="flex justify-center w-full">
                <ParticipantTable/> 
            </div>
            <div className="flex justify-center">
            <button className="bg-cbyellow max-w-fit rounded-full py-4 mb-4 px-8 font-bold">
                <Link to={"/create"}>Add participant</Link>
            </button>
            </div>
            </div>
        </div>
        </>
    )
}