import CardHeader from "./CardHeader/CardHeader";
import MovementTable from "../MovementTable/MovementTable";
import SearchAndFilterBar from "../ui/SearchAndFilterBar/SearchAndFilterBar";

export default function MainCard({
  balance,
  currentPage,
  filterMovements,
  movements,
  reverseMovements,
  toggleOperationPopUp,
  tableSize,
}) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <CardHeader
            balance={balance}
            toggleOperationPopUp={toggleOperationPopUp}
          ></CardHeader>
        </div>
        <SearchAndFilterBar
          filterMovements={filterMovements}
          reverseMovements={reverseMovements}
        ></SearchAndFilterBar>
        <MovementTable
          balance={balance}
          currentPage={currentPage}
          movements={movements}
          tableSize={tableSize}
        ></MovementTable>
      </div>
    </>
  );
}
