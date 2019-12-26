import React from "react";
import 'tachyons';

const BlogList = (props) => {

    return (  <article className="blogcard bg-white center mw5 ba b--black-10 mv4">   
                 <img src ={`${props.img}`}  className="w-100 db" alt="Closeup photo of a tabby cat yawning." />
                <div className="pv2 ph3">
                    <h2 className="f6 ttu tracked"> <a href={`${props.url}`} className="link " target="_blank"> { props.title}</a></h2>
                    <small className="gray db pv2"><time>{ props.datetime}</time></small>
                    <p className="article-desc"> { props.description} </p> 

                    <a class="f6 link dim ph3 pv2 mb2 dib white bg-dark-green" target="_blank" href={`${props.url}`}>Read More</a>
                </div>
                
                
            </article>
    )
}

export default BlogList
 