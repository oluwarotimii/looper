// Carousel.tsx
import { ArrowLeft, ArrowRight } from "iconsax-react";
import { useState, ReactNode } from "react";

interface CarouselProps {
  slides: ReactNode[]; // Accept any JSX elements
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  if (!slides.length) return null;

  const slideMaxLength = Math.floor(slides.length / 2); // Assuming each slide is a pair of items

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div className="w-full pb-20  mx-auto relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 w-full gap-1"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-fit shrink-0">
            {slide}
          </div>
        ))}
      </div>
      {slideMaxLength !== current + 1 && (
        <button
          onClick={nextSlide}
          className="absolute z-50 bg-white rounded-full p-2 shadow right-10 top-[50%] hover:bg-gray-200 transition"
        >
          <ArrowRight size="24" color="#000" />
        </button>
      )}

      {current > 0 && (
        <button
          onClick={prevSlide}
          className="absolute z-50 bg-white rounded-full p-2 shadow -left-10 top-[50%] hover:bg-gray-200 transition"
        >
          <ArrowLeft size="24" color="#000" />
        </button>
      )}

      {/* Controls */}
      <div className="absolute bottom-7 w-full flex justify-center items-center gap-4">
        <div className="flex gap-2">
          {Array(slideMaxLength)
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
