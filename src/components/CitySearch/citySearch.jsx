import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import searchStyle from "./citySearch.module.css";
import {getWeatherDataByCityName, getWeatherDataByCoords, updateCurrentCityNameInput} from "../../redux/mainReducer";

const CitySearch = function () {
        const weatherSlice = useSelector(state => state.mainReducer);
        const dispatch = useDispatch();

        return (
            <div>
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
                {/*
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
                */}
            </div>
        );
    }
;

export default CitySearch;