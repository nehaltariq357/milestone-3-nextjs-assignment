import React from 'react';
import { bannerData } from '@/app/data';
import Image from 'next/image';

const Banner = () => {
  return (
    <main>
      <div className="bg-customPurple min-h-screen text-white pt-5 pb-10 md:pt-0 md:pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen items-center">
          {/* left grid */}
          <div className="flex justify-center items-center w-full h-full mb-10">
            <div className="space-y-8 md:ml-28 text-center md:text-left px-5 w-full">
              {/* paragraph */}
              <p className="text-sm md:text-base">{bannerData.content}</p>
              {/* heading */}
              <h1 className="text-6xl md:text-7xl font-bold w-full md:w-[80%]">{bannerData.heading}</h1>
              {/* paragraph */}
              <p className="text-sm md:text-base w-full md:w-[70%] text-slate-200">{bannerData.desc}</p>
              {/* button */}
              <button className="px-4 py-2 bg-white text-customPurple rounded-md hover:bg-gray-200 transition">
                Read more
              </button>
            </div>
          </div>

          {/* right grid */}
          <div className="flex justify-center items-center bg-customPurple pb-10">
            {/* image */}
            <Image
              src={bannerData.image}
              alt="image"
              width={700}
              height={100}
              className="w-[90%] md:w-auto max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
