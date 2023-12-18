import React, { FC, ReactNode } from "react";

interface DoubleTextProps {
  title: string;
  subtitle: string;
}

const DoubleTextBlock: FC<DoubleTextProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="primary-color font-semibold">{title}</h2>
      <p className="additional-color font-medium">{subtitle}</p>
    </div>
  );
};

export default DoubleTextBlock;
