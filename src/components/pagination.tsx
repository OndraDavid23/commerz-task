import useURLParameters from "../hooks/useURLParams";

export default function Pagination({maxPage}: {maxPage: number}){

        const {pageNumber, pageSize, setURLSearchParams } = useURLParameters();

        const paginateForward = () => {
            const pgNum = pageNumber? parseInt(pageNumber, 0) :0;
            if(pgNum < maxPage-1){
                const nextPage = (pgNum + 1).toString();
                setURLSearchParams({pageNumber: nextPage});
            }
        }
        const paginateBack = () => {
            const pgNum = pageNumber? parseInt(pageNumber, 0) :0;
            if(pgNum !== 0){
                const prevPage = (pgNum - 1).toString();
                setURLSearchParams({pageNumber: prevPage});
            }
        }
    
        const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
            setURLSearchParams({pageSize: e.target.value, pageNumber: "0"});
        }

    return(
        <div className="flex justify-center">
            <button onClick={paginateBack} className="bg-slate-200 max-w-fit rounded-full p-2  font-bold m-4">
            {"<"}
            </button>
            <select value={pageSize} defaultValue="10" onChange={handlePageSizeChange}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
            </select>
            <button onClick={paginateForward} className="bg-slate-200 max-w-fit rounded-full p-2  font-bold m-4">
            {">"}
            </button>
        </div>
    )
}