import React from "react";
import Loading from './Loading'

const BlogPost = ({post}) =>{
    return(
        <div>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
        </div>
    )
}

export default Loading('post',BlogPost);