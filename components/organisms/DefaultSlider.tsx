import useEmblaCarousel from "embla-carousel-react";
import React, { FC, ReactNode } from "react";
import DoubleTextBlock from "../molecules/DoubleTextBlock";

// Icons next/prev
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

interface DefaultSliderProps {
  showArrow: boolean;
  title: string;
  subtitle: string;
  children: ReactNode;
}

const DefaultSlider: FC<DefaultSliderProps> = ({
  showArrow,
  title,
  subtitle,
  children,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    slidesToScroll: 1,
  });

  return (
    <div>
      <div
        className={
          showArrow
            ? "flex justify-between items-end text-start"
            : "text-center"
        }
      >
        <DoubleTextBlock subtitle={subtitle} title={title} />
        {showArrow && (
          <div className="flex items-center gap-3">
            <IoIosArrowBack
              className="text-4xl transform translate-y-[-50%] p-2 rounded-full primary-bg cursor-pointer hover:extra-color"
              onClick={() => emblaApi?.scrollPrev()}
            />
            <IoIosArrowForward
              className=" text-4xl transform translate-y-[-50%] p-2 rounded-full primary-bg cursor-pointer hover:extra-color"
              onClick={() => emblaApi?.scrollNext()}
            />
          </div>
        )}
      </div>

      <div className="relative mt-10">
        <div className="overflow-hidden py-6" ref={emblaRef}>
          <div className="flex gap-3">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DefaultSlider;
