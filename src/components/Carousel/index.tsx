import "./index.css";
import { useState, useEffect } from "react";
import { SliderButton } from "../SliderButton";

export function Carousel() {
  const content = [
    {
      image: "./image1.jpg",
      quote: "Hello, Welcome to Our Company Profile",
      desc: "Lorem Ipsum Dolor Sit Amet",
    },
    {
      image: "./image2.jpg",
      quote: "Checkout this interesting choices!!",
      desc: "Lorem Ipsum Dolor Sit Amet",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % content.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [content.length]);

  return (
    <div className="flex items-center justify-center h-full w-full overflow-hidden">
      {content.map((item, index) => (
        <div
          key={index}
          className={`relative h-full w-full ${
            index === currentSlide ? "block" : "hidden"
          }`}
        >
          <img
            src={item.image}
            alt=""
            className={`absolute h-full w-full object-cover`}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col space-y-10 text-center items-center justify-center bg-black bg-opacity-50">
            <h1 className="font-bold text-4xl text-white">{item.quote}</h1>
            <p className="text-white">{item.desc}</p>
            <SliderButton length={2} currentSlide={index} 
            onClick={setCurrentSlide}/>
          </div>
        </div>
      ))}
    </div>
  );
}
