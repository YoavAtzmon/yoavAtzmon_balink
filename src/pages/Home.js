import Cards from "../components/Cards/Cards";
import City from "../components/City/City";
import Header from "../components/Header/Header";
import Language from "../components/Language/Language";
import Select from "../components/Selecet/Select"
import "../components/styleComponents/Container/Container.css"
import Footer from "../components/Footer/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <Language />
            <div className="containerOne">
                <Select />
                <City />
                <Cards />
                <Footer />
            </div>
        </>
    )
}