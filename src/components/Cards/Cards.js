import { useState, useCallback, useContext, memo } from "react";
import CardText from "./CardText/CardText";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import style from '../styleComponents/Cards/Cards.module.css'
import { DarkContext } from "../../context/DarkContext";

function Cards() {

    //geting all the data from redux state management
    const sixDaysWeather = useSelector(state => state.weather.value)
    const lang = useSelector((state)=>state.language.value)

    const [celsius, setCelsius] = useState('c')
    const {setDark,dark} = useContext(DarkContext)
    

    //With the useCallbacks-when this component(Cards) are re-rendering(because of the dark button)
    //this function memoiz the value from the last render,and prevent an unnecessary re-render of the child(CardText)
    const tempChange = useCallback(() => {
        setCelsius(celsius === 'c' ? 'f' : 'c')
    }, [celsius])

    return (
        sixDaysWeather ?
            <>
                <div className={!dark ? style.allcards : style.allcarDark}>
                    <figure >
                        <button onClick={() => setDark(prevDark => !prevDark)}>{dark ? lang.light : lang.dark }</button>
                        <button onClick={() => setCelsius(celsius === 'c' ? 'f' : 'c')}>{lang.temp}</button>
                    </figure>
                     {sixDaysWeather.consolidated_weather.map((day, index) => 
                        <div className={!dark ? style.daycard : style.daycarDark} key={index}>
                            <CardText data={day} temp={celsius} tempChange={tempChange} index={index}/>
                        </div>
                    )}
                </div>
            </> : <Loader />
    )
}
export default Cards