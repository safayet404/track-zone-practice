import useClock from "../../hooks/useClock"
import ClockDisplay from "../shared"

const LocalClock = ({date,timezone,offset}) => {

   

    return (
        <div>
            <h1>This is local clock</h1>
            <ClockDisplay date={date} title={'This title generating from Local Clock Component'} />
        </div>
    )
}

export default LocalClock