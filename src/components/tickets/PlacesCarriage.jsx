import { Ruble, ConditionerOption, WiFiOption, LinenOption, FoodOption } from "../icons/Icons";

export default function PlacesCarriage ({props}) {

    const {type, quantity, places, options} = props;

    let availableOptions = [
        {
            name: "conditioner",
        },
        {
            name: "wi-fi",
        },
        {
            name: "linen",
        },
        {
            name: "food",
        },
    ];

    for (let i = 0; i < availableOptions.length; i++) {
        if (options.includes(availableOptions[i].name)) {
            availableOptions[i].status = "included";
        }
    }

    const carriages = ["07", "09"];
    const order = "головы";
    const buyersNumber = 19;
    const service = "ФПК";
    const templateScheme = [];
    const scheme = [];
    let image = "";
    if (type === "Сидячий") {
        image = "Seating";
        for (let i=1; i<63; i++) {
            templateScheme.push(i);
        };
        for (let i=0; i<62; i=i+4) {
            if (i < 31 || i > 34 && i < 58) {
                scheme.push(templateScheme.slice(i, i+4));  
            } else if (i === 32) {
                scheme.push(templateScheme.slice(i, i+3));
                i = i - 1;
            } else {
                scheme.push(templateScheme.slice(i, i+3));
                break;
            }
        };
    } else if (type === "Плацкарт") {
        image = "Reserved";
        for (let i=1; i<49; i++) {
            templateScheme.push(i);
        };
        for (let i=0; i<48; i=i+4) {
            if (i < 31) {
                scheme.push(templateScheme.slice(i, i+4));  
            } else {
                scheme.push(templateScheme.slice(i, i+16));
                break;
            };
        };
    } else if (type === "Купе") {
        image = "Compartment";
        for (let i=1; i<33; i++) {
            templateScheme.push(i);
        };
        for (let i=0; i<32; i=i+4) {
            scheme.push(templateScheme.slice(i, i+4));
        }
    } else {
        image = "Lux";
        for (let i=1; i<17; i++) {
            scheme.push(i);
        };
    }

    




    return (
        <div className="places__tickets-carriage-container">
            <div className="places__tickets_carriage_select-container">
                <div className="places__tickets_carriage-select">
                    <span>Вагоны</span>
                    {carriages.map((item, i) => (
                        <span key={i} className="places__tickets_carriage_select-number">{item}</span>
                    ))}
                </div>
                <span>
                    Нумерация вагонов начинается с <span className="places__tickets_carriage_select-order">{order}</span> поезда
                </span>
            </div>
            <div className="places__tickets-carriage">
                <div className="places__tickets_carriage-data">
                    <div className="places__tickets_carriage_data_number-container">
                        <span className="places__tickets_carriage_data-number">{carriages[0]}</span>
                        <span>вагон</span>
                    </div>
                    <div className="places__tickets_carriage_data_places-container">
                        <div className="places__tickets_carriage_data_places-text">
                            <div>
                                <span>Места</span>
                                <span className="places__tickets_carriage_data_places-quantity">{quantity}</span>
                            </div>
                            <span>Стоимость</span>
                        </div>
                        {places.map((item, i) => (
                            <div key ={i} className="places__tickets_carriage_data_place-container">
                                {!item.type || 
                                <div className="places__tickets_carriage_data_place_type-quantity-container">
                                    <span className="places__tickets_carriage_data_place-type">{item.type}</span>
                                    <span className="places__tickets_carriage_data_place-quantity">{item.quantity}</span>
                                </div>}
                                <div className="places__tickets_carriage_data_place_price-container">
                                    <span className="places__tickets_carriage_data_place_price">{item.price}</span>
                                    <Ruble />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="places__tickets_carriage_data_options-container">
                        <div>
                            <span>Обслуживание</span>
                            <span className="places__tickets_carriage_data_options-serviced">{service}</span>
                        </div>
                        <div className="places__tickets_carriage_data_options">
                            {availableOptions.map((item, i) => (
                                <div key={i} className="places__tickets_carriage_data_option">
                                    {(item.name === "conditioner") ? <ConditionerOption /> : (item.name === "wi-fi") ? <WiFiOption /> : (item.name === "linen") ? <LinenOption /> : <FoodOption />}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="places__tickets_carriage-info">
                    <span>{buyersNumber}</span>
                    <span> человек выбирают места в этом поезде</span>
                </div>
                <div className="places__tickets_carriage_scheme-container">
                    <img className="places__tickets_carriage_scheme-image" src={"/images/" + image + ".png"}/>
                    <div className={"places__tickets_carriage-scheme places__tickets_carriage-scheme-" + image}>
                        {scheme.map((items, i) => (
                            (type === "Сидячий") ?
                            <div key={i} className={"places__tickets_carriage_scheme_items-container" + " " + ((i === 8) ? "places__tickets_carriage_scheme_items-container-right places__tickets_carriage_scheme_items-container-special" : (i >= 8) ? "places__tickets_carriage_scheme_items-container-right" : "")}>
                                {items.map((item) => (
                                    <div key={item} className="places__tickets_carriage_scheme-item">
                                        {item}
                                    </div>
                                ))}
                            </div> : 
                            (type === "Плацкарт") ?
                            <div key={i} className={"places__tickets_carriage_scheme_items-container" + " " + ((i === 8) ? "places__tickets_carriage_scheme_items-container-aside" : "")}>
                                {items.map((item) => (
                                    <div key={item} className={"places__tickets_carriage_scheme-item" + " " + ((i === 8 && !(item % 2)) ? "places__tickets_carriage_scheme-item-Reserved_even" : "")}>
                                        {item}
                                    </div>
                                ))}
                            </div> : 
                            (type === "Купе") ?
                            <div key={i} className="places__tickets_carriage_scheme_items-container">
                                {items.map((item) => (
                                    <div key={item} className="places__tickets_carriage_scheme-item">
                                        {item}
                                    </div>
                                ))}
                            </div> : 
                            <div key={i} className={"places__tickets_carriage_scheme-item" + " " + (!(items % 2) ? "places__tickets_carriage_scheme-item-Lux_even" : "")}>
                                {items}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}