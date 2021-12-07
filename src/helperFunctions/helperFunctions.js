import dayjs from "dayjs";

 export const helpers={
    formatingCelsiusToFahrenheit,
    foramtWeatherDiscription,
    dateConvarte
 }
 
 //helper function to convert from celsius to Fahrenheit
function formatingCelsiusToFahrenheit(min,max,temp){
    if(temp==='c')
        return min.toFixed(0)+'°c' + '-' + max.toFixed(0)+'°c' 
    else 
        return (min * 1.8 + 32).toFixed(0)+'°f' + ' ' + '-' + ' ' + (max * 1.8 +32).toFixed(0)+'°f'
    
}

 //helper function to format the state-name
function foramtWeatherDiscription(discription){
    if(discription.includes(' ')){
        discription = discription[0].toLowerCase() + discription[discription.indexOf(' ') + 1].toLowerCase()
    }
    else{
        discription = discription[0].toLowerCase()
    }
    return discription
}

 //helper function to convert the date
function dateConvarte(date){
    date = dayjs(date).format('ddd MMM DD')
    if (Number(date[8]) === 0) {
        date = date.slice(0, 8) + ' ' + date.slice(9)   
    } 
    return date
}