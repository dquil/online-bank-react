import { useState } from "react";
import { Modal } from "react-bootstrap";
import NegativeBalanceWarningPopUp from "./NegativeBalanceWarningPopUp/NegativeBalanceWarningPopUp.jsx";

export default function OperationPopUp({
  balance,
  showOperationPopUp,
  closeOperationPopUp,
  operationText,
  addBalance,
  subtractBalance,
  setBalanceToZero,
}) {
  const [ammountToAddOrSubtract, setAmmountToAddOrSubtract] = useState(0);
  const [disableSaveButton, setDisableSaveButton] = useState(false);
  const [showNegativeBalancePopUp, setShowNegativeBalancePopUp] =
    useState(false);

  const handleAmountChange = (event) => {
    handleSetAmount(event.target.value);
    if (event.target.value < 0) {
      setDisableSaveButton(true);
    } else {
      setDisableSaveButton(false);
    }
  };
  const handleCloseOperationPopUp = () => {
    closeOperationPopUp();
  };

  const closeNegativeBalanceWarningPopUp = () => {
    setShowNegativeBalancePopUp(false);
  };
  const handleSetAmount = (amount) => {
    setAmmountToAddOrSubtract(amount);
  };

  const handleSaveChanges = () => {
    if (operationText) {
      if (operationText === "Deposit") {
        addBalance(ammountToAddOrSubtract);
      } else if (balance - Number(ammountToAddOrSubtract) < 0) {
        setShowNegativeBalancePopUp(true);
      } else {
        subtractBalance(ammountToAddOrSubtract);
      }
    }
  };

  return (
    <>
      <Modal
        className="modal-dialog-centered"
        show={showOperationPopUp}
        onHide={handleCloseOperationPopUp}
        animation={true}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{operationText} money</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form noValidate>
            <div className="form-group">
              <label htmlFor="inputAmount">
                Please, introduce here the amount you wihs to{" "}
                {operationText.toLowerCase()}
              </label>
              <input
                type="number"
                className="form-control"
                onChange={handleAmountChange}
                data-toggle="tooltip"
              />
              <small id="ammountHelp" className="form-text text-muted">
                Remember to avoid introducing negative numbers. Your balance
                cannot be lower than 0€
              </small>
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <button
            className="btn btn-light"
            variant="secondary"
            onClick={handleCloseOperationPopUp}
          >
            Close
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            variant="primary"
            onClick={handleSaveChanges}
            disabled={disableSaveButton}
          >
            Accept transaction
          </button>
        </Modal.Footer>
      </Modal>
      <NegativeBalanceWarningPopUp
        showPopUp={showNegativeBalancePopUp}
        closePopUp={closeNegativeBalanceWarningPopUp}
        setBalanceToZero={setBalanceToZero}
      ></NegativeBalanceWarningPopUp>
    </>
  );
}
