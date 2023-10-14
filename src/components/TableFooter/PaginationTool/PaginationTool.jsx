import { PaginationControl } from "react-bootstrap-pagination-control";

import "./PaginationTool.css";

export default function PaginationTool({
  movements,
  changePage,
  currentPage,
  tableSize,
}) {
  const handlePageChange = (page) => {
    changePage(page);
  };

  return (
    <PaginationControl
      page={currentPage}
      between={4}
      total={movements.length}
      limit={tableSize}
      changePage={(page) => {
        handlePageChange(page);
      }}
      ellipsis={1}
    />
  );
}
