import LocalClock from "./components/local-clock"
import ClockList from './components/clock-list'
import useClock from "./hooks/useClock"
function App() {

  const {date:localDate,timezone ,offset} = useClock()
  console.log(localDate)
  console.log("timezone :",timezone)


  return (
    <div>
      <ClockList/>

      {localDate !== null &&(
      <LocalClock date={localDate} timezone={timezone} offset={offset} />

      )}
    </div>
  )
}

export default App
