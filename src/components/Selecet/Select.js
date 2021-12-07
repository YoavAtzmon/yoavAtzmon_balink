import { apiService } from "../../api/apiData.js"
import { useDispatch, useSelector } from "react-redux";
import { getWeatherData } from "../../store/Weather.js";
import { memo, useEffect, useState } from "react";
import ErrorHandle from "../Error/Error.js";
import style from "../styleComponents/Select/Select.module.css"


function Selects() {

    const dispatch = useDispatch();
    const lang = useSelector((state) => state.language.value);
    const sixDaysWeather = useSelector(state => state.weather.value)
    const [error, setError] = useState('');

    //setting the city state by the user selection
    async function handleOnChange(event, paris) {
        if (event.target || paris === 'paris') {
            if (event.target && !event.target.value) return;
            try {
                setError('');
                const result = await apiService.getCityWoeid(paris ? paris : event.target.value)
                sessionStorage.city = JSON.stringify(result)
                dispatch(getWeatherData(result))
            }
            catch (error) {
                setError(lang.err)
            }
        }
    }

    //display Paris weather by default 
    useEffect(() => {
        if(!sessionStorage.city) handleOnChange('', 'paris')
        else  dispatch(getWeatherData(JSON.parse(sessionStorage.city)))
    }, [])


    return (
        <>
            {sixDaysWeather &&
                <select
                    className={lang.lang === 'hebrew' ? style.selectH : style.selectE}
                    name="select"
                    onChange={handleOnChange}
                    multiple
                    size="4"
                    value="select"
                >
                    <optgroup label={lang.europe}>
                        <option value='barcelona'>{lang.barcelona}</option>
                        <option value='amsterdam'>{lang.amsterdam}</option>
                        <option value='london'>{lang.london}</option>
                        <option value='marseille'>{lang.marseille}</option>
                        <option value='Rome'>{lang.rome}</option>
                    </optgroup>
                    <optgroup label={lang.northamerica}>
                        <option value='toronto'>{lang.toronto}</option>
                        <option value='new york'>{lang.newyork}</option>
                        <option value='los angeles'>{lang.losangeles}</option>
                        <option value='mexico city'>{lang.mexicocity}</option>
                    </optgroup>
                    <optgroup label={lang.southamerica}>
                        <option value='brasília'>{lang.brasília}</option>
                        <option value='buenos aires'>{lang.buenosaires}</option>
                        <option value='lima'>{lang.lima}</option>
                    </optgroup>
                    <optgroup label={lang.asia}>
                        <option value='tokyo'>{lang.tokyo}</option>
                        <option value='shanghai'>{lang.shanghai}</option>
                        <option value='delhi'>{lang.newdelhi}</option>
                    </optgroup>
                    <optgroup label={lang.australia}>
                        <option value='sydney'>{lang.sydney}</option>
                    </optgroup>
                </select>}
            {error && <ErrorHandle err={error} />}
        </>
    )
}
export default memo(Selects);