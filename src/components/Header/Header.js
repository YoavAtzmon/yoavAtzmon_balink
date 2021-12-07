import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import style from '../styleComponents/NavBar/NavBar.module.css'
import {memo,useContext} from "react"
import { DarkContext } from "../../context/DarkContext"


function Header(){

    const Navigate = useNavigate()
    const lang = useSelector((state) => state.language.value)
    const {darkTheme} = useContext(DarkContext)

    return (
        <>
            <div className={lang.lang === 'hebrew' ? style.navbarH : style.navbarE} style={darkTheme}>
                <div onClick={() => Navigate('/')}>{lang.home}</div>
                <p>|</p>
                <div onClick={() => Navigate('/details')}>{lang.details}</div>
            </div>
        </>
    )
}
export default memo(Header);