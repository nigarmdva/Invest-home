import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import houseData from "../../data/house";

import HousesList from "./HousesList";

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

  {
    console.log(filteredData);
  }

  const settings = {
    className: "center",
    infinite: true,
    arrows: false,
    centerPadding: "60px",
    slidesToShow: 4.5,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div className="px-[10rem] py-8 flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-[var(--primary-color)] text-[1.5rem] font-[500] tracking-[0.225rem]">
            Ən son yeniliklərə baxın
          </span>
          <p className="text-[var(--text-color-2)] text-[2.4rem] font-[600] leading-[2.9rem] py-[1rem]">
            {activeType === "butun"
              ? "Ən son siyahıya alınmış əmlaklar"
              : activeType === "satiliq"
              ? "Satılıq əmlaklar"
              : "Kirayə əmlaklar"}
          </p>
          <p className="text-[var(--text-color-3)] font-[400] w-[31rem] leading-[1.6rem]">
            {activeType === "butun"
              ? "Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. "
              : activeType === "satiliq"
              ? "Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. "
              : "Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. "}
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => setActiveType("butun")}
            className={`cursor-pointer flex items-center px-[30px] py-[19px] rounded-[0.25rem] h-[50px] transition-all duration-300 ease-in-out 
                    ${
                      activeType === "butun"
                        ? "bg-[var(--primary-color)] text-[var(--white)]"
                        : "bg-[var(--white)] text-[var(--primary-color)] border border-[var(--primary-color)]"
                    }
                    hover:bg-[var(--primary-color)] hover:text-[var(--white)] focus:bg-[var(--primary-color)] focus:text-[var(--white)] active:bg-[var(--primary-color)] active:text-[var(--white)]`}
          >
            Bütün
          </button>
          <button
            onClick={() => setActiveType("satiliq")}
            className={`cursor-pointer flex items-center px-[30px] py-[19px] rounded-[0.25rem] h-[50px] transition-all duration-300 ease-in-out 
                    ${
                      activeType === "satiliq"
                        ? "bg-[var(--primary-color)] text-[var(--white)]"
                        : "bg-[var(--white)] text-[var(--primary-color)] border border-[var(--primary-color)]"
                    }
                    hover:bg-[var(--primary-color)] hover:text-[var(--white)] focus:bg-[var(--primary-color)] focus:text-[var(--white)] active:bg-[var(--primary-color)] active:text-[var(--white)]`}
          >
            Satılıq
          </button>
          <button
            onClick={() => setActiveType("kiraye")}
            className={`cursor-pointer flex items-center px-[30px] py-[19px] rounded-[0.25rem] h-[50px] transition-all duration-300 ease-in-out 
                    ${
                      activeType === "kiraye"
                        ? "bg-[var(--primary-color)] text-[var(--white)]"
                        : "bg-[var(--white)] text-[var(--primary-color)] border border-[var(--primary-color)]"
                    }
                    hover:bg-[var(--primary-color)] hover:text-[var(--white)] focus:bg-[var(--primary-color)] focus:text-[var(--white)] active:bg-[var(--primary-color)] active:text-[var(--white)]`}
          >
            Kirayə
          </button>
        </div>
      </div>
      <div>
        <Slider {...settings}>
          {filteredData.map((house) => (
            <div key={house.id}>
              <HousesList house={house} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex justify-center items-center py-[3rem]">
        <a href="" className=" cursor-pointer bg-[var(--primary-color)] text-[var(--white)] w-[12rem] h-[3.5rem] flex justify-center items-center rounded-[0.25rem]">Hamısına bax</a>
      </div>
    </div>
  );
};

export default RecentHouses;
