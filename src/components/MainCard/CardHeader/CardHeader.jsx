import "./CardHeader.css";

export default function CardHeader({ balance, toggleOperationPopUp }) {
  const handleToggleOperationPopUpWithdrawal = () => {
    toggleOperationPopUp(true);
  };
  const handleToggleOperationPopUpAddition = () => {
    toggleOperationPopUp(false);
  };
  return (
    <>
      <div className="d-flex mb-3">
        <h5 className="me-auto movements-div">
          <i className="bi bi-arrow-left-right movements-icon"></i>
          <b>Movements</b>
        </h5>
        <div className="d-flex p-2 m-2">
          <h5>
            {" "}
            <b className="balance">Current Balance:</b>
          </h5>{" "}
          <h5 className="ml-2 balance">&nbsp;{balance}€</h5>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-primary m-2"
            onClick={handleToggleOperationPopUpWithdrawal}
          >
            Withdraw
          </button>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-warning m-2"
            onClick={handleToggleOperationPopUpAddition}
          >
            Deposit
          </button>
        </div>
      </div>
    </>
  );
}
