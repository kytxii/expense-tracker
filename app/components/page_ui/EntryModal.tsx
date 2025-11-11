import React, { useState } from "react";

interface EntryModalProps {
  onClose: () => void;
}

const EntryModal: React.FC<EntryModalProps> = ({ onClose }) => {
  const [type, setType] = useState("Income");

  const entryTypes = [
    "Income",
    "Expenses",
    "Subscriptions",
    "Bills",
    "Debt",
    "Savings",
    "Reimbursements",
  ];

  return (
    <>
      {/* Content blur (click to close modal) */}
      <div
        className="fixed top-19 left-64 right-0 bottom-0 flex items-center justify-center backdrop-blur-xs bg-black/5 z-50"
        onClick={onClose}
      >
        {/* Modal padding (prevent click to close*/}
        <div
          className="bg-[var(--bg-component)] p-2 rounded-md w-100 h-150"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Inner modal content */}
          <div className="flex flex-col p-2 rounded-md w-[100%] h-[100%] gap-2">
            {/* Modal header */}
            <div className="flex justify-center items-center h-[10%] w-[100%] bg-[var(--bg-primary)] p-2 rounded-md text-xl">
              <span>Add a new entry</span>
            </div>
            {/* Modal body */}
            <div className="flex bg-[var(--bg-primary)] h-[100%] w-[100%] p-2 rounded-md">
              {/* Type dropdown */}
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="bg-[var(--bg-secondary)] hover:bg-[var(--bg-third)] w-[50%] h-[10%] rounded-md p-2"
              >
                {entryTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            {/* Modal footer */}
            <div className="flex bg-[var(--bg-primary)] h-[10%] w-[100%] p-2 rounded-md gap-5">
              <button className="flex justify-center bg-[var(--bg-secondary)] hover:bg-[var(--bg-third)] cursor-pointer w-[100%] p-2 rounded-md">
                Cancel
              </button>
              <button className="flex justify-center bg-[var(--bg-secondary)] hover:bg-[var(--bg-third)] cursor-pointer w-[100%] p-2 rounded-md">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EntryModal;
