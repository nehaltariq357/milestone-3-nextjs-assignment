import React from 'react'
import { blogs } from '@/app/data'
const BlogPage = ({params}:{params:{blog_page:string}}) => {
  return (
    <div>
        <h1>BlogPage</h1>
   {blogs.filter((post)=>String(post.id)===(params.blog_page)) .map((post)=>(
    <div key={post.id}>
         <div>
            <h1>ID:{post.id}</h1>
            <h1>TITLE:{post.title}</h1>
            <h1>CONTENT:{post.content}</h1>
            <h1>DESCRIPTION:{post.description}</h1>
         </div>
    </div>
   ))}
    </div>
  )
}

export default BlogPage