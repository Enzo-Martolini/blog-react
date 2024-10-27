import { useEffect, useState } from "react"

export function useFetch (url) {

    const [data, setData] = useState()  

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((response) => setData(response))
        .catch((e) => console.log(e))
    }, [url])

    return data
}