import React from 'react'
import { useParams } from "react-router-dom";

function Blogpost() {
    return (
        <div><div>
            <h2>Blog Post #{postId}</h2>
            <p>This content is fetched dynamically for post {postId}.</p>
        </div></div>
    )
}

export default Blogpost