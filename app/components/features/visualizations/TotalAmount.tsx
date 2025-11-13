import React from "react";

const TotalAmount = ({ title }: { title: string }) => {
  return (
    <>
      <div className="flex  w-[22%] bg-[var(--bg-component)] flex-col justify-center h-50 rounded-md p-2">
        <div className="flex flex-col justify-center w-[100%] h-[100%] rounded-md bg-[var(--bg-secondary)] p-5">
          <div className="text-[var(--primary-inverted)] h-20">$</div>
          <div className=" text-[var(--primary-inverted)] text-2xl">
            {title.toUpperCase()}
          </div>
          <div className=" text-[var(--primary-inverted)]">$45,000</div>
          <div className="text-[var(--primary-inverted)]">
            - 6% vs last 30 days
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalAmount;
