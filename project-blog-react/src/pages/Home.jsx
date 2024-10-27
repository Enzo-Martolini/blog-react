import { useEffect } from "react"
import { useDocumentTitle } from "../helpers/useDocumentTitle"
import { useFetch } from "../helpers/useFetch"
import { HomeCard } from "../components/card"
import '../css/home.css'

export function Home () {

    const [title, changeTitle] = useDocumentTitle()
    const data = useFetch("https://jsonplaceholder.typicode.com/posts?_limit=9")


    useEffect(() => {
        changeTitle("Mon blog")
    }, [])

    return <>
    <h1>{title}</h1>
    <div id="containerHome">
        {data && data.map((d) => <div className="d-flex justify-content-center mb-4" key={d.id}><HomeCard data={d} key={d.id}/> </div>)}
    </div>
    </>
}