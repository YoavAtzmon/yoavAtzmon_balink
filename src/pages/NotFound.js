import pic from '../images/fourOfour.png'
import "../components/styleComponents/Container/Container.css"


export default function NotFound() {
    return (
        <div className="containerNotFound">
            <h1>PAGE NOT FOUND!</h1>
            <img src={pic} alt="" />
        </div>
    )
}


