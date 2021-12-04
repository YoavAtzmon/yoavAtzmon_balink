import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import '../styleComponents/NavBar/NavBar.css'


export default function Header() {

    const Navigate = useNavigate()

    const lang = useSelector((state) => state.language.value)

    return (
        <>
            <div className={lang.lang === 'hebrew' ? 'navbarH' : 'navbarE'}>
                <div onClick={() => Navigate('/')}>{lang.home}</div>
                <p>|</p>
                <div onClick={() => Navigate('/details')}>{lang.details}</div>
            </div>

        </>
    )
}