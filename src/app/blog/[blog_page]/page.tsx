import React from 'react';
import { recentPost } from '@/app/data';
import Image from 'next/image';

const BlogPage = ({ params }: { params: { blog_page: string } }) => {
  return (
    <div className="px-4 md:px-8 lg:px-16 bg-gray-50">
      {recentPost
        .filter((post) => String(post.id) === params.blog_page)
        .map((post) => (
          <div key={post.id}>
            {/* Header Section */}
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-center text-customPurple mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="w-full md:w-3/4 lg:w-1/2 shadow-lg rounded-lg overflow-hidden">
                <Image
                  className="rounded-md hover:scale-105 transition-transform duration-300 ease-in-out"
                  src={post.image2}
                  alt="image"
                  width={800}
                  height={400}
                />
              </div>
              <p className="text-base md:text-lg lg:text-xl mt-6 text-justify w-full md:w-3/4 lg:w-1/2 text-gray-700 leading-relaxed">
                {post.desc}
              </p>
            </div>

            {/* Detailed Content Section */}
            <div className="my-20 space-y-8">
              {post.DetailedPage.map((detailed, i) => (
                <div key={i}>
                  {detailed.content?.map((content, j) => (
                    <div
                      key={j}
                      className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10 text-gray-800 w-full md:w-3/4 lg:w-1/2 mx-auto hover:shadow-xl transition-shadow duration-300 ease-in-out"
                    >
                      <p className="text-lg md:text-xl lg:text-2xl text-center leading-loose">
                        {content.description}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default BlogPage;
