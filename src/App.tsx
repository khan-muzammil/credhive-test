import { useState } from "react";
import { getCompanyData } from "./services/common";
import { Filter } from "./components/Filter";
import { DataDisplay } from "./components/DataDisplay";
import { FilterType } from "./types";

function App() {
  const [filter, setFilter] = useState({
    loanRange: { min: 0, max: 1000 },
    accountStatus: "",
    dateRange: { start: "", end: "" },
  });
  const [companyData] = useState(getCompanyData());

  const handleFilter = (filter: FilterType) => {
    setFilter(filter);
  };

  const filteredData = companyData.filter((item) => {
    const loanRangeCondition =
      (filter.loanRange.min === 0 && filter.loanRange.max === 1000) ||
      (item.loanAmount >= filter.loanRange.min &&
        item.loanAmount <= filter.loanRange.max);

    const accountStatusCondition =
      filter.accountStatus === "" ||
      item.accountStatus === filter.accountStatus;

    const dateRangeCondition =
      (filter.dateRange.start === "" && filter.dateRange.end === "") ||
      (new Date(item.registrationDate) >= new Date(filter.dateRange.start) &&
        new Date(item.registrationDate) <= new Date(filter.dateRange.end));

    return loanRangeCondition && accountStatusCondition && dateRangeCondition;
  });

  return (
    <div>
      <Filter onFilter={handleFilter} />
      <DataDisplay data={filteredData} />
    </div>
  );
}

export default App;
