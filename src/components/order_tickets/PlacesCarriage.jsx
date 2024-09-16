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

    let image = "";
    if (type === "Сидячий") {
        image = "Seating";
    } else if (type === "Плацкарт") {
        image = "Reserved";
    } else if (type === "Купе") {
        image = "Compartment";
    } else {
        image = "Lux";
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
                <div className="places__tickets_carriage-scheme">
                    <img className="places__tickets_carriage_scheme-image" src={"/images/" + image + ".png"}/>
                </div>
            </div>
        </div>
    )
}