"use client";

import Container from "@/components/atoms/Container";
import DoubleTextBlock from "@/components/molecules/DoubleTextBlock";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";

import { TbArrowsRandom } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import DefaultSlider from "@/components/organisms/DefaultSlider";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const slides = [
  {
    id: 1,
    title: "Marketing & Sale",
    subtitle: "1526 Jobs Available",
    icon: <TbArrowsRandom />,
  },
  {
    id: 1,
    title: "Marketing & Sale",
    subtitle: "1526 Jobs Available",
    icon: <TbArrowsRandom />,
  },
  {
    id: 2,
    title: "Front-end development",
    subtitle: "1526 Jobs Available",
    icon: <TbArrowsRandom />,
  },
  {
    id: 3,
    title: "Java",
    subtitle: "1526 Jobs Available",
    icon: <TbArrowsRandom />,
  },
  {
    id: 4,
    title: "Marketing & Sale",
    subtitle: "1526 Jobs Available",
    icon: <TbArrowsRandom />,
  },
  {
    id: 5,
    title: "Marketing & Sale",
    subtitle: "1526 Jobs Available",
    icon: <TbArrowsRandom />,
  },
];

const Categories = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    slidesToScroll: 1,
  });

  return (
    <section className="text-center mt-20">
      <DefaultSlider
        title="Browse by category"
        subtitle="Find the job that’s perfect for you. about 800+ new jobs everyday"
        showArrow={true}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="flex-shrink-0 min-w-0 basis-full md:basis-1/2 lg:basis-[calc(20%-0.75rem)] border border-gray-500 primary-hover-effect p-5 rounded-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <div className="flex item-center gap-2">
              <div className="text-4xl mt-1">{slide.icon}</div>
              <div className="text-start">
                <h6 className="primary-color font-bold whitespace-nowrap">
                  {slide.title}
                </h6>
                <p className="additional-color">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </DefaultSlider>
    </section>
  );
};

export default Categories;
