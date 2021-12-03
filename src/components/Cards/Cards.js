import CardText from "./CardText/CardText";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import '../styleComponents/DayCard/DayCard.css'
import "../styleComponents/AllCards/AllCards.css"

export default function Card() {

    const sixDaysWeather = useSelector(state => state.weather.value)

    return (
        sixDaysWeather ?
            <>
                <div className="allcards">
                    {sixDaysWeather.consolidated_weather.map((day, index) =>
                        <div className="daycard" key={index}>
                            <CardText data={day} index={index} />
                        </div>
                    )
                    }
                </div>
            </> : <Loader />
    )
}