import { useDispatch } from "react-redux";
import { changeLanguage } from "../../store/Language";
import { english, hebrew } from "../../dictionary/dictionary";
import { useSelector } from "react-redux";
import style from "../styleComponents/Language/Language.module.css";
import { memo } from "react";

//wrap this component with memo to prevent unnecessary re-renders
//e.g when the dark button is pressed,there is no reason for this component to re-render
function Language() {

    //this component controls the web language with a iconButton
    const lang = useSelector((state) => state.language.value)
    const dispatch = useDispatch()


    function setLanguage() {
        localStorage.lang = JSON.stringify(lang.lang === 'hebrew' ? english : hebrew)
        dispatch(changeLanguage(lang.lang === 'hebrew' ? english : hebrew))
    }


    return (
        <div onClick={setLanguage} >
            <img
                className={style.icon}
                alt=""
                src={`https://cdn-icons-png.flaticon.com/512/197/${lang.lang === 'hebrew' || !lang ? 197577 : 197484}.png`}
            />
        </div>

    )
}
export default memo(Language);