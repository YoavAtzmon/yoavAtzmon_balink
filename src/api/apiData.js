import axios from "axios"

export const apiService = {
    getData,
    getCityWoeid

}

//api request to get sixdays weather by woeid
async function getData(locationKey) {
    try {
        const result = await axios.get(`https://www.metaweather.com/api/location/${locationKey}/`)
        return result.data
    }
    catch (error) {
        console.error(`faild when try to get the current weather`, error)
    }
}

//api request to get location details by location name
async function getCityWoeid(locationName) {
    try {
        const result = await axios.get(`https://www.metaweather.com/api/location/search/?query=${locationName}`)
        return getData(result.data[0]['woeid'])
    }
    catch (error) {
        console.error(`faild when try to get the city woeid`, error)
    }
}

