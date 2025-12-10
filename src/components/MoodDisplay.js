function MoodDisplay({title, emojis}) {
    return (
        <>
            <h2>{title}</h2>
            <p className="emoji-line">{emojis}</p>
        </>
    );
}

export default MoodDisplay;