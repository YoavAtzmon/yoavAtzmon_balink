import  Cards  from "../components/Cards/Cards";
import City from "../components/City/City";
import Header from "../components/Header/Header";
import Language from "../components/Language/Language";
import Select from "../components/Selecet/Select"
import Footer from "../components/Footer/Footer";
import style from  "../components/styleComponents/Container/Container.module.css"

export default function Home() {

    return (
        <>
            <Header />
            <Language />
            <div className={style.containerOne}>
                <Select />
                <City />
                <Cards />
                <Footer />
            </div>
        </>
    )
}