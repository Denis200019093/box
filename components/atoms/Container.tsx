import React, { FC } from "react";

const Container: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-11/12 md:max-w-[1200px] lg:max-w-[1330px] mx-auto">
      {children}
    </div>
  );
};

export default Container;
