import React from "react";
import 'tachyons';

const BlogList = (props) => {

    return (
        <div className="blogcard fl w-25 bg-yellow grow ma4 pa5">
            <img src ={`https://joeschmoe.io/api/v1/${props.name}`} />
            <h2>{ props.name}</h2>
            <p>{ props.address}</p>
        </div>
    )
}

export default BlogList
 