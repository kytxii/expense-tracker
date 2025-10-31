import React from "react";

const SummaryTotal = ({ title }: { title: string }) => {
  return (
    <>
      <div className="flex flex-col justify-center w-[20%] h-50 rounded-md bg-zinc-900 p-5">
        <div className="text-white h-20">$</div>
        <div className=" text-white">{title.toUpperCase()}</div>
        <div className=" text-white">$45,000</div>
        <div className="text-white">- 6% vs last 30 days</div>
      </div>
    </>
  );
};

export default SummaryTotal;
