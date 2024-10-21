export default function Pagination({pageSize, paginateBack, paginateForward, handlePageSizeChange}:{
    pageSize: string,
    paginateBack: () => void,
    paginateForward:() => void,
    handlePageSizeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    }){
    return(
        <div className="flex justify-center">
            <button onClick={paginateBack} className="bg-slate-200 max-w-fit rounded-full p-2  font-bold m-4">
            {"<"}
            </button>
            <select value={pageSize} onChange={handlePageSizeChange}>
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