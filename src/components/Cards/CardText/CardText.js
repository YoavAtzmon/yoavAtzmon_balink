import { useMemo, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpecific } from "../../../store/Specific";
import { helpers } from "../../../helperFunctions/helperFunctions"
import style from "../../styleComponents/CardText/CardText.module.css"

function CardText({ data, index, tempChange, temp }) {

    const lang = useSelector((state) => state.language.value);
    const dispatch = useDispatch();

    const tem = helpers.formatingCelsiusToFahrenheit(data.min_temp, data.max_temp, temp);
    
    //the function re-rendering only when his dependencies change every time the component is re-rendering(e.g when the temp buttom pressed)
    const discription = useMemo(() => {
        return helpers.foramtWeatherDiscription(data.weather_state_name);
    }, [data.weather_state_name])

    //the function re-rendering only when his dependencies change 
    const date = useMemo(() => {
        return helpers.dateConvarte(data.applicable_date);
    }, [data.applicable_date])

    //by clicking on a specific day you'll navigate to the details page
    function handleClicke(){
        dispatch(getSpecific(data));
    }

    return (
        // <div className={!dark ? style.cardcontent : style.cardcontentDark } >
        <div className={style.cardcontent} >
            <h1 onClick={handleClicke}>
                {index === 0 ?
                    `${lang.today}`
                    :
                    index === 1
                        ?
                        `${lang.tomorrow}`
                        :
                        lang.lang === 'hebrew'
                            ?
                            lang[date.slice(0, 3)] + '  ' + String(date[8]) + String(date[9]) + '  ' + lang[date.slice(4, 7)]
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
export default memo(CardText);