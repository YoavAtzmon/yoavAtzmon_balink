import pic from '../images/fourOfour.png'
import style from "../components/styleComponents/NotFound/NotFound.module.css"


export default function NotFound() {
    return (
        <div className={style.container}>
            <h1>PAGE NOT FOUND!</h1>
            <img src={pic} alt="" />
        </div>
    )
}