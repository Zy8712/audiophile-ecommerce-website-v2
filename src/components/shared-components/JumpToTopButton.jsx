'use client'
import React, { useState, useEffect } from 'react';

export default function JumpToTopButton(){
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle the scroll event
  // pageOffsetY depreciated, replaced with scrollY
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling behavior
    });
  };

  return (
    <button onClick={scrollToTop}
      className={`fixed z-[35] bottom-3 right-3 w-12 h-12 grid place-items-center bg-gradient-to-b from-theme-dark-orange to-white rounded-lg ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ease-linear`}>
        <img src="/images/onlinewebfonts_up_arrow.svg" alt="" className="w-7 h-7 pointer-events-none select-none" />
    </button>
  );
};