import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import mainStyle from "./mainPage.module.css";
import {getWeatherDataByCityName, getWeatherDataByCoords, updateCurrentCityNameInput} from "../../redux/mainReducer";
import searchStyle from "../SearchPage/searchPage.module.css";

const MainPage = function () {
        const weatherSlice = useSelector(state => state.mainReducer);
        const dispatch = useDispatch();
        return (
            <div>
                <div className={mainStyle.chosenDayWeather__search}>
                    <input type="text" placeholder="Write desired city hear..."/>
                    <input type="button" value="Search"/>
                    <Link to={"/CityListPage"}>To CityListPage</Link>
                </div>
                <div className={mainStyle.chosenDayWeather}>
                    <div className={mainStyle.chosenDayWeather__mainWeatherData}>
                        <div className={mainStyle.cityAndDate}>
                            <div>Moscow</div>
                            <div>Today 00:32 PM</div>
                        </div>
                        <div className={mainStyle.weather}>
                            <div className={mainStyle.weather__degree}>14°</div>
                            <div>Mostly Clear</div>
                        </div>
                        <div className={mainStyle.additionalWeather}>
                            <div>720hpa</div>
                            <div>32%</div>
                            <div>12km/h</div>
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