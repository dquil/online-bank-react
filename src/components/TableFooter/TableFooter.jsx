import PaginationTool from "./PaginationTool/PaginationTool";
import NumberOfResultsSelector from "./TableSizeSelector/TableSizeSelector";

export default function TableFooter({
  movements,
  changePage,
  currentPage,
  changeTableSize,
  tableSize,
}) {
  return (
    <>
      <div className="d-flex">
        <div className="p-2 me-auto">
          <PaginationTool
            movements={movements}
            changePage={changePage}
            currentPage={currentPage}
            tableSize={tableSize}
          ></PaginationTool>
        </div>
        <div className="p-2">
          <NumberOfResultsSelector
            changeTableSize={changeTableSize}
            movements={movements}
            currentPage={currentPage}
            tableSize={tableSize}
          ></NumberOfResultsSelector>
        </div>
      </div>
    </>
  );
}
