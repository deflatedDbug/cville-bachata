import React from "react";

const HeroButton = ({ styles }) => (
  <div className="flex"> 
    <a href="#private bookings">
      <button type="button" className={`py-4 px-6 mt-10 mr-8 font-poppins font-medium text-[18px] text-primary bg-red-gradient opacity-0 rounded-[10px] outline-none ${styles}`}
        style={{ marginRight: '6rem', marginTop: '7.5rem', animation: 'slideUp 2s ease forwards', animationDelay: '2.2s' }}
      >
        Get Started
      </button>
    </a>
  </div>

);

export default HeroButton;