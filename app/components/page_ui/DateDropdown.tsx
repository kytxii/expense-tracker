import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const DateDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Month</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>January</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DateDropdown;
