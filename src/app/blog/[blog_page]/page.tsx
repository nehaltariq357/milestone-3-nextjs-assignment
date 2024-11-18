import React from 'react';
import { recentPost } from '@/app/data';
import Image from 'next/image';
import Comment_Section from '@/app/component/Comment_Section/page';

type BlogPageProps = {
  params: {
    blog_page: string;
  };
};

const BlogPage = ({ params }: BlogPageProps) => {
  return (
    <div className="px-4 md:px-8 lg:px-16 bg-gray-50">
      {recentPost
        .filter((post) => String(post.id) === params.blog_page)
        .map((post) => (
          <div key={post.id}>
            {/* Header Section ***/}
            <div className="flex flex-col items-center justify-center space-y-10">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-center text-customPurple mb-6 leading-tight my-10 cursor-pointer">
                {post.title}
              </h1>
              <div className="w-full md:w-3/4 lg:w-1/2 rounded-lg overflow-hidden">
                <Image
                  className="rounded-md hover:scale-105 transition-transform duration-300 ease-in-out"
                  src={post.image2}
                  alt="image"
                  width={800}
                  height={400}
                />
              </div>
            </div>

            {/* Detailed Content Section */}
            <div className="my-20 space-y-8">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-center text-customPurple mb-6 leading-tight cursor-pointer">content</h1>
              {post.DetailedPage.map((detailed, i) => (
                <div key={i}>
                  {detailed.content?.map((content, j) => (
                    <div
                      key={j}
                      className="bg-white rounded-lg p-6 md:p-8 lg:p-10 text-gray-800 w-full md:w-3/4 lg:w-1/2 mx-auto "
                    >
                      <p className="text-lg md:text-xl lg:text-2xl text-center leading-loose">
                        {content.description}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
              {/* comments */}
              <Comment_Section />
            </div>
          </div>
        ))}
    </div>
  );
};

export default BlogPage;
