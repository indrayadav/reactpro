import React from "react";
import 'tachyons';

const BlogList = (props) => {

    return (
        <div className="blogcard grow fl w-100 w-third-ns pa3">
            <div className="outline bg-white pv4">
                <img src ={`${props.img}`} />
                <div class="pa2 pa3-ns"><h2 class="f4 fw5 mv0">{ props.name}</h2>
                <p class="f6 lh-copy measure mt2 mb0 mid-gray">{ props.address}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogList
 