import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import mainStyle from "./mainPage.module.css";
import {getWeatherDataByCityName, getWeatherDataByCoords, updateCurrentCityNameInput} from "../../redux/mainReducer";
import searchStyle from "../CitySearch/citySearch.module.css";
import CitySearch from "../CitySearch/citySearch";

const MainPage = function () {
        const weatherSlice = useSelector(state => state.mainReducer);
        const dispatch = useDispatch();
        let today = Math.floor((new Date()).getTime());
        console.log(today);

        return (
            <div>
                <CitySearch className={mainStyle.chosenDayWeather__search}/>
                <div className={mainStyle.chosenDayWeather}>
                    <div className={mainStyle.chosenDayWeather__mainWeatherData}>
                        <div className={mainStyle.cityAndDate}>
                            <div>{weatherSlice.weatherData.name ? weatherSlice.weatherData.name : null}</div>
                            <div>
                                Today
                                {
                                    weatherSlice.weatherData.main
                                    ? (today + weatherSlice.weatherData.timezone)
                                    : null
                                }
                                PM
                            </div>
                        </div>
                        <div className={mainStyle.weather}>
                            <div className={mainStyle.weather__degree}>
                                {
                                    weatherSlice.weatherData.main
                                        ? Math.round(weatherSlice.weatherData.main.temp - 273)
                                        : null
                                }°
                            </div>
                            <div>
                                {weatherSlice.weatherData.main ? weatherSlice.weatherData.weather[0].main : null}
                            </div>
                        </div>
                        <div className={mainStyle.additionalWeather}>
                            <div>
                                {weatherSlice.weatherData.main ? weatherSlice.weatherData.main.pressure : null} hpa
                            </div>
                            <div>
                                {weatherSlice.weatherData.main ? weatherSlice.weatherData.main.humidity : null} %
                            </div>
                            <div>
                                {weatherSlice.weatherData.main ? weatherSlice.weatherData.wind.speed : null} km/h
                            </div>
                        </div>
                    </div>
                    <div className="chosenDayWeather__additionalWeatherData"></div>
                </div>
                <div className="weekForecast"></div>
            </div>
        );
    }
;

export default MainPage;