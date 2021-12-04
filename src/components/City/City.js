import { useSelector } from "react-redux"
import ErrorHandle from "../Error/Error";
import "../styleComponents/CityName/CityName.css"

export default function City() {

    const city = useSelector((state) => state.weather.value);
    const lang = useSelector((state) => state.language.value);
    let cityTitle = city ? city.title : '';

    //formating the city name in order to make it an object key
    if (cityTitle && cityTitle.includes(" ")) {
        cityTitle = cityTitle.replace(' ', '')
    }

    return (
        city ?
            <h1 className="cityname">
                {lang.lang === 'hebrew' ? lang[cityTitle.toLowerCase()] : city.title}
            </h1> :
            <ErrorHandle err={lang.err + " " + lang.cors} />

    )
}