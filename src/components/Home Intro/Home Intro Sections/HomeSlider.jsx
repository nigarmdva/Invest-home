import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SamplePrevArrow = ({ onClick }) => (
  <div
    className="z-10 absolute left-[0.4rem] top-[50%] translate-y-[-50%] w-[3rem] h-[3rem] flex items-center justify-center bg-white shadow-lg rounded-full cursor-pointer"
    onClick={onClick}
  >
    <FaChevronLeft className="text-[1.5rem] text-[var(--text-color-4)]" />
  </div>
);

const SampleNextArrow = ({ onClick }) => (
  <div
    className="z-10 absolute right-[1.3rem] top-[50%] translate-y-[-50%] w-[3rem] h-[3rem] flex items-center justify-center bg-white shadow-lg rounded-full cursor-pointer"
    onClick={onClick}
  >
    <FaChevronRight className="text-[1.5rem] text-[var(--text-color-4)]" />
  </div>
);

const HomeSlider = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "custom-dots-home",
    customPaging: () => (
      <div className="dot-indicator w-[0.8rem] h-1 bg-[var(--text-color-4)] rounded-full duration-300" />
    ),
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <>
      <style jsx>
        {`
          .custom-dots-home {
            display: flex !important;
            flex-direction: row !important;
            justify-content: center !important;
            align-items: center !important;
            gap: 6px !important;
            position: absolute !important;
            bottom: 35px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            z-index: 1 !important;
          }

          .custom-dots-home li.slick-active div {
            background-color: #3a0ca3 !important;
            width: 2rem !important;
          }
          .slick-arrow.slick-prev,
          .slick-arrow.slick-next {
            display: none !important;
          }
        `}
      </style>

      <div className="slider w-[40%] mx-auto relative">
        <Slider {...settings}>
          <div>
            <img src="./img/slider1.jpg" alt="Invest Home" className="w-full rounded-lg" />
          </div>
          <div>
            <img src="./img/slider1.jpg" alt="Invest Home" className="w-full rounded-lg" />
          </div>
          <div>
            <img src="./img/slider1.jpg" alt="Invest Home" className="w-full rounded-lg" />
          </div>
          <div>
            <img src="./img/slider1.jpg" alt="Invest Home" className="w-full rounded-lg" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default HomeSlider;
