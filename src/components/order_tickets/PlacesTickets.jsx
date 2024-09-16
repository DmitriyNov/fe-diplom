import { useState } from "react";
import PlacesTicketType from "./PlacesTicketType";
import PlacesType from "./PlacesType";
import PlacesCarriage from "./PlacesCarriage";

export default function PlacesTickets ({props}) {

    const {places, options} = props;
    
    const [selectedType, setSelectedType] = useState("Взрослых");
    const [activeType , setActiveType] = useState("");
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
            selected: 0,
            text: adultText,
        },
        {
            type: "Детских",
            selected: 0,
            text: childrenText,
        },
        {
            type: "Детских «без места»",
            selected: 0,
            text: null,
        },
    ];

    function selectType (event) {
        setSelectedType(event.currentTarget.id);
    }

    function selectActiveType (event) {
        setActiveType(event.currentTarget.id);
    }

    return (
        <div className="places__tickets-container">
            <span className="places__tickets-title">
                Количество билетов
            </span>
            <div className="places__tickets-types">
                {types.map((item, i) => (
                    <PlacesTicketType key={i} props={{...item, left: left, selectedType: selectedType, selectType: selectType}} />
                ))}
            </div>
            <div className="places__tickets-carriages">
                <span className="places__tickets_carriages-title">
                    Тип вагона
                </span>
                <div className="places__tickets_carriages-types">
                    {places.map((item, i) => (
                        <PlacesType key={i} props={{type: item.type, activeType: activeType, selectActiveType: selectActiveType}}/>
                    ))}
                </div>
            </div>
            {places.map((item, i) => {
                        if (item.type === activeType) {
                            return (<PlacesCarriage key={i} props={{...item, options}} />)
                        }
                    })}
        </div>
    )
}