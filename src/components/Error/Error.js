import { useSelector } from 'react-redux'
import '../styleComponents/Eroor/Error.css'

export default function ErrorHandle({ err }) {

    const lang = useSelector((state)=>state.language.value)
    console.log(err);
    return (
        <div className={err === lang.err + ' ' +lang.cors ? "corserror" : "error"}>
            <h3>{err}</h3>
        </div>
    )
}