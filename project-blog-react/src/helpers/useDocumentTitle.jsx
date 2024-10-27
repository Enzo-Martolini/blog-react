import { useState } from "react";

export function useDocumentTitle () {

    const [title, setTitle] = useState()
    const changeTitle = (newTtitle) => setTitle(newTtitle)
    window.document.title = title

    return [title, changeTitle]
}