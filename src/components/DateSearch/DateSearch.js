import React, { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getSpecific } from '../../store/Specific'
import "../styleComponents/DateSearch/DateSearch.module.css"
import dayjs from 'dayjs'

//wrap this component with memo to prevent unnecessary re-renders
//e.g when the dark button is pressed,there is no reason for this component to re-render
function DateSearch() {


    const sixDaysWeather = useSelector((state) => state.weather.value)
    const dispatch = useDispatch()
    const [end, setEnd] = useState('')

    //formating the calendar start and end dates
    const start = dayjs(dayjs().$d).format('YYYY-MM-DD')

    //display the selected date from the calendar
    async function handleChange(event) {
        sixDaysWeather.consolidated_weather.forEach((item, index) => {
            if (item['applicable_date'] === event.target.value) {
                dispatch(getSpecific(item))
            }
        })
    }

    useEffect(() => {
        sixDaysWeather && setEnd(sixDaysWeather.consolidated_weather[5]['applicable_date'])
    }, [])


    return (
        <div>
            <input
                type="date"
                min={start}
                max={end && end}
                onChange={handleChange}
                onKeyDown={(e) => e.preventDefault()}
            />
        </div>
    )
}
export default memo(DateSearch);
