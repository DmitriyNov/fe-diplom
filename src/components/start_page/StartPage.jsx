import MainScreen from "./MainScreen";
import About from "./About";
import How from "./How";
import Reviews from "./Reviews";
import { getRoutes } from "../../api/appAPI";

export default function StartPage () {
    
    function startSearch (idFrom, idTo, dateFrom, dateTo) {
        const options = {from_city_id: idFrom, to_city_id: idTo, date_start: dateFrom, date_end: dateTo};
        getRoutes(options, (response) => {
            console.log(response);
        });
    }

    return (
        <header className="start_page">
            <MainScreen startSearch={startSearch} />
            <About />
            <How />
            <Reviews />
        </header>
    )
}