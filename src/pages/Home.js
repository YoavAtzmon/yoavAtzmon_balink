import Cards from "../components/Cards/Cards";
import City from "../components/City/City";
import GroupRegions from "../components/GroupRegions/GroupRegions";
import Header from "../components/Header/Header";
import Language from "../components/Language/Language";
import Selects from "../components/Selecet/Select";
import { Container } from "../components/styleComponents/Container.style";
import Type from "../components/Type/Type";
import "../components/styleComponents/Container/Container.css"
import Footer from "../components/Footer/Footer";

export default function Home(){
    return(
        <>
        <Header />
            <Language />
            <div className="containerOne">
                <Selects />
                {/* <GroupRegions /> */}
                {/* <Type /> */}
                <City />
                <Cards />
            </div>
            <Footer />
        </>
    )
}