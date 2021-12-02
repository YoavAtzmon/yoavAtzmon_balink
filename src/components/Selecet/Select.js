import { apiService } from "../../api/apiData.js"
import { useDispatch, useSelector } from "react-redux";
import { getWeatherData } from "../../store/Weather.js";
import { useEffect, useState } from "react";
import ErrorHandle from "../Error/Error.js";
import "../styleComponents/Select/Select.css"

export default function Selects() {

    const dispatch = useDispatch();
    const lang = useSelector((state) => state.language.value);
    const [error,setError] = useState('');

    async function handleOnChange(event) {
        if(event.target.value !== ''){

            try{
                setError('');
                const result = await apiService.getCityWoeid(event.target.value)
                dispatch(getWeatherData(result))
            }
            catch(error){
                setError(`Somthing went wrong ):`)
            }
        }
    }

    useEffect(async()=>{
        try{
        const result = await apiService.getCityWoeid('paris')
        dispatch(getWeatherData(result))
        }
        catch(error){
            console.error('error !', error)
            setError('Somthing went wrong :(')
        }
    },[])

    return (
        <>
            {/* <Select name="select" onChange={handleOnChange} right={lang.lang == 'hebrew' ? '1.5rem' : null}>
                <option value="select">{lang.select}</option>
                <option value="2459115">{lang.newyork}</option>
                <option value="2442047"> {lang.losangeles}</option>
                <option value="610264">{lang.marseille}</option>
                <option value="753692">{lang.barcelona}</option>
                <option value="721943">{lang.rome} </option>
            </Select> */}
{/* 
            <Select
                name="select"
                onChange={handleOnChange}
                multiple size="4"
                value="select"
                // position={'absolute'}
                hebrew={lang.lang == 'hebrew' ? '0%' : null}
                english={lang.lang == 'english' ? '0%' :null}
            > */}

            <select 
                className={lang.lang === 'hebrew' ? 'selectH' : 'selectE'}
                name="select"
                onChange={handleOnChange}
                multiple
                size="4"
                value="select"
            >
                
                <optgroup label={lang.europe}>
                    <option value='barcelona'>{lang.barcelona}</option>
                    <option value='amsterdam'>{lang.amsterdam}</option>
                    <option value='london'>{lang.london}</option>
                    <option value='marseille'>{lang.marseille}</option>
                    <option value='Rome'>{lang.rome}</option>
                </optgroup>
                <optgroup label={lang.northamerica}>
                    <option value='toronto'>{lang.toronto}</option>
                    <option value='new york'>{lang.newyork}</option>
                    <option value='los angeles'>{lang.losangeles}</option>
                    <option value='mexico city'>{lang.mexicocity}</option>
                </optgroup>
                <optgroup label={lang.southamerica}>
                    <option value='brasília'>{lang.brasília}</option>
                    <option value='buenos aires'>{lang.buenosaires}</option>
                    <option value='lima'>{lang.lima}</option>
                </optgroup>
                <optgroup label={lang.asia}>
                    <option value='tokyo'>{lang.tokyo}</option>
                    <option value='shanghai'>{lang.shanghai}</option>
                    <option value='delhi'>{lang.newdelhi}</option>
                </optgroup>
                <optgroup label={lang.australia}>
                    <option value='sydney'>{lang.sydney}</option>
                </optgroup>
            </select>
            {/* </Select> */}
            {error&&<ErrorHandle err={error} />}
        </>
    )
}