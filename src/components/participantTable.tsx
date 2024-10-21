import { Participant } from "../type-defenitions";
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import { getPaginatedParticipants } from "../participantService";
import Pagination from "./pagination";

export default function ParticipantTable(){

    const [participants, setParticipants] = useState<Participant[]>([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [pageSize, setPageSize] = useState<string>("10");
    const [maxPage, setMaxPage] =useState<number>(0);


    useEffect(()=>{
        const fetchParticipants = async () => {    
            const participantsJson = await getPaginatedParticipants(searchParams);
            setParticipants(participantsJson.data.content);
            setMaxPage(participantsJson.data.totalPages);
        }
        fetchParticipants();

    },[pageNumber, pageSize, searchParams])

    const paginateForward = () => {
        if(pageNumber < maxPage-1){
            setPageNumber(pageNumber+1);
            setSearchParams({pageNumber: (pageNumber+1).toString(), pageSize: pageSize})
        }
        else{
            return;
        }
    }
    const paginateBack = () => {
        if(pageNumber === 0){
            return;
        }
        setPageNumber(pageNumber-1);
        setSearchParams({pageNumber: (pageNumber-1).toString(), pageSize: pageSize});
    }

    const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newPageSize = e.target.value;
        setPageSize(newPageSize);
        setPageNumber(0);
        setSearchParams({pageNumber: "0", pageSize: newPageSize});
    }

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
            <Pagination pageSize={pageSize} paginateBack={paginateBack} paginateForward={paginateForward} handlePageSizeChange={handlePageSizeChange}/>
        <div className="flex justify-center"></div>
        </div>
        </>
    )
}