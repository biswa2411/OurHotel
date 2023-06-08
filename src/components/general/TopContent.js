import React from "react";
import DiamondLogo from "../assets/logo/diamond.png";

const TopContent = (props) => {
  return (
    <div
      className={`font-nunito h-${props.height} bg-[url("https://rare-gallery.com/uploads/posts/568536-dark-hotel.jpg")] bg-cover  py-[250px] uppercase text-white  flex flex-col justify-center tracking-wider items-center `}
      style={{
        backgroundImage: `url("https://rare-gallery.com/uploads/posts/568536-dark-hotel.jpg")`,
      }}
    >
      <p className="text-[32px] font-bodyText">{props.topHeading}</p>
      <h1 className="text-[70px] font-bodyText">{props.mainHeading}</h1>
      {/* <div className="">jxsxnsjnxj</div> */}
      <div className="flex flex-row justify-center items-center text-[32px] font-bodyText gap-5">
        <img src={DiamondLogo} />
        <p className="border-t border-b border-white ">{props.bottomHeading}</p>
        <img src={DiamondLogo} />
      </div>
      {/* <div className="border-y border-white my-4"></div> */}
    </div>
  );
};

export default TopContent;
