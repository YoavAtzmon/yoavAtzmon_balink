import React, { memo } from 'react'
import { useSelector } from 'react-redux';
import style from '../styleComponents/Footer/Footer.module.css'

//wrap this component with memo to prevent unnecessary re-renders
//e.g when the dark button is pressed,there is no reason for this component to re-render
function Footer() {

    const lang = useSelector((state) => state.language.value);

    return (
        <div className={style.footer}>
            <h3>{lang.reserved}</h3>
        </div>
    )
}
export default memo(Footer);


