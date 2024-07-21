import { useState } from "react";
import Card from "./Card";
import { FaPlay, FaTimes } from "react-icons/fa";
import useIntract from "../GlobalComponents/useIntract";



interface Cards {
    number: string;
    title: string;
    description: string;
  }
  


function Services() {
    const [showVideo, setShowVideo] = useState<boolean>(false);
    const { ref, isVisible } = useIntract();

    const openVideo = (): void => {
      setShowVideo(true);
    };
  
    const closeVideo = (): void => {
      setShowVideo(false);
    };

    const CardData: Cards[] = [
        {
          number: "1",
          title: "Photo Editing ",
          description:
            "Our Proffesional photo editing service enhances your photos with precision and creativity.From retouching to color correction, we ensure your images look their best.",
        },
        {
          number: "2",
          title: "Video Editing ",
          description:
            "`We offer comprehensive video editing services to create engaging and visually appealing videos. Whether it's for personal or business use, we've got you covered. ",
        },
        {
          number: "3",
          title: "YouTube Thumbnail Editing ",
          description:
            "Our YouTube thumbnail editing service helps you create attractive and click-worthy thumbnails to grab your audience's attention. ",
        },
        {
          number: "4",
          title: "Website Development",
          description:
            "We specialize in creating responsive and user-friendly websites tailored to your needs.From design to deployment,we ensure a seamless online experience.",
        },
      ];

    return (
        <section className="bg-[#EBF1F3] py-16 " ref={ref} >
        <div className={`max-w-screen-xl px-4 mx-auto ${isVisible ? 'animate-fadeUp' : '  '} `}>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className={`pl-6 border-l-[12px] border-orange-600 ${isVisible ? 'animate-fadeUp' : '  '} `}>
                <label className="text-orange-600 text-md">Our Services</label>
                <h1 className={`text-3xl font-bold md:text-4xl lg:text-5xl ${isVisible ? 'animate-fadeUp' : '  '} `}>
                  Our Benefit We Can Offer To You
                </h1>
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-lg text-slate-700">
               
              </p>
            </div>
          </div>

          <div className="grid max-w-screen-xl grid-cols-1 gap-6 px-4 mx-auto mt-16 md:mt-36 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center justify-center h-64 col-span-1 p-4 mx-auto max-w-64 md:col-span-2 lg:w-auto lg:h-auto ">
              <div className="relative" onClick={openVideo}>
                <FaPlay className="absolute top-[-14px] left-[-14px] z-10 text-3xl text-white" />
                <span className="absolute inset-0 flex items-center justify-center">
                  {/* First pulse */}
                  <span className="absolute w-10 h-10 bg-orange-600 rounded-full opacity-75 animate-pulse"></span>
                  {/* Second pulse */}
                  <span className="absolute w-20 h-20 bg-orange-600 rounded-full opacity-75 animate-pulse"></span>
                  {/* Third pulse */}
                  <span className="absolute w-40 h-40 bg-orange-600 rounded-full opacity-75 animate-pulse"></span>
                </span>
              </div>
            </div>
            {showVideo && (
              <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 ${isVisible ? 'animate-fadeUp' : '  '}  `}>
                <div className="relative z-20">
                  <button
                    className="absolute text-2xl text-white top-4 right-4"
                    onClick={closeVideo}
                  >
                    <FaTimes className="text-4xl text-red-800 " />
                  </button>

                  <iframe
                    className=" h-[200px] w-[300px] md:w-[600px] md:h-[400px] lg:w-[700px] lg:h-[500px] z-30"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY"
                  ></iframe>
                </div>
              </div>
            )}
            
            {CardData.map((e, index) => (
              <div key={index}>
                <Card
                  number={e.number}
                  title={e.title}
                  description={e.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}

export default Services;