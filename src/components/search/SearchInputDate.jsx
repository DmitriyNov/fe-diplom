import { useEffect, useRef, useState } from "react";
import Calendar from "../ui/Calendar";

export default function SearchInputDate ({props}) {

    const {type, inputs, setDate, date, setSearchData} = props;

    const [value, setValue] = useState(date || "");
    const [tooltip, setTooltip] = useState(false);

    function showTooltip () {
        setTooltip(true);
    }

    useEffect(() => {
        setTooltip(false);
        if (type === "from") {
            setSearchData(prev => ({...prev, fromDate: value}));
        } else {
            setSearchData(prev => ({...prev, toDate: value}));
        }
        dateDialed();
    }, [value])

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
    }

    function dateDialed () {
        const day = Number(value.slice(0, 2));
        const month = Number(value.slice(3, 5));
        const year = Number("20" + value.slice(6));
        const validatedDate = year + "-" + month + "-" + day;
        setDate(validatedDate);
    }

    return (
        <div className="search__input-container">
            <input className="search__input" placeholder={inputs.text} value={value} onInput={tapValue} onBlur={dateDialed} onFocus={showTooltip}/>
            <div className="search__icon-container">
                {inputs.icon}
            </div>
            {!tooltip || <div className="search__input-tooltip">
                <Calendar setValue={setValue} />
            </div>}
        </div>
    )
}