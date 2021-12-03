import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import '../styleComponents/Date/Date.css'
import { getSpecific } from '../../store/Specific'

export default function DateSearch() {

    const sixDaysWeather = useSelector((state) => state.weather.value)
    const dispatch = useDispatch()

    let start = new Date()
    let end = new Date(Date.now(start) + 432000000)
    start = start.toISOString().split('T')[0]
    end = end.toISOString().split('T')[0]

    async function handleChange(event) {
        console.log(event.target.value)
        if (sixDaysWeather) {
            sixDaysWeather.consolidated_weather.forEach(item => {
                if (item['applicable_date'] == event.target.value) {
                    dispatch(getSpecific(item))
                }
            })
        }
    }

    return (
        <div>
            <input
                type="date"
                min={start}
                max={end}
                onChange={handleChange}
                onKeyDown={(e) => e.preventDefault()}
            />
        </div>
    )
}

