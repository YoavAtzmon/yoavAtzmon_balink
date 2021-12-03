import '../styleComponents/Eroor/Error.css'

export default function ErrorHandle({ err }) {
    return (
        <div className="error">
            <h3>{err}</h3>
        </div>
    )
}