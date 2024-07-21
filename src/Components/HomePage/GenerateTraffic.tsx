import React from 'react';
import useIntract from "../GlobalComponents/useIntract";
import { FaCheckCircle } from 'react-icons/fa';

const GenerateTraffic: React.FC = () => {
  
  const { ref, isVisible } = useIntract();
  return (
    <div>
    <div className="relative flex items-center justify-center p-2 lg:p-6 max-md:bg-white-gray md:bg-white xl:bg-white-gray " ref={ref}>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
        <div className={`flex flex-col justify-center p-6 ${isVisible ? 'animate-fadeUp' : '  '} `}>
          <h2 className="text-sm font-semibold text-red-500"> CAPTURING YOUR MOMENTS WITH PERFECTION</h2>
          <h1 className="mt-2 text-5xl font-bold text-black">
          Proffesional <span className="text-red-500">Video Editing</span> Services
          </h1>
          <p className="mt-4 text-gray-600">
           "We offer comprehensive video editing services to create engaging and visually 
          appealing videos. Whether it's for personal or business use, we've got you covered."

          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center text-gray-800">
              <FaCheckCircle className="mr-2 text-green-500" />
              Cutting and trimming
            </li>
            <li className="flex items-center text-gray-800">
              <FaCheckCircle className="mr-2 text-green-500" />
              Adding music and sound effects
            </li>
            <li className="flex items-center text-gray-800">
              <FaCheckCircle className="mr-2 text-green-500" />
              Color grading
            </li>
            <li className="flex items-center text-gray-800">
              <FaCheckCircle className="mr-2 text-green-500" />
              Special effects and transitions
            </li>
          </ul>
          <a href='/' className="px-6 py-3 mt-6 font-semibold text-white bg-black w-fit hover:bg-gray-800">
            Contact Now!
          </a>
        </div>
        <section className={`md:max-w-[490px] flex items-center justify-center w-full p-3 mt-8 mx-auto  ${isVisible ? 'animate-fadeUp' : '  '} `}>
            <img loading="lazy" src="video2.jpeg" alt="Grow-Your-Business" className="object-contain h-auto max-w-full mt-4 animate-fadeUp " />
        </section>
        
      </div>
    </div>





    <div
  className="relative flex items-center justify-center p-2 lg:p-6 max-md:bg-white-gray md:bg-white xl:bg-white-gray "
  ref={ref}
>
  <div className="grid max-w-screen-xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
    <section
      className={`order-2 md:order-1 md:max-w-[490px] flex items-center justify-center w-full p-3 mt-8 mx-auto  ${
        isVisible ? 'animate-fadeUp' : '  '
      } `}
    >
      <img
        loading="lazy"
        src="photo2.jpeg"
        alt="Grow-Your-Business"
        className="object-contain h-auto max-w-full mt-4 animate-fadeUp "
      />
    </section>
    <div
      className={`order-1 md:order-2 flex flex-col justify-center p-6 ${
        isVisible ? 'animate-fadeUp' : '  '
      } `}
    >
      <h2 className="text-sm font-semibold text-red-500">
      Bringing Your Vision to Life
      </h2>
      <h1 className="mt-2 text-5xl font-bold text-black">
      Transform <span className="text-red-500"> Your Photos</span> with Expert Editing
      </h1>
      <p className="mt-4 text-gray-600">
      "Our professional photo editing service enhances your photos with
       precision and creativity. From retouching to color correction, we ensure your images look their best."

      </p>
      <ul className="mt-4 space-y-2">
        <li className="flex items-center text-gray-800">
          <FaCheckCircle className="mr-2 text-green-500" />
          High-quality retouching
        </li>
        <li className="flex items-center text-gray-800">
          <FaCheckCircle className="mr-2 text-green-500" />
          Color correction and enhancement
        </li>
        <li className="flex items-center text-gray-800">
          <FaCheckCircle className="mr-2 text-green-500" />
          Background removal and replacement
        </li>
        <li className="flex items-center text-gray-800">
          <FaCheckCircle className="mr-2 text-green-500" />
          Special effects and filters
        </li>
      </ul>
      <a
        href="/"
        className="px-6 py-3 mt-6 font-semibold text-white bg-black w-fit hover:bg-gray-800"
      >
        Contact us today!
      </a>
    </div>
  </div>
</div>

         



<div className="relative flex items-center justify-center p-2 lg:p-6 max-md:bg-white-gray md:bg-white xl:bg-white-gray " ref={ref}>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
        <div className={`flex flex-col justify-center p-6 ${isVisible ? 'animate-fadeUp' : '  '} `}>
          <h2 className="text-sm font-semibold text-red-500"> "Boost Your Views with Stunning Thumbnails"</h2>
          <h1 className="mt-2 text-5xl font-bold text-black">
          Eye-Catching<span className="text-red-500">YouTube</span> Thumbnails
          </h1>
          <p className="mt-4 text-gray-600">
          "Our YouTube thumbnail editing service helps you create attractive and click-worthy thumbnails to grab your audience's attention."

          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center text-gray-800">
              <FaCheckCircle className="mr-2 text-green-500" />
              Custom designs
            </li>
            <li className="flex items-center text-gray-800">
              <FaCheckCircle className="mr-2 text-green-500" />
              High-resolution images
            </li>
            <li className="flex items-center text-gray-800">
              <FaCheckCircle className="mr-2 text-green-500" />
              Attention-grabbing text
            </li>
            <li className="flex items-center text-gray-800">
              <FaCheckCircle className="mr-2 text-green-500" />
              Consistent branding
            </li>
          </ul>
          <a href='/' className="px-6 py-3 mt-6 font-semibold text-white bg-black w-fit hover:bg-gray-800">
            Contact Now!
          </a>
        </div>
        <section className={`md:max-w-[490px] flex items-center justify-center w-full p-3 mt-8 mx-auto  ${isVisible ? 'animate-fadeUp' : '  '} `}>
            <img loading="lazy" src="thumbnail.jpeg" alt="Grow-Your-Business" className="object-contain h-auto max-w-full mt-4 animate-fadeUp " />
        </section>
        
      </div>
    </div>





    <div
  className="relative flex items-center justify-center p-2 lg:p-6 max-md:bg-white-gray md:bg-white xl:bg-white-gray "
  ref={ref}
>
  <div className="grid max-w-screen-xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
    <section
      className={`order-2 md:order-1 md:max-w-[490px] flex items-center justify-center w-full p-3 mt-8 mx-auto  ${
        isVisible ? 'animate-fadeUp' : '  '
      } `}
    >
      <img
        loading="lazy"
        src="web.jpg"
        alt="Grow-Your-Business"
        className="object-contain h-auto max-w-full mt-4 animate-fadeUp "
      />
    </section>
    <div
      className={`order-1 md:order-2 flex flex-col justify-center p-6 ${
        isVisible ? 'animate-fadeUp' : '  '
      } `}
    >
      <h2 className="text-sm font-semibold text-red-500">
      Building Your Online Presence
      </h2>
      <h1 className="mt-2 text-5xl font-bold text-black">
      Professional <span className="text-red-500">Website</span>Development
      </h1>
      <p className="mt-4 text-gray-600">
      "We specialize in creating responsive and user-friendly websites tailored to your needs. From design to deployment, we ensure a seamless online experience."


      </p>
      <ul className="mt-4 space-y-2">
        <li className="flex items-center text-gray-800">
          <FaCheckCircle className="mr-2 text-green-500" />
          Custom website design
        </li>
        <li className="flex items-center text-gray-800">
          <FaCheckCircle className="mr-2 text-green-500" />
          Responsive and mobile-friendly
        </li>
        <li className="flex items-center text-gray-800">
          <FaCheckCircle className="mr-2 text-green-500" />
          SEO optimization
        </li>
        <li className="flex items-center text-gray-800">
          <FaCheckCircle className="mr-2 text-green-500" />
          E-commerce solutions
        </li>
      </ul>
      <a
        href="/"
        className="px-6 py-3 mt-6 font-semibold text-white bg-black w-fit hover:bg-gray-800"
      >
        Coming Soon!
      </a>
    </div>
  </div>
</div>

    </div>
  );
};

export default GenerateTraffic;
