import useClock from "../../hooks/useClock"

const LocalClock = () => {

    const {clock : utc} = useClock('UTC')
    const {clock : est} = useClock('EST')
    const {clock : cet} = useClock('CET')
    const {clock : pst} = useClock('PST')

    console.log('UTC clock', utc.date)
    console.log('EST clock', est.date)
    console.log('PST clock', pst.date)
    console.log('ETD clock', cet.date)

    return (
        <h1>This is local clock</h1>
    )
}

export default LocalClock