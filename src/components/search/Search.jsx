import SearchInputCity from "./SearchInputCity";
import SearchInputDate from "./SearchInputDate";
import Button from "../ui/Button";
import { Marker, Calendar } from "../icons/Icons";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export default function Search (props) {

    const {styles, startSearch} = props;
    const [idFrom, setIdFrom] = useState("");
    const [idTo, setIdTo] = useState("");
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    const inputs = [
        {
            icon: <Marker />,
            text: "Откуда",
        },
        {
            icon: <Marker />,
            text: "Куда",
        },
        {
            icon: <Calendar />,
            text: "ДД/ММ/ГГ",
        },
    ];

    function validateForm () {

    }

    const navigation = useNavigate();
    const button = {
        size: "button-large",
        decor: "button-orange_black",
        text: "НАЙТИ БИЛЕТЫ",
        onClick: (event) => {
            event.preventDefault();
            startSearch(idFrom, idTo, dateFrom, dateTo);
            navigation("/order/tickets/train");
        },
    }

    return (
        <div className="search-container">
            <form className="search__form" style={styles.top}>
                <div className="search__direction-container">
                    <span className="search__title">Направление</span>
                    <div className="search__inputs-container">
                        <SearchInputCity inputs={inputs[0]} setId={setIdFrom} />
                        <div className="search__update">
                            <img className="search__update-icon" src="./icons/Update.png"/>
                        </div>
                        <SearchInputCity inputs={inputs[1]} setId={setIdTo} />
                    </div>
                </div>
                <div className="search__date-container">
                    <span className="search__title">Дата</span>
                    <div className="search__inputs-container">
                        <SearchInputDate inputs={inputs[2]} setDate={setDateFrom}/>
                        <SearchInputDate inputs={inputs[2]} setDate={setDateTo}/>
                        <div style={styles.bottom}>
                            <Button props={button}/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}