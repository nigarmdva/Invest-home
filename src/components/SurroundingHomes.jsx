import React from "react";

const SurroundingHomes = () => {
  const data = [
    {
      id: 1,
      image: "./img/mardakan.png",
      quantity: "216",
      place: "Mardakan, Baku",
    },
    {
      id: 2,
      image: "./img/melisa.png",
      quantity: "141",
      place: "Melissa Park",
    },
    {
      id: 3,
      image: "./img/buzovna.png",
      quantity: "212",
      place: "Buzovna, Baku",
    },
    {
      id: 4,
      image: "./img/masazir.png",
      quantity: "183",
      place: "Masazır, Baku",
    },
    {
      id: 5,
      image: "./img/seabreeze.png",
      quantity: "112",
      place: "Sea Breeze",
    },
  ];
  return (
    <div className="pt-[10rem] pb-[20rem] px-[10rem] flex flex-col">
      <div className="px-[1.1rem]">
        <span className="uppercase text-[var(--primary-color)] text-[1.2rem] font-[500]">
          ŞƏHƏRƏ BÖYÜK SAHƏLƏR
        </span>
        <p className="text-[var(--text-color-2)] text-[2.4rem] font-[600]">
          Qonşuluq Əmlakları
        </p>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-row ">
            <div className="relative">
              <img src="./img/mardakan.png" alt="Invest Home" />
              <div className="absolute bottom-[3.1rem] left-[4rem] flex flex-col gap-[1px]">
                <p className="text-[var(--white)] text-[3.5rem] font-[600] opacity-[0.6]">216</p>
                <span className="text-[var(--white)] text-[1.2rem] font-[500] ">Mardakan, Baku</span>
              </div>
            </div>
            <div className="relative">
              <img src="./img/melisa.png" alt="Invest Home" />
              <div className="absolute bottom-[3.1rem] left-[4rem] flex flex-col gap-[1px]">
                <p className="text-[var(--white)] text-[3.5rem] font-[600] opacity-[0.6]">141</p>
                <span className="text-[var(--white)] text-[1.2rem] font-[500] ">Melissa Park</span>
              </div>
            </div>
            <div className="relative">
              <img src="./img/buzovna.png" alt="Invest Home" />
              <div className="absolute bottom-[3.1rem] left-[4rem] flex flex-col gap-[1px]">
                <p className="text-[var(--white)] text-[3.5rem] font-[600] opacity-[0.6]">212</p>
                <span className="text-[var(--white)] text-[1.2rem] font-[500] ">Buzovna, Baku</span>
              </div>
           </div>
        </div>
        <div className="flex flex-row">
          <div className="relative">
              <img src="./img/masazir.png" alt="Invest Home" />
              <div className="absolute bottom-[3.1rem] left-[4rem] flex flex-col gap-[1px]">
                <p className="text-[var(--white)] text-[3.5rem] font-[600] opacity-[0.6]">183</p>
                <span className="text-[var(--white)] text-[1.2rem] font-[500] ">Masazır, Baku</span>
              </div>
          </div>
          <div className="relative">
              <img src="./img/seabreeze.png" alt="Invest Home" className="" />
              <div className="absolute bottom-[3.1rem] left-[4rem] flex flex-col gap-[1px]">
                <p className="text-[var(--white)] text-[3.5rem] font-[600] opacity-[0.6]">112</p>
                <span className="text-[var(--white)] text-[1.2rem] font-[500] ">Sea Breeze</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurroundingHomes;
