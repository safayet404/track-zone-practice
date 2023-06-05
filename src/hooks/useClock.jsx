import { useEffect, useState } from "react"
import {addMinutes} from 'date-fns'
const init = {
    id : '',
    title : '',
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


    const [state,setState] = useState({...init})

    const [utc,setUtc] = useState(null)

    useEffect(()=>{
        let d = new Date()
        const localOffset = d.getTimezoneOffset();
        d = addMinutes(d,localOffset)

        setUtc(d)
    },[])

    useEffect(()=>{

        if(utc !== null && timezone)
        {
            offset =TIMEZONE_OFFSET[timezone] ?? offset
            const newUtc = addMinutes(utc,offset)

            setState({
                ...state,
                date_utc : utc,
                date : newUtc
            })
        }
        else
        {
            setState({
                ...state,
                date_utc:utc,
                utc : utc
            })
        }
    },[utc])
    return {
        clock : state
    }
}

export default useClock