import { useState } from "react";

export default function PaymentInput (props) {
    
    const {id, placeholder, lastValue, onBlur} = props;

    const [value, setValue] = useState(lastValue);

    function tapValue (event) {

        let currentValue = event.target.value;
        const lastSymbol = currentValue.toString().slice(-1);
        if (id === "phone") {
            const filter = /^[0-9]/i;
            if (!filter.test(lastSymbol) && lastSymbol !== "" && lastSymbol !== "-" || currentValue.length > 15 && lastSymbol !== "" && lastSymbol !== "-") {
                return;
            }
            if (currentValue.length === 1 && currentValue.length > value.length || currentValue.length === 5 && currentValue.length > value.length || currentValue.length === 9 && currentValue.length > value.length || currentValue.length === 12 && currentValue.length > value.length) {
                currentValue = currentValue + "-";
            }
        } else if (id !== "email") {
            const filter = /^[a-я]/i;
            if (!filter.test(lastSymbol) && lastSymbol !== "") {
                return;
            }
        }
        setValue(currentValue);
    }

    return (
            <input id={id} className="payment__info-input" placeholder={placeholder} value={value} onInput={tapValue} onBlur={onBlur} />
    )
}