import { useEffect } from "react";

import "./MovementTable.css";

let movementTable = Array();
let movementsToShow = Array();
const setTable = (movements, tableSize, currentPage) => {
  movementTable = Array();
  movements.forEach((movement, index) => {
    movementTable.push(
      <tr key={index}>
        <td>{movement.id}</td>
        <td>
          <p className="mb-1">{getDate(movement.date)}</p>
          <p className="mb-0">{getHour(movement.date)}</p>
        </td>
        <td>{setConcept(movement.concept)}</td>
        <td>{movement.amount}</td>
        <td>{movement.previousBalance ? movement.previousBalance : "0"}</td>
        <td>{movement.newBalance ? movement.newBalance : "0"}</td>
      </tr>
    );
  });
  movementsToShow = getPageResults(movementTable, tableSize, currentPage);
};

const getDate = (fullDate) => {
  let date = fullDate.slice(0, 11);
  return date.replaceAll("-", "/");
};
const getHour = (fullDate) => {
  let hour = fullDate.slice(11, 19);
  return hour.slice(0, 5);
};
const getPageResults = (movementTable, tableSize, currentPage) => {
  return movementTable.slice(
    tableSize * currentPage - tableSize,
    tableSize * currentPage
  );
};

const setConcept = (concept) => {
  return concept == 0 ? "Deposit" : "Withdrawal";
};

export default function MovementTable({ movements, tableSize, currentPage }) {
  setTable(movements, tableSize, currentPage);

  useEffect(() => {
    setTable(movements);
  }, [movements]);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="table-headers">
              TRANSACTION ID
            </th>
            <th scope="col" className="table-headers">
              DATE
            </th>
            <th scope="col" className="table-headers">
              TRANSACTION TYPE
            </th>
            <th scope="col" className="table-headers">
              AMOUNT
            </th>
            <th scope="col" className="table-headers">
              BALANCE BEFORE
            </th>
            <th scope="col" className="table-headers">
              BALANCE AFTER
            </th>
          </tr>
        </thead>
        <tbody>{movementsToShow}</tbody>
      </table>
    </div>
  );
}
