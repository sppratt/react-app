function MoodButton({label, colorClass, onClick}) {
    return (
        <button className={`mood-button ${colorClass}`} onClick={onClick}>
            {label}
        </button>
    );
}

export default MoodButton;
