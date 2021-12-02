import { useSelector } from 'react-redux'
import TypeAnimation from 'react-type-animation'
import '../styleComponents/TypeDiv/TypeDiv.css'

export default function Type() {

    const lang = useSelector((state) => state.language.value)

    return (
        <div className="typed">
            <TypeAnimation
                cursor={true}
                sequence={[
                    lang.lang === 'english' ? 'You need to choose a specific day'
                                            :   'עליכם לבחור יום ספציפי',
                    1000,
                    lang.lang === 'english' ? 'If you want to watch his details'
                                            :'אם תרצו לצפות בפרטים שלו',
                    2000
                ]}
                wrapper="a"
                repeat={2}
            />
        </div>
    )
}