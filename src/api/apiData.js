import axios from "axios"

export const apiService ={
    getData,
    getCityWoeid
   
}

async function getData(locationKey) {
    try {
        const result = await axios.get(`https://www.metaweather.com/api/location/${locationKey}/`)
        return result.data
    }
    catch (error) {
        console.error(`faild when try to get the current weather`, error)
    }
}

async function getCityWoeid(locationName) {
    try {
        const result = await axios.get(`https://www.metaweather.com/api/location/search/?query=${locationName}`)
        return getData(result.data[0]['woeid'])
    }
    catch (error) {
        console.error(`faild when try to get the current weather`, error)
    }
}


