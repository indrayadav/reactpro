import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogList from './BlogList';
import './Blog.css'


const Blog = (props) => {

    const [posts, setPosts] = useState(
        []
      );

      const fetchUsers = async () => {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=ad71aa9ff3e44845a7fe5e6249d6c3a5`
        );
    
        setPosts(response.data.articles);
      };
    
      useEffect(() => {
        fetchUsers(posts);
      }, [posts]);
    

    const  blogcardarray = posts.map( (blogcard, i) => {
        
        return <BlogList id={posts[i].id}  title={posts[i].title}  description={posts[i].description}  img={posts[i].urlToImage} url={posts[i].url}  datetime ={posts[i].publishedAt} />
    } )

    return (
            <div className="mw9 center ph3-ns">
                <h1> Welcome to Our Post </h1>
                <div className="flex flex-wrap">                 
                     {blogcardarray}
            </div>
        </div>
    )
}

export default Blog