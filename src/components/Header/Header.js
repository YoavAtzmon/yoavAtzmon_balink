import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import style from '../styleComponents/NavBar/NavBar.module.css'
import {memo,useContext} from "react"
import { DarkContext } from "../../context/DarkContext"

//wrap this component with memo to prevent unnecessary re-renders
//e.g when the dark button is pressed,there is no reason for this component to re-render
function Header(){

    const Navigate = useNavigate()
    const lang = useSelector((state) => state.language.value)
    const {dark} = useContext(DarkContext)

    return (
        <>
            <div className={lang.lang === 'hebrew' ? 
                            !dark ? style.navbarH : style.navbarHebDark
                            : !dark ? style.navbarE : style.navbarEngDark}>
                <div onClick={() => Navigate('/')}>{lang.home}</div>
                <p>|</p>
                <div onClick={() => Navigate('/details')}>{lang.details}</div>
            </div>
        </>
    )
}
export default memo(Header);