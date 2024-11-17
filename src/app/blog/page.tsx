import React from "react";
import { recentPost } from "../data";
import Link from "next/link";
import Image from "next/image";
const Blog = () => {
  const post = recentPost.find((p)=>p.id ===1) // find id 1
  const post2 = recentPost.filter((p)=>p.id >=2 && p.id <=4) // filter id 
  const popularPost = recentPost.filter((p)=>p.id >=5) // filter id 
  return (
    <main>
         <h1>our recent post</h1>
      
      <div>
        {/* grid */}
        {post && (
          <div key={post.id}>
            {/* grid */}
            <div className="grid grid-cols-1 md:grid-cols-2">
               {/* left */}
               <div>
                <Image src={post.image} alt="image" width={200} height={200}/>
               </div>
               {/* right */}
               <div>
              <Link href={`/blog/${post.id}`}><h1>{post.title}</h1></Link>
                <h1>{post.desc}</h1>
               </div>
            </div>
          </div>
        )}
      </div>
      {/* recent post */}
      {/* grid */}
      <div className="grid grid-cols-1 md:grid-cols-3">
      {post2.map((post) => (
        <div key={post.id}>
          <h1>ID:{post.id}</h1>

          <div>
            <Link href={`/blog/${post.id}`}>
              <h1>
                <Image src={post.image} alt="image" width={200} height={200} />
              </h1>
              <h1>title:{post.title}</h1>
            </Link>
            <h1>{post.desc.slice(0,50)}</h1>
          </div>
          <div></div>
        </div>
      ))}
      </div>
{/* popular post */}
<h1>our popular post</h1>
<div className="grid grid-cols-1 md:grid-cols-3">
      {popularPost.map((post) => (
        <div key={post.id}>
          <h1>ID:{post.id}</h1>

          <div>
            <Link href={`/blog/${post.id}`}>
              <h1>
                <Image src={post.image} alt="image" width={200} height={200} />
              </h1>
              <h1>title:{post.title}</h1>
            </Link>
            <h1>{post.desc.slice(0,50)}</h1>
          </div>
          <div></div>
        </div>
      ))}
      </div>
    </main>
  );
};

export default Blog;
