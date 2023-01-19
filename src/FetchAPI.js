import React, { useEffect, useState } from 'react'

const FetchAPI = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                response.json().then((data) => {
                    setPosts(data);
                })

            })
    });
    return (
        <>
           <ul>
            {
                posts.map((post) =>{
                   return(
                   <>
                    <li>{post.id}</li>
                    <li>{post.title}</li>
                   </>
                   )
                })
            }
           </ul>
        </>
    )
}

export default FetchAPI
