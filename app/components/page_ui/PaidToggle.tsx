import React, { useState } from "react";

const PaidToggle = () => {
  // const [isPaid, setIsPaid] = useState(false);

  // const togglePaid = () => {
  //   setIsPaid(!isPaid);
  // };

  return (
    <>
      {/* <button
        className={`${
          isPaid
            ? "bg-green-500 text-[var(--bg-primary-inverted)] w-20"
            : "bg-red-500 text-[var(--bg-primary-inverted)] w-20"
        } px-4 py-2 rounded-md transition-all duration-300 ease-in-out`}
        onClick={togglePaid}
      >
        {isPaid ? "Paid" : "Unpaid"}
      </button> */}

      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" />
        <div className="peer ring-0 bg-[var(--bg-third)] rounded-full outline-none duration-300 after:duration-500 w-12 h-12 shadow-md peer-checked:bg-emerald-500 peer-focus:outline-none after:content-['✖️'] after:rounded-full after:absolute after:outline-none after:h-10 after:w-10 after:bg-gray-50 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-hover:after:scale-75 peer-checked:after:content-['✔️'] after:-rotate-180 peer-checked:after:rotate-0"></div>
      </label>
    </>
  );
};

export default PaidToggle;
