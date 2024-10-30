import { useSearchParams } from "react-router-dom";
import { URLSearchParameters } from "../type-defenitions";
import { useCallback } from "react";

export default function useURLParameters(){
    const [searchParams, setSearchParams] = useSearchParams();

    const pageNumber = searchParams.get("pageNumber")as URLSearchParameters["pageNumber"];
    const pageSize = (searchParams.get("pageSize") as URLSearchParameters["pageSize"]) || "10";

    const setURLSearchParams = useCallback((urlLSearchParams: URLSearchParameters) => {
        setSearchParams((params) => {
            if (urlLSearchParams.pageNumber !== undefined){
                params.set("pageNumber", urlLSearchParams.pageNumber)
            }
            if (urlLSearchParams.pageSize !== undefined){
                params.set("pageSize", urlLSearchParams.pageSize)
            }
            return params;
        })
    }, [])

    return {
        searchParams,
        pageNumber,
        pageSize,
        setURLSearchParams,
    }
}