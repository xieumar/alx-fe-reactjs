import React from 'react'
import { useParams } from "react-router-dom";

function BlogPost() {
    return (
        <div><div>
            <h2>Blog Post #{id}</h2>
            <p>This content is fetched dynamically for post {id}.</p>
        </div></div>
    )
}

export default BlogPost