import { Calendar } from "../icons/Icons";
import { useState } from "react";

export default function FilterInput ({props}) {

    const {type, setDate, date, setSearchData} = props;

    const [value, setValue] = useState(date || "");

    function tapValue (event) {
        let currentValue = event.target.value;
        const lastSymbol = currentValue.toString().slice(-1);
        const filter = /^[0-9]/i;
        if (!filter.test(lastSymbol) && lastSymbol !== "" && lastSymbol !== "/" || currentValue.length > 8 && lastSymbol !== "" && lastSymbol !== "/") {
            return;
        }
        if (currentValue.length === 2 && currentValue.length > value.length || currentValue.length === 5 && currentValue.length > value.length) {
            currentValue = currentValue + "/";
        }
        setValue(currentValue);
        if (type === "from") {
            setSearchData(prev => ({...prev, fromDate: currentValue}));
        } else {
            setSearchData(prev => ({...prev, toDate: currentValue}));
        }
    }

    function dateDialed () {
        const day = Number(value.slice(0, 2));
        const month = Number(value.slice(3, 5));
        const year = Number("20" + value.slice(6));
        const validatedDate = year + "-" + month + "-" + day;
        setDate(validatedDate);
    }

    return (
        <div className="filter__input-container">
            <input className="filter__input" placeholder="ДД/ММ/ГГ" value={value} onInput={tapValue} onBlur={dateDialed}/>
            <div className="filter__input-icon">
                <Calendar />
            </div>
        </div>
    )
}