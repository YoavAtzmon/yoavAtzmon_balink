import { useSelector } from "react-redux"
import { useNavigate } from "react-router";
import CardText from "../components/Cards/CardText/CardText";
import City from "../components/City/City";
import Header from "../components/Header/Header";
import Language from "../components/Language/Language";
import { Container } from "../components/styleComponents/Container.style";

import { DayCard } from "../components/styleComponents/DayCard.style";
import Type from "../components/Type/Type";
import "../components/styleComponents/Container/Container.css"
import Footer from "../components/Footer/Footer";

export default function Details() {

    const specific = useSelector((state) => state.specific.value);
    const Navigate = useNavigate()

    return (
        <div>
            <Header />
            <Language />
            {specific ?
                <div className="containerTwo">
                    <City />
                    <div className="daycard" onClick={() => Navigate('/')}>
                        <CardText data={specific} />
                    </div>
                    <Footer />
                </div>
                :
                <div className="containerThree">
                    <Type />
                    <Footer />
                </div>
            }
        </div>

    )
}