import { useEffect, useState } from "react";
import { useDocumentTitle } from "../helpers/useDocumentTitle";
import { useFetch } from "../helpers/useFetch";

export function Post({ id }) {
    const [post, setPost] = useState(null);
    const [title, changeTitle] = useDocumentTitle();

    const data = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    useEffect(() => {
        changeTitle("Article");
    }, [changeTitle]);

    useEffect(() => {
        if (data) {
            setPost(data);
        }
    }, [data]);

    const isPostEmpty = post && Object.keys(post).length === 0;

    return (
        <>
            <h1>{!isPostEmpty && post ? `${title} : ${post.title}` : "Aucun article sélectionné"}</h1>
            {!isPostEmpty && post ? <img src={`https://picsum.photos/id/${post.id}/500/300`}></img> : null}
            {!isPostEmpty && post ? <p>{post.body}</p> : null}
            {!isPostEmpty && post ? <a href={`#post:${post.id+1}`}>Article suivant</a> : null}
        </>
    );
}