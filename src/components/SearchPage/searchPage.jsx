import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import searchStyle from "./searchPage.module.css";
import {getWeatherDataByCityName, getWeatherDataByCoords, updateCurrentCityNameInput} from "../../redux/mainReducer";

const SearchPage = function () {
        const weatherSlice = useSelector(state => state.mainReducer);
        const dispatch = useDispatch();
        return (
            <div>
                <p>
                    <Link to={"/"} className={searchStyle.button}>To CityListPage</Link>
                </p>
                <input
                    type="text"
                    placeholder="Enters address..."
                    value={weatherSlice.currentCityNameInput}
                    onChange={(e) => dispatch(updateCurrentCityNameInput(e.target.value))}
                />
                <button
                    onClick={() => dispatch(getWeatherDataByCityName({cityName: weatherSlice.currentCityNameInput}))}
                >
                    getWeatherDataByCityName
                </button>
                <p>
                    <button
                        onClick={() => dispatch(getWeatherDataByCoords({
                            lat: weatherSlice.coords[0],
                            lon: weatherSlice.coords[1]
                        }))}
                    >
                        getWeatherDataByCoords
                    </button>
                </p>
                <p>
                    {
                        weatherSlice.weatherData ? weatherSlice.weatherData.name : ""
                    }
                </p>
                <p>
                    {
                        weatherSlice.weatherData ? Math.round(weatherSlice.weatherData.main.temp - 273.15) + "°C" : ""
                    }
                </p>
                <p>
                    searchPage
                </p>
            </div>
        );
    }
;

export default SearchPage;