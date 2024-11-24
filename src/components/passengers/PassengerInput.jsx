import { useState } from "react";

export default function PassengerInput (props) {
    
    const {id, placeholder, lastValue, onBlur} = props;

    const [value, setValue] = useState(lastValue);

    function tapValue (event) {

        let currentValue = event.target.value;
        const lastSymbol = currentValue.toString().slice(-1);
        if (id === "birthday") {
            const filter = /^[0-9]/i;
            if (!filter.test(lastSymbol) && lastSymbol !== "" && lastSymbol !== "." || currentValue.length > 10 && lastSymbol !== "" && lastSymbol !== ".") {
                return;
            }
            if (currentValue.length === 2 && currentValue.length > value.length || currentValue.length === 5 && currentValue.length > value.length) {
                currentValue = currentValue + ".";
            }
        } else if (id === "document_data_series") {
            const filter = /^[0-9]/i;
            if (!filter.test(lastSymbol) && lastSymbol !== "" || currentValue.length > 4 && lastSymbol !== "") {
                return;
            }
        } else if (id === "document_data_number") {
            if (currentValue.length > 16 && lastSymbol !== "") {
                return;
            }
        } else {
            const filter = /^[a-я]/i;
            if (!filter.test(lastSymbol) && lastSymbol !== "") {
                return;
            }
        }
        setValue(currentValue);
    }

    return (
            <input id={id} className="passenger__info-input" placeholder={placeholder} value={value} onInput={tapValue} onBlur={onBlur} />
    )
}