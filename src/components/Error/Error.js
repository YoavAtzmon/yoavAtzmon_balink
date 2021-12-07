import { useSelector } from 'react-redux'
import style from '../styleComponents/Eroor/Error.module.css'

function ErrorHandle({ err }) {

    const lang = useSelector((state) => state.language.value)


    return (
        <div className={err === lang.err + ' ' + lang.cors ? style.corserror : style.error}>
            <h3>{err}</h3>
        </div>
    )
}
export default ErrorHandle;