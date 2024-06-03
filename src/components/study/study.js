import Image from 'next/image';

const StudyOnline = () => {
  return (
    <div className="bg-[#0c0c0c] text-white py-12 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Study Anywhere Easily Online</h2>
          <p className="text-gray-400 mb-6">
            Discover the freedom of online learning. Our platform empowers you to access quality education from the comfort of your home or on the go.
          </p>
          <div className="flex space-x-4 mb-8">
            <div className="flex flex-col items-center">
              <div className="relative w-16 h-16 mb-2">
                {/* <Image
                  src="/mnt/data/image.png"
                  alt="Illustration"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                /> */}
              </div>
              <span>Illustration</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-16 h-16 mb-2">
                {/* <Image
                  src="/mnt/data/image.png" 
                  alt="UI/UX"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                /> */}
              </div>
              <span>UI/UX</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-16 h-16 mb-2">
                {/* <Image
                  src="/mnt/data/image.png"
                  alt="Logo Design"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                /> */}
              </div>
              <span>Logo Design</span>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 focus:ring-2 focus:ring-green-400">
              Show More
            </button>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 mt-12 lg:mt-0">
          {/* <Image
            src="/mnt/data/image.png"
            alt="Online Learning"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default StudyOnline;
