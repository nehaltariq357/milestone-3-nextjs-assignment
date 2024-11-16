import React from 'react'
import { recentPost } from '@/app/data'
import Image from 'next/image'
const BlogPage = ({params}:{params:{blog_page:string}}) => {
  return (
    <div>
        <h1>BlogPage</h1>
   {recentPost.filter((post)=>String(post.id)===(params.blog_page)) .map((post)=>(
    <div key={post.id}>
         <div>
            <h1>ID:{post.id}</h1>
            <h1>TITLE:{post.title}</h1>
            <h1>CONTENT:{post.desc}</h1>
            <h1>
              <Image src={post.image} alt='image' width={200} height={200}/>
            </h1>
            <h1>DESCRIPTION:{post.DetailedPage.map((post,i)=>(
              <div key={i}>
                 <div>
                  {post.content?.map((post,i)=>(
                    <div key={i}>
                      <div>
                        {post.description}
                      </div>
                    </div>
                  ))}
                 </div>
              </div>
            ))}</h1>
         </div>
    </div>
   ))}
    </div>
  )
}

export default BlogPage