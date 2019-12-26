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
          `https://newsapi.org/v2/everything?q=bitcoin&from=2019-11-26&sortBy=publishedAt&apiKey=ad71aa9ff3e44845a7fe5e6249d6c3a5`
        );
    
        setPosts(response.data.articles);
      };
    
      useEffect(() => {
        fetchUsers(posts);
      }, [posts]);
    

    const  blogcardarray = posts.map( (blogcard, i) => {
        
        return <BlogList id={posts[i].id}  name={posts[i].title}  address={posts[i].description}  img={posts[i].urlToImage} />
    } )

    return (
            <div className="mw9 center ph3-ns">
                <div className="cf ph2-ns">
                 <h1> Welcome to Our Post </h1>
                     {blogcardarray}
            </div>
        </div>
    )
}

export default Blog