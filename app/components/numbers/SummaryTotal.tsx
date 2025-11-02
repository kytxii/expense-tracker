import React from "react";

const SummaryTotal = ({ title }: { title: string }) => {
  return (
    <>
      <div className="flex flex-col justify-center w-[22%] h-50 rounded-md bg-[var(--bg-secondary)] p-5">
        <div className="text-[var(--primary-inverted)] h-20">$</div>
        <div className=" text-[var(--primary-inverted)] text-2xl">
          {title.toUpperCase()}
        </div>
        <div className=" text-[var(--primary-inverted)]">$45,000</div>
        <div className="text-[var(--primary-inverted)]">
          - 6% vs last 30 days
        </div>
      </div>
    </>
  );
};

export default SummaryTotal;
