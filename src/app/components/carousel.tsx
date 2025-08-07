// Carousel.tsx
import { ArrowLeft, ArrowRight } from "iconsax-react";
import { useState, ReactNode } from "react";

interface CarouselProps {
  slides: ReactNode[]; // Accept any JSX elements
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  if (!slides.length) return null;

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div className="w-full pb-20 box-border mx-auto relative overflow-hidden sm:pl-10">
      <div
        className="flex transition-transform duration-500 w-full gap-1"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full shrink-0">
            {slide}
          </div>
        ))}
      </div>
      <button
        onClick={nextSlide}
        className=" absolute z-20 bg-white rounded-full p-2 shadow right-10 sm:top-[30%] xs:top-[50%] hover:bg-gray-200 transition"
      >
        <ArrowRight size="24" color="#000" />
      </button>

      <button
        onClick={prevSlide}
        className="absolute z-20 bg-white rounded-full p-2 shadow -left-10 top-[30%] hover:bg-gray-200 transition"
      >
        <ArrowLeft size="24" color="#000" />
      </button>

      {/* Controls */}
      <div className="absolute bottom-7 w-full flex justify-center items-center gap-4">
        <div className="flex gap-2">
          {Array(slides.length)
            .fill("")
            .map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  current === index ? "bg-gray-500  px-7" : "bg-gray-300"
                }`}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
