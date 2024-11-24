import MainScreen from "./MainScreen";
import About from "./About";
import How from "./How";
import Reviews from "./Reviews";
import { getRoutes } from "../../api/appAPI";
import { useOutletContext } from 'react-router-dom';

export default function StartPage () {

    const [ searchData, setSearchData, routesList, setRoutesList ] = useOutletContext();
    
    function startSearch (options) {
        getRoutes(options, (response) => {
            setRoutesList(response);
        });
    }

    return (
        <header className="start_page">
            <MainScreen props={{startSearch: startSearch, searchData: searchData, setSearchData: setSearchData}} />
            <About />
            <How />
            <Reviews />
        </header>
    )
}