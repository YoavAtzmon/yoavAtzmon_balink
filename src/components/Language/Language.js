import { useDispatch } from "react-redux";
import { changeLanguage } from "../../store/Language";
import { english, hebrew } from "../../dictionary/dictionary";
import { useSelector } from "react-redux";
import "../styleComponents/LangIcon/LangIcon.css";

export default function Language() {

    const lang = useSelector((state) => state.language.value)
    const dispatch = useDispatch()

    function language() {
        dispatch(changeLanguage(lang.lang === 'hebrew' ? english : hebrew))
    }


    return (
        <div onClick={language} >
            <img
                className="icon"
                alt=""
                src={`https://cdn-icons-png.flaticon.com/512/197/${lang.lang === 'hebrew' || !lang ? 197577 : 197484}.png`}
            />
        </div>

    )
}