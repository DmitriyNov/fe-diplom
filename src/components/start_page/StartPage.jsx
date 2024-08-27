import MainScreen from "./MainScreen";
import About from "./About";
import How from "./How";
import Reviews from "./Reviews";

export default function StartPage () {
    
    return (
        <header className="start_page">
            <MainScreen />
            <About />
            <How />
            <Reviews />
        </header>
    )
}