const ClockDisplay = ({ date, title, timezone, offset }) => {
    return (
        <div>
            <h1>This is clock display</h1>

            <h3>This is : {title}</h3>
            <h2>time : {date.toString()}</h2>
        </div>
    )
}

export default ClockDisplay