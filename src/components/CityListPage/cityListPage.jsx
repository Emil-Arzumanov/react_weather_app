import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import cityListStyle from "./cityListPage.module.css";
import axios from "axios";

const CityListPage = function () {
    const weatherSlice = useSelector(state => state.mainReducer);
    const dispatch = useDispatch();

    return (
        <div>
            <p>
                <Link to={"/SearchEngine"} className={cityListStyle.button}>To searchPage</Link>
            </p>
            CityListPage
        </div>
    );
};

export default CityListPage;