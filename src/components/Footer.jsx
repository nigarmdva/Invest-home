import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[#4361EE] opacity-10"></div>
      <div className=" flex flex-row justify-between relative z-10 font-[500] px-[160px] py-[85px] leading-[1.7rem] ">
        <div className="flex flex-col gap-[3.8rem]">
          <div className="flex flex-col gap-[1.2rem]">
            <div className="flex items-center gap-[8px]">
              <div className="w-[50px] h-[50px] ">
                <img
                  src="./img/logo.jfif"
                  alt="Invest Home"
                  className="w-[50px] h-[50px] rounded-[50%]"
                />
              </div>
              <span className="text-[var(--text-color-2)] font-[600]">İnvest Home</span>
            </div>
            <div>
              <span className="text-[var(--text-color-2)]" >Rusel Plaza, Babək pr.</span>
            </div>
          </div>
          <div className="flex flex-col gap-[1.2rem]">
            <div className="flex items-center gap-[8px]">
              <img src="./img/phone.svg" alt="Invest Home" />
              <a href="tel:+994552224120" className="text-[var(--text-color-2)]">
              +994 55 222 41 20
              </a>
            </div>
            <div className="flex items-center gap-[8px]">
              <img src="./img/mail.svg" alt="Invest Home" />
              <a href="mailto:investhomaz@gmail.com" className="text-[var(--text-color-2)]">
              investhomaz@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-[2.5rem] ">
          <div>
            <span className="text-[var(--text-color-1)] font-[1.2rem]">Quick Links</span>
          </div>
          <div>
            <ul className="text-[var(--text-color-2)] font-[400] leading-[1.7rem]">
              <li className="w-[120px]"><a href="">Ev Alqı-satqısı</a></li>
              <li className="w-[120px]"><a href="">Kirayə</a></li>
              <li className="w-[120px]"><a href="">Haqqımızda</a></li>
              <li className="w-[120px]"><a href="">Xidmətlər</a></li>
              <li className="w-[120px]"><a href="">Bloq</a></li>
              <li className="w-[120px]"><a href="">Agent ol</a></li>
            </ul>
          </div>
        </div>
        <div className=" flex flex-col gap-[2.5rem]">
          <div className="w-[140px]">
            <span className="text-[var(--text-color-1)] font-[1.2rem]">Baku, Azerbaijan</span>
          </div>
          <div>
            <ul className="text-[var(--text-color-2)] font-[400]">
              <li><a href="">Nizami</a></li>
              <li><a href="">Narimanov</a></li>
              <li><a href="">Xatai</a></li>
              <li><a href="">Nasimi</a></li>
              <li><a href="">Sebail</a></li>
              <li><a href="">Xazar</a></li>
              <li><a href="">Suraxani</a></li>
              <li><a href="">Yasamal</a></li>
              <li><a href="">Sabunchu</a></li>
              <li><a href="">Binagadi</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col" >
          <div className="pb-[3.3rem]">
            <span className="text-[var(--text-color-1)] font-[1.2rem]">Təkliflərinizi bizimlə bölüşün!</span>
          </div>
          <div className="relative shadow-[4px_10px_20px_0px_rgba(0, 0, 0, 0.05)] ">
            <div >
              <input type="text" placeholder="Email Adress" className="placeholder-text-[var(--text-color-4)] font-[400] outline-0 bg-[var(--white)]  pl-[20px] rounded-[30px] w-[350px] h-[60px]"/>
            </div>
            <div className="bg-[var(--primary-color)] w-[50px] h-[50px] flex items-center justify-center rounded-[50%] absolute top-1 right-2">
              <IoMdArrowForward className="text-[var(--white)] text-[1.5rem]"/>
            </div>
          </div>
          <div className="py-[1.5rem]">
            <span className="text-[var(--text-color-1)] font-[1.2rem]">Follow Us On</span>
          </div>
          <div className="text-[var(--primary-color)] flex flex-row items-center gap-[10px] ">
            <a href=""><FaLinkedinIn className="text-[1.5rem]"/></a>
           <a href=""> <FaFacebookF className="text-[1.3rem]"/></a>
            <a href=""><FaInstagram className="text-[1.5rem]"/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
