import React from "react";
import BlogList from './BlogList';

const Blog = (props) => {
    
    const bloglistarray = [
        {
            id: 1,
            name: 'Indra',
            address: 'Kathmandu'
        },
        {
            id: 2,
            name: 'Kumar',
            address: 'Janakpur'
        },
        {
            id: 3,
            name: 'Yadav',
            address: 'Biratnagar'
        },
        {
            id: 4,
            name: 'Indra',
            address: 'Pokhara'
        }

    ]

    const  blogcardarray = bloglistarray.map( (blogcard, i) => {
        
        return <BlogList id={bloglistarray[i].id}  name={bloglistarray[i].name}  address={bloglistarray[i].address} />
    } )

    return (
        <div>
            <h1> Welcome to Our Post </h1>
            {blogcardarray}
        </div>
    )
}

export default Blog