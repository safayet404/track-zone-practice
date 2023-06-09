import { useEffect, useState } from "react"
import {addMinutes} from 'date-fns'
const init = {
    
    timezone : {
        type : '',
        offset : '',

    },
    date_utc : '',
    date : '',
}

const TIMEZONE_OFFSET = {
    PST : -7*60,
    EST : -4*60,
    CET : 2*60,
}

const useClock = (timezone,offset=0) => {


    const [localDate,setLocalDate] = useState(null)
    console.log("hook",localDate)
    const [localOffset,setLocalOffset] = useState(0)

    const [utc,setUtc] = useState(null)

    useEffect(()=>{
        let d = new Date()
        const lo = d.getTimezoneOffset();
        d = addMinutes(d,lo)

        setUtc(d)

        setLocalOffset(lo)
    },[])

    useEffect(()=>{

        if(utc !== null)
        {
            if(timezone)
            {
                offset =TIMEZONE_OFFSET[timezone] ?? offset
                const newUtc = addMinutes(utc,offset)
                setLocalDate(newUtc)

            }
            else
            {
                const newUtc = addMinutes(utc,-localOffset)
                setLocalDate(newUtc)
            }

            
        }
    },[utc])
    return {
        date : localDate,
        dateUTC : utc,
        offset,
        timezone,
        localOffset
    }
}

export default useClock