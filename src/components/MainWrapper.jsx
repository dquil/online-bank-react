import { useState, useEffect } from "react";
import data from "../response/data";
import MainCard from "./MainCard/MainCard";
import OperationPopUp from "./OperationPopUp/OperationPopUp";
import TableFooter from "./TableFooter/TableFooter";
import "./MainWrapper.css";

const MainContent = () => {
  const [balance, setBalance] = useState(data.balance);
  const [currentPage, setCurrentPage] = useState(1);
  const [tableSize, setTableSize] = useState(5);
  const [movements, setMovements] = useState(data.movements);
  const [movementsBackup, setMovementsBackup] = useState(data.movements);
  const [operationText, setOperationText] = useState("");
  const [showOperationPopUp, setShowOperationPopUp] = useState(false);

  const addBalance = (addedAmount) => {
    createMovement(addedAmount, 0, balance + Number(addedAmount));
    setBalance(balance + Number(addedAmount));
    setShowOperationPopUp(false);
  };
  //calculates balances for the movements that were already in the data and gets them into the state
  const calculateOldBalances = () => {
    let currentBalance = balance;
    let movementsWithBalances = [];
    //movements initially reversed to follow chronological order
    let reversedMovements = movements.reverse();

    reversedMovements.forEach((movement) => {
      let movementWithBalance = movement;
      if (movement.concept == 0) {
        movementWithBalance.newBalance = currentBalance;
        movementWithBalance.previousBalance = currentBalance - movement.amount;
        currentBalance = movementWithBalance.previousBalance;
        movementsWithBalances.push(movementWithBalance);
      } else {
        movementWithBalance.newBalance = currentBalance;
        movementWithBalance.previousBalance = currentBalance + movement.amount;
        currentBalance = movementWithBalance.previousBalance;
        movementsWithBalances.push(movementWithBalance);
      }
    });

    setMovements(movementsWithBalances);
  };
  const createMovement = (movementAmount, concept, newBalance) => {
    let newMovement = {
      amount: movementAmount,
      concept: concept,
      date: getMovementDate(),
      id: movements.length + 1,
      previousBalance: balance,
      newBalance: newBalance,
    };
    let updatedMovements = movements;
    updatedMovements.unshift(newMovement);
    setMovements(updatedMovements);
    setMovementsBackup(updatedMovements);
  };
  const filterMovements = (searchedValue) => {
    const filteredMovements = [];
    if (searchedValue) {
      movements.filter((movement) => {
        if (movement.id.toString().includes(searchedValue.toString())) {
          filteredMovements.push(movement);
        }
      });
      setMovements(filteredMovements);
    } else {
      //sets the movements with the backup to keep the movements added in this session
      setMovements(movementsBackup);
    }
  };
  const getMovementDate = () => {
    //gets the date and hour and arranges them in the necessary format
    let fullDate = new Date();

    var dayMonthYear =
      fullDate.getFullYear() +
      "-" +
      setCurrentMonth(fullDate) +
      "-" +
      fullDate.getDate();

    var time =
      fullDate.getHours() +
      ":" +
      fullDate.getMinutes() +
      ":" +
      fullDate.getSeconds();

    return dayMonthYear + " " + time;
  };

  const setBalanceToZero = () => {
    createMovement(balance, 1, 0);
    setBalance(0);
    setShowOperationPopUp(false);
  };

  const setTableSizeNumber = (number) => {
    setTableSize(number);
  };

  const changePage = (newPage) => {
    setCurrentPage(newPage);
  };

  const subtractBalance = (addedAmount) => {
    if (addedAmount >= 0) {
      setBalance(balance - Number(addedAmount));
      createMovement(addedAmount, 1, balance - Number(addedAmount));
      setShowOperationPopUp(false);
    } else {
      console.log("Error. The ammount added cannot be negative");
    }
  };
  //adds a zero to single digit months
  const setCurrentMonth = (fullDate) => {
    let obtainedMonth = fullDate.getMonth() + 1;

    if (obtainedMonth.length < 10) {
      return obtainedMonth;
    } else {
      return "0" + obtainedMonth;
    }
  };

  const reverseMovements = () => {
    //we unwrap it to avoid a shallow comparison
    let reversedMovements = [...movements.reverse()];
    setMovements(reversedMovements);
  };

  const toggleOperationPopUp = (isWithdrawal = true) => {
    if (isWithdrawal) {
      setOperationText("Withdraw");
    } else {
      setOperationText("Deposit");
    }
    setShowOperationPopUp(!showOperationPopUp);
  };

  useEffect(() => {
    calculateOldBalances();
  }, []);

  return (
    <>
      <MainCard
        balance={balance}
        currentPage={currentPage}
        filterMovements={filterMovements}
        toggleOperationPopUp={toggleOperationPopUp}
        movements={movements}
        tableSize={tableSize}
        reverseMovements={reverseMovements}
      ></MainCard>
      <TableFooter
        changePage={changePage}
        changeTableSize={setTableSizeNumber}
        currentPage={currentPage}
        movements={movements}
        tableSize={tableSize}
      ></TableFooter>
      <OperationPopUp
        className="pop-up"
        balance={balance}
        showOperationPopUp={showOperationPopUp}
        closeOperationPopUp={toggleOperationPopUp}
        operationText={operationText}
        addBalance={addBalance}
        subtractBalance={subtractBalance}
        setBalanceToZero={setBalanceToZero}
      ></OperationPopUp>
    </>
  );
};

export default function MainWrapper() {
  return (
    <main>
      <MainContent></MainContent>
    </main>
  );
}
