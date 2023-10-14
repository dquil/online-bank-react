import "./SearchAndFilterBar.css";
import FilterButton from "../FilterButton/FilterButton";

export default function TableFooter({ reverseMovements, filterMovements }) {
  const handleFiltering = (event) => {
    filterMovements(event.target.value);
  };
  return (
    <>
      <div className="d-flex">
        <div className=" d-flex justify-content-start col-10 col-sm-10 search-bar">
          <h4>
            <i className="bi bi-search search-icon"></i>
          </h4>
          <input
            type="text "
            className="search-input"
            placeholder="Search..."
            onChange={handleFiltering}
          />
        </div>
        <div className="d-flex col-2 col-sm-2">
          <FilterButton reverseMovements={reverseMovements}></FilterButton>
          <div></div>
        </div>
      </div>
    </>
  );
}
