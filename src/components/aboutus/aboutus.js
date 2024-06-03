import React from 'react';
import Image from 'next/image';
import Imageaboutus from '../../assets/imageaboutus.png';

const Aboutus = () => {
  return (
    <div className="bg-[#0c0c0c] text-white py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="relative w-full md:w-1/2 flex justify-center items-center space-y-6 md:space-y-0 mb-20">
          <button className="absolute left-0 bg-green-500 text-white rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-green-400">
            <span className="text-3xl">{"<"}</span>
          </button>
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <Image 
              src={Imageaboutus} 
              alt="Logo" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-full" 
              fetchpriority="high"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-12 text-center md:text-left">
          <h2 className="text-5xl font-bold mb-8">What Our Students Are Saying</h2>
          <p className="text-3xl font-semibold mb-4">Maryam Jessica</p>
          <p className="text-gray-400 text-xl">
            The flexibility of online courses allowed me to balance my studies
            with my job and family life. The resources and materials were
            top-notch, and the interactive discussions were a highlight.
          </p>
          <div className="flex justify-center md:justify-end mt-4">
            <button className="bg-green-500 text-white rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-green-400">
              <span className="text-3xl">{">"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
