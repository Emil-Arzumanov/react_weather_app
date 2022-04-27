import axios from "axios";

export const REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
export const REACT_APP_API_KEY = 'cf681a6de926ae04922a6f47823e1a40';
export const REACT_APP_ICON_URL = 'https://openweathermap.org/img/w'

const getDataByCoords = (lat, lon) => {
    return axios
        .get(REACT_APP_API_URL + `/weather?lat=${lat}&lon=${lon}&appid=${REACT_APP_API_KEY}`)
        .then(resp => {
            return resp;
        })
}

const getDataByCityName = (cityName) => {
    return axios
        .get(REACT_APP_API_URL + `/weather?q=${cityName}&appid=${REACT_APP_API_KEY}`)
        .then(resp => {
            return resp;
        })
}

const weatherService = {
    getDataByCoords,
    getDataByCityName
};
export default weatherService;