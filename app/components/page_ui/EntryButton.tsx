"use client";
import React, { useState } from "react";

import EntryModal from "./EntryModal";

const EntryButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <button
          className="pr-5 pl-5 p-2 rounded-lg bg-[var(--bg-primary)] hover:bg-[var(--bg-third)] cursor-pointer text-[var(--bg-primary-inverted)]"
          onClick={() => setOpen(true)}
        >
          Add Entry
        </button>
        {open && <EntryModal onClose={() => setOpen(false)} />}
      </div>
    </>
  );
};

export default EntryButton;
