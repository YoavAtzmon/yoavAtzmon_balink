import { useSelector } from "react-redux"
import "../styleComponents/CityName/CityName.css"

export default function City() {

    const city = useSelector((state) => state.weather.value);
    const lang = useSelector((state) => state.language.value);
    let cityTitle = city ? city.title : '';
    
        if (cityTitle && cityTitle.includes(" ")) {
            cityTitle = cityTitle.replace(' ', '')
        }
   
    return (
        city&&lang&&
        <h1 className="cityname">
                {lang[cityTitle.toLowerCase()]}
        </h1>
    )
}