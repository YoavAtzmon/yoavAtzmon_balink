import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpecific } from "../../../store/Specific";
import { useNavigate } from "react-router-dom"
import style from "../../styleComponents/CardContent/CardContent.module.css"
import {helpers} from "../../../helperFunctions/helperFunctions"


 function CardText({ data, index, temp, tempChange}){

    const lang = useSelector((state) => state.language.value)
    const dispatch = useDispatch();
    const Navigate = useNavigate()

    
    //formating the temperature relative to the user selection
    //useMemo make this function re-rendering only when the temp is changing .
    const tem = useMemo(()=>{
        return helpers.formatingCelsiusToFahrenheit(data.min_temp,data.max_temp,temp)
    },[temp])
   
    
     //the function re-rendering only at the first time and not every time the component is re-rendering(e.g when the temp buttom pressed)
    const discription = useMemo(()=>{
        return helpers.foramtWeatherDiscription(data.weather_state_name)
    },[data.weather_state_name])
  
    //reorder the date for the format i want to display
    const date = useMemo(()=>{
        return helpers.dateConvarte(data.applicable_date)
    },[data.applicable_date])

    //by clicking on a specific day you'll navigate to the details page
    function handleClicke() {
        dispatch(getSpecific(data))
        Navigate('/details')
    }

    return (

        <div className={style.cardcontent} >
            <h1  onClick={handleClicke}>
                {index === 0 ?
                    `${lang.today}`
                    :
                    index === 1
                        ?
                        `${lang.tomorrow}`
                        :
                        lang.lang === 'hebrew'
                            ?
                            lang[date.slice(0, 3)] + '  ' + String(date[8])+String(date[9]) + '  ' + lang[date.slice(4, 7)]
                            :
                            date
                }
            </h1>
            <section >
                <img alt='' src={`https://www.metaweather.com/static/img/weather/${discription}.svg`} />
                <h2  >
                    {lang.lang === 'hebrew' ?
                        lang[data.weather_state_name.replace(" ", "")]
                        :
                        data.weather_state_name
                    }
                </h2>
            </section>
            <h2 dir="ltr" onClick={tempChange}>
                {tem}
            </h2>
            <h3 >
                {lang.humidity} - {data.humidity}%
            </h3>
            <h3 >
                {lang.visibility} - {data.visibility.toFixed(2)} {lang.miles}
            </h3>
            <h3>
                {lang.pressure} - {data.air_pressure} {lang.mb}
            </h3>
        </div>

    )
}
export default CardText;