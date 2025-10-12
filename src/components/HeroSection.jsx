import React from "react";
import mainimg from "../assets/Seasonal_Companion.jpg";

const HeroSection = () => {
  return (
    <div
      className="w-full min-h-[60vh] flex items-center justify-center relative overflow-hidden bg-contain bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${mainimg})`,
      }}
    >
      {/* Text Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
          {/* "The greatest wealth is health." */}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          {/* Stay healthy, stay safe with your Seasonal Companion. */}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
