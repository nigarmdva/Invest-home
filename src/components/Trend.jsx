import React from 'react'
import Slider from "react-slick";
import { IoIosArrowRoundForward } from "react-icons/io";



const Trend = () => {
    const articles=[
        {
            id:1,
            image:"./img/article1.png",
            title:"Ev alarkən qaçınmaq üçün ən yaxşı 10 səhv",
            description:"Etiam eget elementum elit. Aenean dignissim dapibus vestibulum",
            date:{
                day:"28",
                weekday:"Ş"
            }
        },
        {
            id:2,
            image:"./img/article2.png",
            title:"Tez Satış üçün Evinizi Necə Hazırlamaq olar",
            description:"Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.",
            date:{
                day:"26",
                weekday:"C"
            }
        },
        {
            id:3,
            image:"./img/article3.png",
            title:"İlk dəfə ev satanlar üçün 5 məsləhət",
            description:"In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.",
            date:{
                day:"08",
                weekday:"B.E"
            }
        },
        {
            id:4,
            image:"./img/article1.png",
            title:"Ev alarkən qaçınmaq üçün ən yaxşı 10 səhv",
            description:"Etiam eget elementum elit. Aenean dignissim dapibus vestibulum",
            date:{
                day:"28",
                weekday:"Ş"
            }
        },
        {
            id:5,
            image:"./img/article2.png",
            title:"Tez Satış üçün Evinizi Necə Hazırlamaq olar",
            description:"Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.",
            date:{
                day:"26",
                weekday:"C"
            }
        },
        {
            id:6,
            image:"./img/article3.png",
            title:"İlk dəfə ev satanlar üçün 5 məsləhət",
            description:"In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.",
            date:{
                day:"08",
                weekday:"B.E"
            }
        },
        {
            id:7,
            image:"./img/article1.png",
            title:"Ev alarkən qaçınmaq üçün ən yaxşı 10 səhv",
            description:"Etiam eget elementum elit. Aenean dignissim dapibus vestibulum",
            date:{
                day:"28",
                weekday:"Ş"
            }
        },
        {
            id:8,
            image:"./img/article2.png",
            title:"Tez Satış üçün Evinizi Necə Hazırlamaq olar",
            description:"Nullam odio lacus, dictum quis pretium congue, vehicula venenatis nunc.",
            date:{
                day:"26",
                weekday:"C"
            }
        },
        {
            id:9,
            image:"./img/article3.png",
            title:"İlk dəfə ev satanlar üçün 5 məsləhət",
            description:"In hac habitasse platea dictumst. Phasellus vel velit vel augue maximus.",
            date:{
                day:"08",
                weekday:"B.E"
            }
        },
     
    ]
    
  const customDotsClassForBlogs = "trend-dots";
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        pauseOnHover: true,
        autoplaySpeed: 3000,
        dotsClass: `slick-dots ${customDotsClassForBlogs}`,
        customPaging: (i) => (
        <div className=" dot-indicator w-[100px] h-1  bg-[var(--text-color-4)] rounded-full duration-300" />
        ),
      };
  return (
    <>
         <style jsx>{`
        .trend-dots.slick-dots{
            display: flex !important;
            flex-direction: row !important;
            justify-content: center !important;
            align-items: center !important;
            gap: 10px !important; 
        }
        
        .trend-dots.slick-dots li {
            margin: 0 20px !important;
            width: auto !important;
            height: auto !important;
        }
        
        .trend-dots.slick-dots li.slick-active div {
          background-color: var(--white) !important; 
        }
      `}</style>
        <div className='bg-[var(--primary-color)] text-[var(--white)] px-[10rem] py-[100px]'>
            <div className='flex flex-col items-center gap-[30px]'>
                <p className='text-[1.2rem] font-[500] text-center uppercase'>Trenddə Nədİr ?</p>
                <span className='text-[2.4rem] font-[600]'>Ən son Bloqlar və Yazılar</span>
            </div>
            <Slider {...settings}>
                {
                    articles.map((article) => (
                        <div key={article.id} className='outline-none pt-[50px] relative '>
                            <div className=''>
                                        <img src={article.image} alt="Invest Home" className=' w-[440px] h-[300px] shadow-[10px_10px_30px_0px_rgba(0, 0, 0, 0.20)]' />
                                        <div className=' px-[28px]'>
                                            <p className='text-[1.7rem] font-[500] pb-[10px]'>{article.title}</p>
                                            <span className='text-[1rem] font-[400] text-[var(--text-color-5)]'>{article.description}</span>
                                        </div>
                                        <div className='flex float-right mr-[28px] my-[40px] text-[#3A0CA3] border border-[#3A0CA3] hover:bg-[#3A0CA3] hover:text-[var(--white)] transition-colors duration-300  w-[50px] h-[50px] rounded-[50%] bg-[var(--white)] items-center justify-center'>
                                        <a href="">
                                            <IoIosArrowRoundForward className='text-[2.5rem]' />
                                        </a>
                                        </div>
                            </div>
                            <div className='bg-[var(--white)] flex flex-col px-[10px] w-[47px] items-center justify-center absolute rounded-[0_0_10px_10px] top-[70px] left-[60px]'>
                                <span  className='font-[500] text-[1.2rem] text-[var(--text-color-2)]'>{article.date.day} </span>
                                <span className='font-[400] text-[var(--text-color-4)]'>{article.date.weekday}</span>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    </>
  )
}

export default Trend