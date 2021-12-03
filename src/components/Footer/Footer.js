import React from 'react'
import { useSelector } from 'react-redux';
import '../styleComponents/Footer/Footer.css'

export default function Footer() {

    const lang = useSelector((state) => state.language.value);

    return (
        <div className="footer">
            <h3>{lang.reserved}</h3>
        </div>
    )
}


