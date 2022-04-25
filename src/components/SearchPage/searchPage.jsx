import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import searchStyle from "./searchPage.module.css";
import {getWeatherData} from "../../redux/mainReducer";

const SearchPage = function () {
        const weatherSlice = useSelector(state => state.mainReducer);
        const dispatch = useDispatch();
        return (
            <div>
                <p>
                    <Link to={"/"} className={searchStyle.button}>To CityListPage</Link>
                </p>
                <button
                    onClick={() => dispatch(getWeatherData({lat: weatherSlice.coords[0], lon: weatherSlice.coords[1]}))}
                >
                    getWeatherData
                </button>
                <p>
                    {
                        weatherSlice.weatherData.name
                    }
                </p>
                <p>
                    {
                        Math.round(weatherSlice.weatherData.main.temp - 273.15)+"°C"
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