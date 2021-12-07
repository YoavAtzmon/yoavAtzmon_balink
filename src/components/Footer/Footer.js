import React, { memo } from 'react'
import { useSelector } from 'react-redux';
import style from '../styleComponents/Footer/Footer.module.css'

function Footer() {

    const lang = useSelector((state) => state.language.value);

    return (
        <div className={style.footer}>
            <h3>{lang.reserved}</h3>
        </div>
    )
}
export default memo(Footer);


