import { memo, useState, useCallback, useContext } from "react";
import CardText from "./CardText/CardText";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import style from '../styleComponents/DayCard/DayCard.module.css'
import styles from "../styleComponents/AllCards/AllCards.module.css"
import { DarkContext } from "../../context/DarkContext";

function Cards() {

    //geting all the data from redux state management
    const sixDaysWeather = useSelector(state => state.weather.value)

    const {setDark,darkTheme,dark} = useContext(DarkContext)
  
    const [celsius, setCelsius] = useState('c')

    //With the useCallbacks even when the component is re-rendering(etc if the dark buttom was prssed)this function are not.(just when the celsius is changed)
    const tempChange = useCallback(() => {
        setCelsius(celsius === 'c' ? 'f' : 'c')
    }, [celsius])

    return (
        sixDaysWeather ?
            <>
                <div className={styles.allcards}>
                    <figure >
                        <button style={darkTheme} onClick={() => setDark(prevDark => !prevDark)}>{dark ? 'light' : 'dark'}</button>
                        <button style={darkTheme} onClick={() => setCelsius(celsius === 'c' ? 'f' : 'c')}>temp</button>
                    </figure>
                    {sixDaysWeather.consolidated_weather.map((day, index) =>
                        <div className={style.daycard} style={darkTheme} key={index}>
                            <CardText data={day} tempChange={tempChange} temp={celsius} index={index} />
                        </div>
                    )
                    }
                </div>
            </> : <Loader />
    )
}
export default memo(Cards);