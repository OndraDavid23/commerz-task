import { Participant } from "../type-defenitions";
import { useEffect, useState } from "react"
import { getPaginatedParticipants } from "../participantService";
import Pagination from "./pagination";
import useURLParameters from "../hooks/useURLParams";

export default function ParticipantTable(){

    const [participants, setParticipants] = useState<Participant[]>([]);
    const [maxPage, setMaxPage] =useState<number>(0);
    const {searchParams, pageNumber, pageSize } = useURLParameters();

    useEffect(()=>{
        const fetchParticipants = async () => {    
            const participantsJson = await getPaginatedParticipants(searchParams);
            setParticipants(participantsJson.data.content);
            setMaxPage(participantsJson.data.totalPages);
        }
        fetchParticipants();

    },[pageNumber, pageSize, searchParams])

    return(
        <>
        <div>
        <div>
        <table className="table-auto">
        <thead className="border-b">
            <tr className="p-2">
                <th className="p-2">First name</th>
                <th className="p-2">Last name</th>
                <th className="p-2">Age</th>
            </tr>
        </thead>
        <tbody>
            {participants.map((participant) => (
                <tr className="border-b odd:bg-white even:bg-slate-100 hover:bg-slate-200" key={participant.id}>
                    <td>
                        {participant.firstName}
                    </td>
                    <td>
                        {participant.lastName}
                    </td>
                    <td>
                        {participant.age}
                    </td>

                </tr>
            ))}
        </tbody>
        </table>
        </div>
            <Pagination maxPage={maxPage}/>
        <div className="flex justify-center"></div>
        </div>
        </>
    )
}