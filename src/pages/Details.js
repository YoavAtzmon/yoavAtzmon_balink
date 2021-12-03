import { useSelector } from "react-redux"
import { useNavigate } from "react-router";
import CardText from "../components/Cards/CardText/CardText";
import City from "../components/City/City";
import Header from "../components/Header/Header";
import Language from "../components/Language/Language";
import Type from "../components/Type/Type";
import "../components/styleComponents/Container/Container.css"
import Footer from "../components/Footer/Footer";
import DateSearch from "../components/DateSearch/DateSearch";

export default function Details() {

    const specific = useSelector((state) => state.specific.value);
    const Navigate = useNavigate()

    return (
        <div>
            <Header />
            <Language />
            {specific ?
                <div className="containerTwo">
                    <DateSearch />
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