import { useEffect, useState } from "react";
import PlacesTicketType from "./PlacesTicketType";
import PlacesType from "./PlacesType";
import PlacesCarriage from "./PlacesCarriage";

export default function PlacesTickets (props) {

    const {train, carriages, tickets, setTickets} = props;

    const [selectedType, setSelectedType] = useState("Взрослых");
    const [ticetsTypesQuantity, setTicetsTypesQuantity] = useState([0, 0, 0]);
    const [activeType , setActiveType] = useState("");
    const [selectedCarriages, setSelectedCarriages] = useState([]);
    const [activeCarriages , setActiveCarriages] = useState([]);
    const [activeCarriagesNumbers , setActiveCarriagesNumbers] = useState([]);
    const [left, setLeft] = useState(6);

    const adultText = {
        first: "Можно добавить еще",
        second: "пассажиров",
    };
    const childrenText = {
        first: "Можно добавить еще",
        second: "детей до 10 лет. Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%",
    };

    const types = [
        {
            type: "Взрослых",
            selected: ticetsTypesQuantity[0],
            text: adultText,
        },
        {
            type: "Детских",
            selected: ticetsTypesQuantity[1],
            text: childrenText,
        },
        {
            type: "Детских «без места»",
            selected: ticetsTypesQuantity[2],
            text: null,
        },
    ];

    const order = "головы";

    const carriagesTypes = [];

    carriages.map((item) => {
        if (item.type === "Сидячий" && !carriagesTypes.includes("Сидячий")) {
            carriagesTypes.push("Сидячий");
        }
        if (item.type === "Плацкарт" && !carriagesTypes.includes("Плацкарт")) {
            carriagesTypes.push("Плацкарт");
        }
        if (item.type === "Купе" && !carriagesTypes.includes("Купе")) {
            carriagesTypes.push("Купе");
        }
        if (item.type === "Люкс" && !carriagesTypes.includes("Люкс")) {
            carriagesTypes.push("Люкс");
        }
    });

    carriagesTypes.sort((a, b) => {
        if (a === "Сидячий" && b === "Плацкарт") {
            return -1;
        }
        if (a === "Сидячий" && b === "Купе") {
            return -1;
        }
        if (a === "Сидячий" && b === "Люкс") {
            return -1;
        }
        if (a === "Плацкарт" && b === "Сидячий") {
            return 1;
        }
        if (a === "Плацкарт" && b === "Купе") {
            return -1;
        }
        if (a === "Плацкарт" && b === "Люкс") {
            return -1;
        }
        if (a === "Купе" && b === "Сидячий") {
            return 1;
        }
        if (a === "Купе" && b === "Плацкарт") {
            return 1;
        }
        if (a === "Купе" && b === "Люкс") {
            return -1;
        }
        if (a === "Люкс" && b === "Сидячий") {
            return 1;
        }
        if (a === "Люкс" && b === "Плацкарт") {
            return 1;
        }
        if (a === "Люкс" && b === "Купе") {
            return 1;
        }
    });

    function selectType (event) {
        setSelectedType(event.currentTarget.id);
    }

    function selectActiveType (event) {
        setActiveType(event.currentTarget.id);
        const currentCarriages = [];
        carriages.map((item) => {
            if (item.type === event.currentTarget.id) {
                currentCarriages.push(item);
            }
        });
        setSelectedCarriages(currentCarriages);
        setActiveCarriages([currentCarriages[0]]);
    }

    function selectCariage (event) {
        const currentCariageNumber = event.currentTarget.id;
        let currentCariage;
        selectedCarriages.map((item) => {
            if (item.name === currentCariageNumber) {
                currentCariage = item;
            }
        });
        if (!activeCarriagesNumbers.includes(currentCariageNumber)) {
            setActiveCarriages([...activeCarriages, currentCariage]);
        } else {
            const currentActiveCarriages = activeCarriages.filter((item) =>  item.name !== currentCariageNumber);
            if (currentActiveCarriages.length !== 0) {
                setActiveCarriages([...currentActiveCarriages]);
            } 
        }
    }

    useEffect(() => {
        const currentActiveCarriagesNumbers = [];
        activeCarriages.map((item) => {
            currentActiveCarriagesNumbers.push(item.name)
        });
        setActiveCarriagesNumbers(currentActiveCarriagesNumbers);
    }, [activeCarriages]);

    return (
        <div className="places__tickets-container">
            <span className="places__tickets-title">
                Количество билетов
            </span>
            <div className="places__tickets-types">
                {types.map((item, i) => (
                    <PlacesTicketType key={i} props={{...item, left: left, selectedType: selectedType, selectType: selectType, ticetsTypesQuantity: ticetsTypesQuantity, setTicetsTypesQuantity: setTicetsTypesQuantity}} />
                ))}
            </div>
            <div className="places__tickets-carriages">
                <span className="places__tickets_carriages-title">
                    Тип вагона
                </span>
                <div className="places__tickets_carriages-types">
                    {carriagesTypes.map((item, i) => (
                        <PlacesType key={i} props={{type: item, activeType: activeType, selectActiveType: selectActiveType}}/>
                    ))}
                </div>
            </div>
            {!activeType || 
            <div className="places__tickets_carriage_select-container">
                <div className="places__tickets_carriage-select">
                    <span>Вагоны</span>
                    {selectedCarriages.map((item, i) => (
                        <span key={i} id={item.name} className={"places__tickets_carriage_select-number " + ((activeCarriagesNumbers.includes(item.name)) ? "places__tickets_carriage_select-number-active" : "")} onClick={selectCariage} >{item.name}</span>
                    ))}
                </div>
                <span>
                    Нумерация вагонов начинается с <span className="places__tickets_carriage_select-order">{order}</span> поезда
                </span>
            </div>}
            <div className="places__tickets-carriage-container">
                {activeCarriages.map((item, i) => (
                    <PlacesCarriage key={i} props={{...item, direction: train.direction, options: train.options, activeCarriages: activeCarriages, setActiveCarriages: setActiveCarriages, tickets: tickets, setTickets: setTickets, selectedType: selectedType, left: left, setLeft: setLeft, ticetsTypesQuantity: ticetsTypesQuantity, setTicetsTypesQuantity: setTicetsTypesQuantity}} />
                ))}
            </div>
        </div>
    )
}