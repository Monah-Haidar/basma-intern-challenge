import { useState, useEffect } from "react";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import Nav from "./nav";
import MoreInfoButton from "./MoreInfoButton";

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";


export default function Hero() {
  const slides = [
    {
      title: "الاخبار المحلية",
      description:
        "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت …",
      img: hero1,
      buttonText: "المزيد",
    },
    {
      title: "الاخبار المحلية",
      description:
        "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت …",
      img: hero2,
      buttonText: "المزيد",
    },
    {
      title: "الاخبار المحلية",
      description:
        "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال … او نماذج مواقع انترنت …",
      img: hero1,
      buttonText: "المزيد",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Adjust the breakpoint as needed
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  useEffect(() => {
    if(!isMobile){
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
          }, 5000); // Change slide every 5 seconds
          return () => clearInterval(interval); // Cleanup on component unmount
    }
  }, [slides.length, isMobile]);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => { 
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <>
      <section className="px-0 lg:px-24">
        <div className="relative h-[70vh] xl:h-[75vh]">
          <Nav />

          {slides.map((slide, index) => (
            <div
              className={`rounded-b-md  absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              key={index}
            >
              <img
                src={slide.img}
                alt="Slide background"
                className="w-full h-full object-cover rounded-b-md "
              />
              <div className="rounded-b-md absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-60"></div>
              <div className="rounded-b-md  absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>

              <div className="absolute sm:bottom-28 bottom-12 right-8 sm:right-16 lg:right-32 flex flex-col items-end">
                <h1 className="pb-3 pl-2 mb-4 text-lg sm:text-2xl font-bold text-end text-white border-b-2 border-neutral-600">
                  {slide.title}
                </h1>
                <p className="mb-3 text-sm sm:text-xl text-end text-white md:max-w-[70ch] pl-4">
                  {slide.description}
                </p>
                <MoreInfoButton link="/login" className="bg-orange-500">{slide.buttonText}</MoreInfoButton>
              </div>
            </div>
          ))}

          <button
            className="block sm:hidden absolute top-1/2 left-4 transform -translate-y-1/2 transition-transform duration-300 ease-in-out hover:-translate-x-2"
            onClick={prevSlide}
          >
            <ChevronLeftIcon className="h-8 w-8 text-gray-500 hover:text-gray-800" />
          </button>
          <button
            className="block sm:hidden absolute top-1/2 right-4 transform -translate-y-1/2 transition-transform duration-300 ease-in-out hover:translate-x-2"
            onClick={nextSlide}
          >
            <ChevronRightIcon className="h-8 w-8 text-gray-500 hover:text-gray-800" />
          </button>

          <div className="hidden sm:flex absolute bottom-16 left-36 transform -translate-x-1/2 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 border-2 border-orange-500 ${
                  index === currentSlide ? "bg-white" : "bg-orange-500 "
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
