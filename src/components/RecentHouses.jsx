

import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import houseData from '../data/house'
import { CiLocationOn } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { TbBuilding } from "react-icons/tb";
import { PiShareFatLight } from "react-icons/pi";




const RecentHouses = () => {
    const [activeType, setActiveType] = useState("butun");
    const [filteredData, setFilteredData] = useState([]);
    
    useEffect(() => {
        if (activeType === "butun") {
            setFilteredData(houseData);
        } else {
            setFilteredData(houseData.filter((house) => house.type === activeType));
        }
    }, [activeType]);
    
    {console.log(filteredData);}

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4.5,
        swipeToSlide: true,
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }
    }
  return (
    <div className='px-[10rem] py-8'>
      <div className='flex justify-between items-center mb-6'>
        <div >
          <span className='text-[var(--primary-color)] text-[1.5rem] font-[500] tracking-[0.225rem]'>
          Ən son yeniliklərə baxın
          </span>
          <p className='text-[var(--text-color-2)] text-[2.4rem] font-[600] leading-[2.9rem] py-[1rem]'>
          {activeType === "butun"
            ? "Ən son siyahıya alınmış əmlaklar"
            : activeType === "satiliq"
            ? "Satılıq əmlaklar"
            : "Kirayə əmlaklar"}
          </p>
          <p className='text-[var(--text-color-3)] font-[400] w-[31rem] leading-[1.6rem]'>
          {activeType==="butun"
            ? "Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. "
            : activeType==="satiliq"
            ? "Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. "
            : "Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. "}
          </p>
        </div>
        <div className='flex gap-4'>
            <button 
                onClick={() => setActiveType("butun")}
                className={`cursor-pointer flex items-center px-[30px] py-[19px] rounded-[0.25rem] h-[50px] transition-all duration-300 ease-in-out 
                    ${activeType === "butun" 
                    ? "bg-[var(--primary-color)] text-[var(--white)]" 
                    : "bg-[var(--white)] text-[var(--primary-color)] border border-[var(--primary-color)]"}
                    hover:bg-[var(--primary-color)] hover:text-[var(--white)] focus:bg-[var(--primary-color)] focus:text-[var(--white)] active:bg-[var(--primary-color)] active:text-[var(--white)]`}
                >
                Bütün
            </button>
            <button 
                onClick={() => setActiveType("satiliq")}
                className={`cursor-pointer flex items-center px-[30px] py-[19px] rounded-[0.25rem] h-[50px] transition-all duration-300 ease-in-out 
                    ${activeType === "satiliq" 
                    ? "bg-[var(--primary-color)] text-[var(--white)]" 
                    : "bg-[var(--white)] text-[var(--primary-color)] border border-[var(--primary-color)]"}
                    hover:bg-[var(--primary-color)] hover:text-[var(--white)] focus:bg-[var(--primary-color)] focus:text-[var(--white)] active:bg-[var(--primary-color)] active:text-[var(--white)]`}
                >
                Satılıq
            </button>
            <button 
                onClick={() => setActiveType("kiraye")}
                className={`cursor-pointer flex items-center px-[30px] py-[19px] rounded-[0.25rem] h-[50px] transition-all duration-300 ease-in-out 
                    ${activeType === "kiraye" 
                    ? "bg-[var(--primary-color)] text-[var(--white)]" 
                    : "bg-[var(--white)] text-[var(--primary-color)] border border-[var(--primary-color)]"}
                    hover:bg-[var(--primary-color)] hover:text-[var(--white)] focus:bg-[var(--primary-color)] focus:text-[var(--white)] active:bg-[var(--primary-color)] active:text-[var(--white)]`}
                >
                Kirayə
            </button>
        </div>
      </div>
      <div>
        <Slider {...settings} >
           {filteredData.map((house)=>(
            <div key={house.id} className='px-[1rem] shadow-[0px_2px_8.1px_0px_rgba(139,_139,_139,_0.25)]'>
              <div className='w-[250px]' >
                <img src="./img/ev.jpg" alt="Invest Home"  className=''/>
              </div>
              <div className='px-[0.62rem] w-[250px] rounded-[0.5rem]'>
                <p className='font-[500] text-[var(--text-color-2)]'>{house.title}</p>
                <div className='flex items-center gap-[0.1rem] py-[10px]'>
                  <span className='text-[var(--text-color-3)]'><CiLocationOn/></span>
                  <span className='font-[400] text-[var(--text-color-3)] text-[0.75rem]'>{house.location}</span>
                </div>
                <p className='font-[600] text-[var(--text-color-2)]'>$ {house.price}</p>
                <div className='text-[0.75rem] text-[var(--text-color-3)] flex justify-between w-[100%] py-[6px]'>
                  <div className='flex justify-between w-[73%]'>
                    <div className='flex items-center gap-[0.3rem]'>
                      <IoBedOutline />
                      <span className='font-[300] text-[var(--text-color-3)] text-[0.75rem]'>{house.beds} beds</span>
                    </div>
                    <div className='flex items-center gap-[0.3rem]'>
                      <TbBuilding />
                      <span className='font-[300] text-[var(--text-color-3)] text-[0.75rem]'>{house.floor}</span>
                    </div>
                    <div className='flex items-center gap-[0.3rem]'>
                      <img src="./img/Square Meters.svg" alt="Invest Home" />
                      <span className='font-[300] text-[var(--text-color-3)] text-[0.75rem]'>{house.field}</span>
                    </div>
                  </div>
                  <div>
                    <span classname='text-[0.75rem] text-[var(--text-color-3)]'>{house.time}</span>
                  </div>
                </div>
                <hr className='w-[100%] border-[0.05rem] border-[#E5E5E5]' />
                <div className='flex items-center justify-between p-[0.5rem]'>
                  <div className='flex items-center gap-[0.5rem]'>
                    <img src="./img/image.svg" alt="Invest Home" />
                    <span className='text-[0.75rem] text-[#000] font-[500]'>Annente Blasson</span>
                  </div>
                  <div className='flex items-center justify-center w-[30px] h-[30px] bg-[#F3F3F3] rounded-full'>
                    <PiShareFatLight/>
                  </div>
                </div>
              </div>
            </div>
           ))}
        </Slider>
      </div>
    </div>
  )
}

export default RecentHouses;
