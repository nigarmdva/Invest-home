import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { TbBuilding } from "react-icons/tb";
import { PiShareFatLight } from "react-icons/pi";
import { LuHeart } from "react-icons/lu";


const HousesList = ({ house }) => {
  const [fav, setFav] = useState([]);
  const [favToggle, setFavToggle] = useState(false);
  const handleFavToggle = () => {
    setFavToggle(!favToggle);
  };
  const handleFav = (id) => {
    fav.push(id);
    console.log(fav);
  };
  return (
    <div>
      <div className=" w-[250px] relative rounded-[0.5rem] shadow-[0px_2px_8.1px_0px_rgba(139,_139,_139,_0.25)]">
        <img src="./img/ev.jpg" alt="Invest Home" className="w-[100%]" />
        <div
          onClick={() => {
            handleFavToggle();
            handleFav(house.id);
          }}
          className="w-[30px] h-[30px] flex items-center justify-center absolute bg-[rgba(246,246,246,0.62)]  z-[1] rounded-[50%] top-[13px] right-[11px]"
        >
          <LuHeart
            className={`${
              favToggle
              ? "fill-red-500 text-red-500"
              : "fill-transparent"
            } text-[1.2rem]`}
          />
        </div>
        <div className="absolute z-[1] top-[13px] left-[11px] flex flex-col justify-between h-[200px]">
          <div className=" flex flex-col gap-[9px]">
            <div className="w-[30px] h-[30px] flex items-center justify-center bg-[var(--yellow)]  rounded-[50%]">
              <img src="../../../img/paint.svg  " alt="Invest Home"/>
            </div>
            <div className="w-[30px] h-[30px] flex items-center justify-center bg-[var(--primary-color)]  rounded-[50%]">
              <img src="../../../img/clipboard.svg" alt="Invest Home" />
            </div>
          </div>
          <div className="p-[5px]  rounded-full bg-[#fff]  flex items-center gap-[3px] justify-center">
              <img
                src="../../../img/metro.png"
                alt="Invest Home"
                className="w-[18px]"
              />
              <span className=" text-[10px] font-[400] text-[#808080]">
                N.Nərimanov
              </span>
            </div>
        </div>
        <div className="px-[0.62rem]">
          <p className="font-[500] text-[var(--text-color-2)]">{house.title}</p>
          <div className="flex items-center gap-[0.1rem] py-[5px]">
            <span className="text-[var(--text-color-3)]">
              <CiLocationOn />
            </span>
            <span className="font-[400] text-[var(--text-color-3)] text-[0.75rem]">
              {house.location}
            </span>
          </div>
          <p className="font-[600] text-[var(--text-color-2)]">
            $ {house.price}
          </p>
          <div className="text-[0.75rem] text-[var(--text-color-3)] flex justify-between w-[100%] py-[6px]">
            <div className="flex justify-between w-[73%]">
              <div className="flex items-center gap-[0.3rem]">
                <IoBedOutline />
                <span className="font-[300] text-[var(--text-color-3)] text-[0.75rem]">
                  {house.beds} beds
                </span>
              </div>
              <div className="flex items-center gap-[0.3rem]">
                <TbBuilding />
                <span className="font-[300] text-[var(--text-color-3)] text-[0.75rem]">
                  {house.floor}
                </span>
              </div>
              <div className="flex items-center gap-[0.3rem]">
                <img src="./img/Square Meters.svg" alt="Invest Home" />
                <span className="font-[300] text-[var(--text-color-3)] text-[0.75rem]">
                  {house.field}
                </span>
              </div>
            </div>
            <div>
              <span classname="text-[0.75rem] text-[var(--text-color-3)]">
                {house.time}
              </span>
            </div>
          </div>
        </div>
        <hr className="w-[100%] border-[0.05rem] border-[#E5E5E5]" />
        <div>
          <div className="flex items-center justify-between p-[0.5rem]">
            <div className="flex items-center gap-[0.5rem]">
              <img src="./img/image.svg" alt="Invest Home" />
              <span className="text-[0.75rem] text-[#000] font-[500]">
                Annente Blasson
              </span>
            </div>
            <div className="flex items-center justify-center w-[30px] h-[30px] bg-[#F3F3F3] rounded-full">
              <PiShareFatLight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HousesList;
