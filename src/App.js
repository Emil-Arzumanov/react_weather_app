import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CityListPage from "./components/CityListPage/cityListPage";
import SearchPage from "./components/SearchPage/searchPage";
import MainPage from "./components/MainPage/mainPage";

function App() {
    const weatherSlice = useSelector(state => state.mainReducer);
    const dispatch = useDispatch();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/CityListPage" element={<CityListPage/>}/>
                <Route path="/SearchEngine" element={<SearchPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
