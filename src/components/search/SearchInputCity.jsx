import { useState } from "react";
import { getCities } from "../../api/appAPI";

export default function SearchInputCity (props) {
    
    const {inputs, setId} = props;

    const [value, setValue] = useState("");
    const [citiesList, setCitiesList] = useState([]);

    function searchCities(value) {
        getCities(value, (response) => {
            setCitiesList(response);
        });
    }

    function tapValue (event) {
        const currentValue = event.target.value;
        const lastSymbol = currentValue.toString().slice(-1);
        const filter = /^[a-я]/i;
        if (!filter.test(lastSymbol) && lastSymbol !== "") {
            return;
        }
        setValue(currentValue);
        searchCities(currentValue);
    }

    function setCity (event) {
        const currentCity = event.currentTarget.innerHTML;
        currentCity.toLowerCase();
        setValue(currentCity);
        setId(event.currentTarget.id);
        setCitiesList([]);
    }

    return (
        <div className="search__input-container">
            <input className="search__input" placeholder={inputs.text} value={value} onInput={tapValue} />
            <div className="search__icon-container">
                {inputs.icon}
            </div>
            {(citiesList.length !== 0) && <div className="search__input-cities_list">
                {citiesList.map((item, i) => (
                    <span id={item._id} key={i} onClick={setCity}>{item.name}</span>
                ))}
            </div>}
        </div>
    )
}