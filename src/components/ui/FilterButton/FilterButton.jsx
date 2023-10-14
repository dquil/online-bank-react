import "./FilterButton.css";

export default function TableFooter({ reverseMovements }) {
  const handleReverseMovements = () => {
    reverseMovements();
  };
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary filter-button"
        onClick={handleReverseMovements}
      >
        <div className="d-flex m-0">
          <i className="bi bi-funnel-fill filter-icon"></i>
          <p>Reorder</p>
        </div>
      </button>
    </div>
  );
}
