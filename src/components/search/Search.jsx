import SearchInput from "./SearchInput";
// import SearchTooltip from "./SearchTooltip";
import Button from "../ui/Button";
import { useNavigate } from 'react-router-dom';

export default function Search (props) {

    const {styles} = props;
    const inputs = [
        {
            icon: "./icons/Marker.svg",
            text: "Откуда",
        },
        {
            icon: "./icons/Marker.svg",
            text: "Куда",
        },
        {
            icon: "./icons/Calendar.svg",
            text: "ДД/ММ/ГГ",
        },
    ];
    const navigation = useNavigate();
    const button = {
        size: "button-large",
        decor: "button-orange_black",
        text: "НАЙТИ БИЛЕТЫ",
        onClick: (event) => {
            event.preventDefault();
            navigation("/order/train");
        },
    }

    return (
        <div className="search-container">
            <form className="search__form" style={styles.top}>
                <div className="search__direction-container">
                    <span className="search__title">Направление</span>
                    <div className="search__inputs-container">
                        <SearchInput inputs={inputs[0]}/>
                        <div className="search__update">
                            <img className="search__update-icon" src="./icons/Update.svg"/>
                        </div>
                        <SearchInput inputs={inputs[1]}/>
                    </div>
                </div>
                <div className="search__date-container">
                    <span className="search__title">Дата</span>
                    <div className="search__inputs-container">
                        <SearchInput inputs={inputs[2]}/>
                        <SearchInput inputs={inputs[2]}/>
                        <div style={styles.bottom}>
                            <Button props={button}/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}