import { Select } from "../styleComponents/Select.style";
// import { Option } from "../styleComponents/Option.style";
import { useSelector } from "react-redux";
import { apiService } from "../../api/apiData";
export default function GroupRegions(){

    const lang = useSelector((state)=>state.language.value)

    async function handleOnChange(event){
        
        const result = await apiService.getCityWoeid(event.target.value)
        
    }
    return(
        <Select multiple size="4" onChange={handleOnChange} value="select" position={'absolute'}>
            <optgroup label={'europe'}>
                <option value='prague'>Prague</option>
                <option value='paris'>Paris</option>
                <option value='amsterdam'>Amsterdam</option>
            </optgroup>
            <optgroup label={'north-america'}>
                <option value='toronto'>Toronto</option>
                <option value='boston'>Boston</option>
                <option value='mexico'>Mexico</option>
            </optgroup>
            <optgroup label={'south-america'}>
                <option value='rio'>Rio</option>
                <option value='buenos aires'>Buenos Aires</option>
                <option value='lima'>Lima</option>
            </optgroup>
            <optgroup label={'asia'}>
                <option value='tokyo'>Tokyo</option>
                <option value='shanghai'>Shanghai</option>
                <option value='delhi'>Delhi</option>
            </optgroup>
            <optgroup label={'australia'}>
                <option value='sydney'>Sydney</option>
            </optgroup>
        </Select>
    )
}