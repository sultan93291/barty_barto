import type { ReactNode } from "react";


interface ContainerProps {
  className?: string;
  children?: ReactNode;
}

const Container = ({ className = "", children }: ContainerProps) => {
  return (
    <div className={`max-w-[1600px] mx-auto ${className}`}>{children}</div>
  );
};

export default Container;
