import { useState, useEffect } from "react";
import "./TableSizeSelector.css";

export default function TableFooter({
  movements,
  changeTableSize,
  tableSize,
  currentPage,
}) {
  const [firstIndex, setFirstIndex] = useState();
  const [secondIndex, setSecondIndex] = useState();

  const handleSelectedValue = (event) => {
    changeTableSize(event.target.value);
  };
  const calcShowingResults = () => {
    setFirstIndex(tableSize * currentPage + 1 - tableSize);
    setSecondIndex(tableSize * currentPage);
  };

  useEffect(() => {
    calcShowingResults();
  }, [currentPage, tableSize]);
  return (
    <>
      <div className="d-flex">
        <select
          className="selector-box"
          onChange={(event) => {
            handleSelectedValue(event);
          }}
        >
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
        <p className="table-results-text">
          Showing rows from {firstIndex} to {secondIndex} of {movements.length}
        </p>
      </div>
    </>
  );
}
