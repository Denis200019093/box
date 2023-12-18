import Image from "next/image";
import React, { FC, ReactNode } from "react";

interface DefaultBannerProps {
  imageSrc: string;
  children: ReactNode;
}
// The component includes two blocks, image by default and children
const DefaultBanner: FC<DefaultBannerProps> = ({ imageSrc, children }) => {
  return (
    <section className="flex flex-wrap md:flex-nowrap justify-between gap-4 lg:gap-10 primary-bg rounded-xl">
      <Image
        src={imageSrc}
        alt="Banner Image"
        className="object-cover object-center h-full rounded-xl w-full md:w-1/2"
        width={500}
        height={500}
      />
      <div className="px-4">{children}</div>
    </section>
  );
};

export default DefaultBanner;
