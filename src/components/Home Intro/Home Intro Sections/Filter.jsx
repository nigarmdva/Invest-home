import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

const Filter = () => {
  return (
    <>
      <div className="flex items-center">
        <div className="text-[var(--primary-color)] w-[994px] text-[1rem] font-[400] flex items-center py-[0.6rem] bg-[var(--white)]  border border-[#F0EEEE] shadow-[0px_3px_15px_0px_rgba(0,_0,_0,_0.05)] rounded-l-[0.5rem]">
          {/* <div className= flex items-center"> */}
          <div className="border-r border-r-[1px] border-r-[#E9E9E9] py-[1rem] px-[2rem] ">
            <span>Şəhər, Metro, Ünvan...</span>
          </div>
          <div className="flex items-center gap-[1.3rem] border-r border-r-[1px] border-r-[#E9E9E9] py-[1rem] px-[2rem]">
            <span>Mülkiyyət tipini seçin</span>
            <IoMdArrowDropdown className="text-[#000]" />
          </div>
          <div className="flex items-center gap-[1.3rem] border-r border-r-[1px] border-r-[#E9E9E9] py-[0.5rem] px-[2rem]">
            <div className="flex flex-col">
              <span className="text-[#969696] text-[0.8rem] ">Qiymət</span>
              <span>Əlavə et</span>
            </div>
            <div>
              <IoMdArrowDropdown className="text-[#000]" />
            </div>
          </div>
          <div className="flex items-center gap-[1.3rem] border-r border-r-[1px] border-r-[#E9E9E9] py-[0.5rem] px-[2rem]">
            <div className="flex flex-col">
              <span className="text-[#969696] text-[0.8rem] ">Otaq</span>
              <span>Əlavə et</span>
            </div>
            <div>
              <IoMdArrowDropdown className="text-[#000]" />
            </div>
          </div>
          <div className="flex items-center gap-[1.3rem]  py-[1rem] px-[2rem]">
            <span>Filterlər</span>
            <IoMdArrowDropdown className="text-[#000]" />
          </div>
          {/* </div> */}
        </div>
        <div className="flex items-center justify-center h-[4.9rem] w-[8rem] bg-[var(--primary-color)] rounded-r-[0.5rem] ">
          <IoSearchOutline className="text-[var(--white)] text-[2rem]" />
        </div>
      </div>
    </>
  );
};

export default Filter;
