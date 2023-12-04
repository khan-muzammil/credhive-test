import React, { useState } from "react";
import {
  Button,
  Input,
  Select,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { FilterType } from "../types";

interface FilterProps {
  onFilter: (filter: FilterType) => void;
}

export const Filter: React.FC<FilterProps> = ({ onFilter }) => {
  const [loanRange, setLoanRange] = useState({ min: 0, max: 1000 });
  const [accountStatus, setAccountStatus] = useState("");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });

  const handleFilter = () => {
    onFilter({ loanRange, accountStatus, dateRange });
  };

  return (
    <div className="my-4 mx-10  border p-4 rounded-lg flex flex-wrap lg:flex-nowrap gap-3 items-center">
      <div className="w-full ">
        <Slider
          min={0}
          max={1000}
          step={100}
          defaultValue={loanRange.min}
          onChangeEnd={(value) => setLoanRange({ ...loanRange, min: value })}
          aria-label="loan-range-slider"
          className="mt-4"
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <label>Loan Amount min: {loanRange.min}</label>
      </div>
      <Select
        value={accountStatus}
        onChange={(e) => setAccountStatus(e.target.value)}
      >
        <option value="" disabled>
          Select Account status
        </option>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
        <option value="closed">Closed</option>
      </Select>
      <Input
        type="date"
        placeholder="Start Date"
        value={dateRange.start}
        onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
      />
      <Input
        type="date"
        placeholder="End Date"
        value={dateRange.end}
        onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
      />
      <Button
        className="bg-blue-500 w-[150px] hover:bg-blue-700 my-2 text-white font-bold py-2 px-4 rounded"
        onClick={handleFilter}
      >
        Filter
      </Button>
    </div>
  );
};
