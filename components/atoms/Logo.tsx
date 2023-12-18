import { Roboto } from "next/font/google";
import Image from "next/image";
import React from "react";

const inter = Roboto({ subsets: ["latin"], weight: "700" });

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image
        alt="Rock"
        draggable={false}
        width={50}
        height={50}
        src="https://atlas-content-cdn.pixelsquid.com/stock-images/small-rock-RBexZ76-600.jpg"
      />
      <h6 className={`${inter.className} text-2xl`}>The Rock</h6>
    </div>
  );
};

export default Logo;
