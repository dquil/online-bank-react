import { Modal } from "react-bootstrap";

export default function BalanceLowerThan0PopUp({
  showPopUp,
  closePopUp,
  setBalanceToZero,
}) {
  const handleSetBalanceToZero = () => {
    setBalanceToZero();
    closePopUp();
  };
  return (
    <>
      <Modal
        className="modal-dialog-centered"
        show={showPopUp}
        onHide={closePopUp}
        animation={true}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>¡CAUTION!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            The withdrawal of this amount will result in negative balance,
            according to{" "}
            <a
              href="https://www.termsandconditionsgenerator.com/"
              target="_blank"
            >
              our terms and conditions
            </a>{" "}
            this is not possible.
          </p>
          <h6>
            Would you like to withdraw all the money and set yous balance to 0?
          </h6>
        </Modal.Body>

        <Modal.Footer>
          <button
            className="btn btn-light"
            variant="secondary"
            onClick={closePopUp}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            variant="primary"
            onClick={handleSetBalanceToZero}
          >
            Set my balance to 0
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
