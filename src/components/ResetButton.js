function ResetButton({ onReset }) {
    return (
        <button className="mood-button reset" onClick={onReset}>
            Reset All
        </button>
    );
}

export default ResetButton;
