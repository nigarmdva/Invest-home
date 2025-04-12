import React from "react";

const SubFooter = () => {
  return (
    <>
      <div className="bg-[var(--text-color-1)] h-[50px] text-[var(--text-color-4)] font-[400]">
        <div className="px-[160px] flex items-center h-full justify-between">
          <p>© İnvest Home – All rights reserved</p>
          <div >
            <ul className="flex w-[500px] justify-between">
                <li><a href="">Terms and Conditions</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Disclaimer</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubFooter;
