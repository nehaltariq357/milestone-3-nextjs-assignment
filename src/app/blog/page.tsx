import React from "react";
import { recentPost } from "../data";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  const post = recentPost.find((p) => p.id === 1); // find id 1
  const post2 = recentPost.filter((p) => p.id >= 2 && p.id <= 4); // filter id
  const popularPost = recentPost.filter((p) => p.id >= 5); // filter id

  return (
    <main className="px-4 md:px-10 lg:px-20 md:mx-10 min-h-screen">
      <h1 className="text-3xl font-bold my-10">Our Recent Post</h1>

      <div>
        {/* grid1 */}
        {post && (
          <div key={post.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* left */}
              <div className="flex justify-center md:justify-end">
                <Image
                  className="md:h-96 w-full object-cover rounded-lg"
                  src={post.image}
                  alt="image"
                  width={800}
                  height={200}
                />
              </div>
              {/* right */}
              <div className="flex flex-col justify-center space-y-5 md:space-y-10">
                <h1 className="text-2xl md:text-5xl font-bold">{post.title}</h1>
                <h1 className="text-sm md:text-base md:w-[90%]">{post.desc}</h1>
                <Link href={`/blog/${post.id}`}>
                  <div className="text-customPurple border-2 border-customPurple px-5 py-2 rounded-md cursor-pointer hover:bg-customPurple hover:text-white w-fit">
                    Read More
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Recent Post */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {post2.map((post) => (
          <div key={post.id} className="my-10">
            <div className="space-y-5 w-full md:w-[90%]">
              <Link href={`/blog/${post.id}`}>
                <div>
                  <Image
                    src={post.image}
                    alt="image"
                    className="w-full h-auto object-cover"
                    width={500}
                    height={200}
                  />
                </div>
                <h1 className="font-bold mt-5 text-lg md:text-2xl">
                  Title: {post.title}
                </h1>
              </Link>
              <h1 className="text-sm md:text-base">
                {post.desc.slice(0, 200)}
              </h1>
              <Link href={`/blog/${post.id}`}>
                <div className="text-customPurple border-2 border-customPurple px-5 py-2 rounded-md cursor-pointer hover:bg-customPurple hover:text-white w-fit my-5">
                  Read More
                </div>{" "}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Popular Post */}
      <h2 className="text-3xl font-semibold my-10">Our Popular Post</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {popularPost.map((post) => (
          <div key={post.id}>
            <div className="flex flex-col justify-center space-y-5 my-10 w-full md:w-[90%]">
              <Link href={`/blog/${post.id}`}>
                <div>
                  <Image
                    src={post.image}
                    alt="image"
                    className="w-full h-auto object-cover"
                    width={500}
                    height={200}
                  />
                </div>
                <h1 className="font-bold mt-5 text-lg md:text-2xl">
                  Title: {post.title}
                </h1>
              </Link>
              <h1 className="text-sm md:text-base">
                {post.desc.slice(0, 200)}
              </h1>
              <Link href={`/blog/${post.id}`}>
                <div className="text-customPurple border-2 border-customPurple px-5 py-2 rounded-md cursor-pointer hover:bg-customPurple hover:text-white w-fit">
                  Read More
                </div>{" "}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Blog;
