import React from 'react'
import { blogs } from '../data'
import Link from 'next/link'
const Blog = () => {
  return (
    <div>
        <h1>Blog</h1>
        {blogs.map((post)=>(
            <div key={post.id}>
                <h1>ID:{post.id}</h1>
                <Link href={`/blog/${post.id}`}><h1>title:{post.title}</h1></Link>
                
                <h1>content:{post.content}</h1>
            </div>
        ))}
    </div>
  )
}

export default Blog