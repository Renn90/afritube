import React, { useEffect, useRef, useState } from "react";
import bird from "../assets/bird.png";
import cloudLeft from "../assets/cloudLeft.png";
import cloudRight from "../assets/cloudRight.png";
import strike from "../assets/lightning.png";
import btm from "../assets/cloudbtm.png";
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import aisha from "../assets/aisha.jpg";
import kwame from "../assets/chike.jpg";
import zainab from "../assets/kristine.jpg"; 
import chinedu from "../assets/chinedu.jpg";
import fatima from "../assets/jessica.jpg";
import sipho from "../assets/pg1img.jpg";
import tariro from "../assets/tariro.jpg";

const reviews = [
  {
    name: "Aisha",
    image: aisha,
    review: "This website is amazing! My kids love watching the videos.",
    parent: "Mother",
  },
  {
    name: "Kwame",
    image: kwame,
    review: "Afritube has great content for children. Highly recommended!",
    parent: "Father",
  },
  {
    name: "Zainab",
    image: zainab,
    review: "My daughter is learning a lot from the educational videos.",
    parent: "Mother",
  },
  {
    name: "Chinedu",
    image: chinedu,
    review: "Entertaining and informative. Thumbs up!",
    parent: "Father",
  },
  {
    name: "Fatima",
    image: fatima,
    review: "As a parent, I'm happy with the safe and child-friendly content.",
    parent: "Mother",
  },
  {
    name: "Sipho",
    image: sipho,
    review: "My son's favorite site. He enjoys the cartoons and music videos.",
    parent: "Father",
  },
  {
    name: "Tariro",
    image: tariro,
    review: "Afritube promotes African culture beautifully. Well done!",
    parent: "Mother",
  },
];

const Testimonial = () => {
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [move, setMove] = useState(500);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 760) {
        setMove(330);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;

    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDown(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDown) return;

    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollRightHandler = () => {
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft + move;
  };
  const scrollLeftHandler = () => {
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - move;
  };

  return (
    <section className="relative bg-[#F1F1F1] mb-[-170px] unTap">
      <img
        src={cloudLeft}
        alt="cloud"
        className="absolute top-[-160px] left-0 z-[9]"
      />
      <img
        src={cloudRight}
        alt="cloud"
        className="hidden absolute top-[-180px] right-0 z-[9] md:block"
      />
      <img
        src={strike}
        alt="cloud"
        className="absolute top-[-30px] left-[10%] z-[8] hidden sm:block"
      />
      <div className="container mx-auto pt-8">
        <h2 className="text-center text-[#01878F]">Testimonials</h2>
        <h1 className="font-semibold text-xl text-center text-black">
          What parents say about us
        </h1>
        {/* <img
          src={bird}
          alt="bird svg"
          className="absolute hidden top-[50px] right-[20%] w-[80px] z-[998] md:block"
        /> */}
        <div
          className="flex overflow-hidden cursor-pointer"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setIsDown(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >
          {reviews.map((review) => (
            <div className={`mx-4 m`} key={review.name}>
              <div>
                <div className="bg-white p-4 rounded-xl w-[300px] mt-6 relative z-[99]">
                  <h1 className="w-[100%]">"{review.review}"</h1>
                  <span className="flex items-center mt-4">
                    <img
                      src={review.image}
                      alt="parent image"
                      className="w-[50px] object-top h-[50px] rounded-full object-cover"
                    />
                    <h2 className="font-semibold text-lg ml-4">
                      {review.name},{" "}
                      <span className="font-medium text-sm">
                        {review.parent}
                      </span>
                    </h2>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between w-[100%] mt-8 relative z-10">
          <img src={btm} className="z-0 opacity-0 md:opacity-100" />
          <div className="flex relative z-[99]">
            <span className="p-8 bg-white rounded-full absolute right-[90px]">
              <button
                className="p-4 bg-[grey] rounded-full text-white outline-0"
                onClick={scrollLeftHandler}
              >
                <FiArrowLeft />
              </button>
            </span>
            <span className="p-8 bg-white rounded-full absolute right-0">
              <button
                className="p-4 btn-bg rounded-full text-white outline-0"
                onClick={scrollRightHandler}
              >
                <FiArrowRight />
              </button>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
