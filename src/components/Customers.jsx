import React from "react";
import { TbStarFilled } from "react-icons/tb";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Customers = () => {
  const testimonials = [ 
    {
      id: 1,
      text: "Mən çox tövsiyə edirəm İnvesthome.az. Onlar ehtiyaclarımıza diqqət yetirirdi və bizə mükəmməl evi tapmaq üçün yorulmadan çalışırdılar. Yeni məkanımızdan daha xoşbəxt ola bilməzdik!",
      name: "Firəngiz Babayeva",
      image: "./img/customer1.jfif",
      stars: 4
    },
    {
      id: 2,
      text: "İnvesthome.az ilə təcrübəm əla idi. Peşəkar komandaları bizim büdcəmizə və tələblərimizə uyğun mükəmməl mülk tapmağımıza kömək etdi. Proses sürətli və stressiz idi.",
      name: "Eldar Məmmədov",
      image: "./img/customer2.jpg", 
      stars: 3
    },
    {
      id: 3,
      text: "Həqiqətən, İnvesthome.az komandası ilə işləməkdən məmnun qaldım. Onlar mənə ideal evi tapmağa kömək etdilər və bütün prosesdə son dərəcə yardımçı oldular. Çox təşəkkür edirəm!",
      name: "Leyla Əliyeva",
      image: "./img/customer3.jpg",
      stars: 5
    }
  ];

  const customDotsClass = "custom-dots";

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    dotsClass: `slick-dots ${customDotsClass}`,
    customPaging: (i) => (
      <div className="w-1 h-[45px]  bg-[var(--text-color-4)] rounded-full hover:bg-[var(--text-color-3)] transition-colors duration-300" />
    ),
  };

  return (
    <>
      <style jsx>{`
        .${customDotsClass} {
          position: absolute;
          bottom: 0px;
          right: 0;
          left: auto; 
          top: 50%;
          transform: translateY(50%); 
          transform: translateX(130%);
          width: auto !important;
          height: 23px !important; 
          display: flex !important;
          flex-direction: column !important; 
          align-items: center;
          justify-content: center;
          gap: 30px; 
          padding: 0 10px; 
        } 
        
        .${customDotsClass} li.slick-active div {
          background-color: var(--text-color-3); 
        }
      `}</style>

      <div className="flex justify-between items-center px-[160px] py-[85px]">
        <div className="flex flex-col gap-[1.8rem]">
          <span className="text-[var(--text-color-2)] text-[2.5rem] font-[600] leading-[3rem] w-[415px]">
            Baxın Müştərilərimiz Nə Deyir!
          </span>
          <span className="text-[var(--text-color-2)] text-[1.2rem] font-[400] leading-[1.7rem] w-[415px]">
            Fusce venenatis tellus a felis scelerisque, non pulvinar est
            pellentesque.
          </span>
        </div>
        
        <div className="w-[550px] relative slider-container rounded-[30px] bg-[var(--white)]  shadow-[10px_10px_30px_0px_rgba(0,0,0,0.10)]">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id}>
                <div className="px-[60px] pt-[30px] pb-[20px] bg-[var(--white)] border-[1px] border-transparent rounded-[30px] ">
                  <div>
                    <img
                      src="./img/line.svg"
                      alt="Invest Home"
                      className="pb-[20px]"
                    />
                    <span className="text-[var(--text-color-2)] text-[1.2rem] font-[500] block">
                      {testimonial.text}
                    </span>
                    <hr className="text-[#D4D4D4] h-[1px] my-4" />
                  </div>
                  <div className="py-[8px] flex justify-between">
                    <div className="flex items-center gap-[10px]">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-[50px] h-[50px] rounded-full"
                      />
                      <span className="text-[var(--text-color-2)] text-[1.2rem] font-[500]">
                        {testimonial.name}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <TbStarFilled className={testimonial.stars >= 1 ? "text-[#FFC700]" : "text-[var(--text-color-5)]"} />
                      <TbStarFilled className={testimonial.stars >= 2 ? "text-[#FFC700]" : "text-[var(--text-color-5)]"} />
                      <TbStarFilled className={testimonial.stars >= 3 ? "text-[#FFC700]" : "text-[var(--text-color-5)]"} />
                      <TbStarFilled className={testimonial.stars >= 4 ? "text-[#FFC700]" : "text-[var(--text-color-5)]"} />
                      <TbStarFilled className={testimonial.stars >= 5 ? "text-[#FFC700]" : "text-[var(--text-color-5)]"} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="absolute top-[-25px] left-[-25px] z-[99999]">
            <img src="./img/Ellipse 15.svg" alt="Invest Home" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Customers;