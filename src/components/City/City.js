import { memo } from "react";
import { useSelector } from "react-redux"
import ErrorHandle from "../Error/Error";
import style from "../styleComponents/City/City.module.css"
import { helpers } from "../../helperFunctions/helperFunctions";

//wrap this component with memo to prevent unnecessary re-renders
//e.g when the dark button is pressed,there is no reason for this component to re-render
function City() {

    const city = useSelector((state) => state.weather.value);
    const lang = useSelector((state) => state.language.value);
    const cityTitle = city&&helpers.formatingCityName(city.title);

    return (
        city ?
            <h1 className={style.cityname}>
                {lang.lang === 'hebrew' ? lang[cityTitle.toLowerCase()] : city.title}
            </h1> :
            <ErrorHandle err={lang.err + " " + lang.cors} />
    )
}
export default memo(City);