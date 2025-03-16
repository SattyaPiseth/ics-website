import React, { useState } from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import slides from "./../json/layouts/carousel.json"; // Import JSON data

export function CarouselComponent() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="container mx-auto py-12 px-5" data-aos="zoom-in">
      <Carousel
        activeindex={activeIndex}
        length={slides.length}
        autoplay={true}
        loop={true}
        className="rounded-xl h-[500px] md:h-[600px] lg:h-[700px]"
        nextbutton={
          <Button
            onClick={handleNextSlide}
            variant="text"
            aria-label="Next slide"
          >
            Next
          </Button>
        }
        prevbutton={
          <Button
            onClick={handlePrevSlide}
            variant="text"
            aria-label="Previous slide"
          >
            Previous
          </Button>
        }
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div
            className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2"
            role="tablist"
          >
            {slides.map((_, i) => (
              <button
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                role="tab"
                aria-selected={activeIndex === i}
              />
            ))}
          </div>
        )}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative h-full w-full">
            <img
              src={slide.image}
              alt={`Image ${index + 1}`}
              className="h-full w-full sm:object-none md:object-cover " // Ensures the image covers the carousel
              style={{ transition: "opacity 0.5s ease" }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/75 flex items-end justify-center p-4">
              <div className="min-w-[280px] max-w-md md:max-w-lg lg:max-w-xl mx-auto w-full text-center">
                <Typography
                  variant="h3"
                  color="white"
                  className="mb-4 font-bold"
                  data-aos="flip-down"
                >
                  {slide.title}
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="opacity-80 mb-5 leading-relaxed"
                  data-aos="flip-down"
                >
                  {slide.description}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
