import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getSpecific } from '../../store/Specific'
import "../styleComponents/Date/Date.module.css"
import dayjs from 'dayjs'

export default function DateSearch() {

    
    const sixDaysWeather = useSelector((state) => state.weather.value)
    const dispatch = useDispatch()
    const [end,setEnd] = useState('')

    //formating the calendar start and end dates
    const start = dayjs(dayjs().$d).format('YYYY-MM-DD')
    
    //display the selected date from the calendar
    async function handleChange(event) {
            sixDaysWeather.consolidated_weather.forEach((item,index) => {
                if (item['applicable_date'] === event.target.value) {
                    dispatch(getSpecific(item))
                }
            })
    }

    useEffect(()=>{
        sixDaysWeather&&setEnd(sixDaysWeather.consolidated_weather[5]['applicable_date'])
    },[])


    return (
        <div>
            <input
                type="date"
                min={start}
                max={end&&end}
                onChange={handleChange}
                onKeyDown={(e) => e.preventDefault()}
            />
        </div>
    )
}

