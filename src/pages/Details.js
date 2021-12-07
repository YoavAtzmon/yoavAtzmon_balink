import { useCallback, useContext, useState } from "react";
import { useSelector } from "react-redux"
import CardText from "../components/Cards/CardText/CardText";
import City from "../components/City/City";
import Header from "../components/Header/Header";
import Language from "../components/Language/Language";
import Type from "../components/Type/Type";
import Footer from "../components/Footer/Footer";
import DateSearch from "../components/DateSearch/DateSearch";
import styles from "../components/styleComponents/Container/Container.module.css"
import style from "../components/styleComponents/DayCard/DayCard.module.css"
import { DarkContext } from "../context/DarkContext";


export default function Details() {

    const specific = useSelector((state) => state.specific.value);
    const [celsius, setCelsius] = useState('c')
    const {setDark,darkTheme} = useContext(DarkContext)

    const tempChange = useCallback(() => {
        setCelsius(celsius === 'c' ? 'f' : 'c')
    }, [celsius])

    return (
        <div>
            <Header />
            <Language />
            {specific ?
                <div className={styles.containerTwo}>
                    <DateSearch />
                    <City />
                    <figure>
                        <button onClick={() => setDark(prevDark => !prevDark)}>dark</button>
                        <button onClick={() => setCelsius(celsius === 'c' ? 'f' : 'c')}>temp</button>
                    </figure>
                    <div className={style.daycard} style={darkTheme}>
                        <CardText data={specific} temp={celsius} tempChange={tempChange} />
                    </div>
                    <Footer />
                </div>
                :
                <div className={styles.containerThree}>
                    <Type />
                    <Footer />
                </div>
            }
        </div>

    )
}