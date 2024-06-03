import Image from "next/image";
import Image1 from "../../assets/imagestudents.png";
const Testimonials = () => {
  return (
    <div className="bg-[#0c0c0c] text-white py-12 px-6 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center ">
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 space-y-6 md:space-y-0 mb-20">
          <div className="relative w-48 h-48">
            <Image src={Image1} alt="Logo" width={150} height={150} />
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-12 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">
            What Our Students Are Saying
          </h2>
          <p className="text-lg font-semibold">Maryam Jessica</p>
          <p className="text-gray-400">
            The flexibility of online courses allowed me to balance my studies
            with my job and family life. The resources and materials were
            top-notch, and the interactive discussions were a highlight.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
