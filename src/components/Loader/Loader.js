import Spinner from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


export default function Loader() {
    
    return <Spinner
        type="BallTriangle"
        height={50}
        width={50}
        color='blue'
    />
}