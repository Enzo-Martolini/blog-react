import { useEffect } from "react"
import { useDocumentTitle } from "../helpers/useDocumentTitle"

export function Contact () {

    const [title, changeTitle] = useDocumentTitle()

    useEffect(() => {
        changeTitle("Contact")
    }, [])

    return <>
    <h1>{title}</h1>
    <h4>Enzo Martolini</h4>
    <h4>enzomartolini[at]mailo.com</h4>
    <h4><a href="https://github.com/Enzo-Martolini">Github</a></h4>
    <h4><a href="https://www.linkedin.com/in/enzo-martolini-48a0b627a/">Linkedin</a></h4>
    </>

}