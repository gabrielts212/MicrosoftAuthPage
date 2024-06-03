import Image from 'next/image';

const Learning = () => {
  return (
    <div className="bg-[#0c0c0c] text-white py-12 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start mb-12 lg:mb-0">
          <div className="relative w-72 h-72">
            {/* <Image
              src="/mnt/data/image.png" 
              alt="Online Learning"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            /> */}
            <div className="absolute top-0 left-0 flex flex-col items-center space-y-2">
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
            <div className="absolute bottom-0 right-0 flex flex-col items-center space-y-2">
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
          </div>
        </div>
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-4">Your Learning Journey Begins Here!</h2>
          <p className="text-gray-400 mb-6">
            Where knowledge meets convenience in the palm of your hand!
          </p>
          <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 focus:ring-2 focus:ring-green-400">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Learning;
