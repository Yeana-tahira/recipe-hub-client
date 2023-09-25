import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - Recipe Hub`;
    },[title])
};

export default useTitle;