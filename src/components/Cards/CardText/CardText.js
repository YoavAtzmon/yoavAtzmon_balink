import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpecific } from "../../../store/Specific";
// import { WeatherStatus } from "../../styleComponents/WeatherStatus.style";
import { useNavigate } from "react-router-dom"
import "../../styleComponents/CardContent/CardContent.css"

export default function CardText({ data, index }) {

    const lang = useSelector((state) => state.language.value)
    const dispatch = useDispatch();
    const Navigate = useNavigate()

    const discription = data.weather_state_name.includes(' ') ?
        data.weather_state_name[0].toLowerCase() + data.weather_state_name[data.weather_state_name.indexOf(' ') + 1].toLowerCase()
        :
        data.weather_state_name[0].toLowerCase()

    let date = new Date(data.applicable_date).toDateString().slice(0, 10);
    if (date[8] == 0) date = date.slice(0, 8) + ' ' + date.slice(9)

    function handleClicke(){
        dispatch(getSpecific(data))
        Navigate('/details')
    }

    return (

        <div className="cardcontent" onClick={handleClicke}>
            <h1>
                {index === 0 ?
                    `${lang.today}`
                    :
                    index === 1
                        ?
                        `${lang.tomorrow}`
                        :
                        lang.lang === 'hebrew'
                            ?
                            lang[date.slice(0, 3)] + '  ' + String(date[9]) + '  ' + lang[date.slice(4, 7)]
                            :
                            date
                }
            </h1>
            <section>
                <img  alt='' src={`https://www.metaweather.com/static/img/weather/${discription}.svg`} />
                <h2 >
                    {lang.lang === 'hebrew' ? 
                        lang[data.weather_state_name.replace(" ","")]
                        : 
                        data.weather_state_name
                        }
                </h2>
            </section>
            <h2> 
                {data.min_temp.toFixed(0)}°c - {data.max_temp.toFixed(0)}°c
            </h2> 
            <h3 >
                {lang.humidity} - {data.humidity}%
            </h3>
            <h3 >
                {lang.visibility} - {data.visibility.toFixed(2)} {lang.miles}
            </h3>
            <h3>
                {lang.pressure} - {data.air_pressure}{lang.mb}
            </h3>
        </div>

    )
}