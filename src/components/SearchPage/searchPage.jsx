import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import searchStyle from "./searchPage.module.css";

const SearchPage = function () {
    const weatherSlice = useSelector(state => state.mainReducer);
    const dispatch = useDispatch();

    return (
        <div>
            <p>
                <Link to={"/"} className={searchStyle.button}>To CityListPage</Link>
            </p>
            searchPage
        </div>
    );
};

export default SearchPage;