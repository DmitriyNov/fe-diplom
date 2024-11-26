import FilterInput from "./FilterInput";
import FilterOption from "./FilterOption";
import FilterSlider from "./FilterSlider";
import FilterTime from "./FilterTime";
import { Compartment, Reserved, Seating, Lux, WiFi, Express, There, Back } from "../icons/Icons";
import { getRoutes } from "../../api/appAPI";
import { useState } from "react";

export default function Filter ({props}) {

    const {searchData, setSearchData, startSearch} = props;

    const [currentTimeoutId, setCurrentTimeoutId] = useState(0);
    const idFrom = searchData.fromCityId;
    const idTo = searchData.toCityId;
    const [dateFrom, setDateFrom] = useState(searchData.fromDate);
    const [dateTo, setDateTo] = useState(searchData.toDate);
    const [lux, setLux] = useState(true);
    const [compartment, setCompartment] = useState(true);
    const [reserved, setReserved] = useState(true);
    const [seating, setSeating] = useState(true);
    const [wifi, setWifi] = useState(false);
    const [express, setExpress] = useState(false);

    const currrentOption = {
        from_city_id: idFrom,
        to_city_id: idTo,
        date_start: dateFrom,
        date_end: dateTo,
        have_first_class: lux,
        have_second_class: compartment,
        have_third_class: reserved,
        have_fourth_class: seating,
        have_wifi: wifi,
        have_express: express,
    }

    const option = {};

    for (let key in currrentOption) {
        if (currrentOption[key] !== undefined) {
            option[key] = currrentOption[key];
        }
    }

    function onChangeFilter () {
        console.log(currentTimeoutId);
        if (currentTimeoutId !== 0) {
            clearTimeout(currentTimeoutId);
            setCurrentTimeoutId(0);
        }
        const timeout = setTimeout(() => {
            startSearch(option);
            console.log("new search");
        }, 5000);
        setCurrentTimeoutId(timeout);
    }





    const options = [
        {
            icon: <Compartment />,
            text: "Купе ",
            status: true,
            onChangeFilter: onChangeFilter,
        },
        {
            icon: <Reserved />,
            text: "Плацкарт",
            status: true,
            onChangeFilter: onChangeFilter,
        },
        {
            icon: <Seating />,
            text: "Сидячий",
            status: true,
            onChangeFilter: onChangeFilter,
        },
        {
            icon: <Lux />,
            text: "Люкс",
            status: true,
            onChangeFilter: onChangeFilter,
        },
        {
            icon: <WiFi />,
            text: "Wi-Fi",
            status: false,
            onChangeFilter: onChangeFilter,
        },
        {
            icon: <Express />,
            text: "Экспресс",
            status: false,
            onChangeFilter: onChangeFilter,
        },
    ];

    const price = {
        value: [500, 5000],
        range: [500, 5000],
        options: true,
        onSliderChange: () => {
            setTimeout(onChangeFilter, 1000)
        }
    }

    const time = [
        {
            title: "Туда",
            icon: <There />,
            sliders : [
                {
                    value: [0, 11],
                    range: [0, 24],
                    options: false,
                    onSliderChange: () => {
                        console.log("slider-time")
                    },
                    label: "Время отбытия",
                },
                {
                    value: [5, 11],
                    range: [0, 24],
                    options: false,
                    onSliderChange: () => {
                        console.log("slider-time")
                    },
                    label: "Время прибытия",
                },
            ],
        },
        {
            title: "Обратно",
            icon: <Back />,
            sliders :  
            [
                {
                    value: [0, 11],
                    range: [0, 24],
                    options: false,
                    onSliderChange: () => {
                        console.log("slider-time")
                    },
                    label: "Время отбытия",
                },
                {
                    value: [5, 11],
                    range: [0, 24],
                    options: false,
                    onSliderChange: () => {
                        console.log("slider-time")
                    },
                    label: "Время прибытия",
                },
            ],
        }
    ]

    return (
        <div className="filter">
            <div className="filter__form">
                <div className="filter__inputs-container">
                    <div className="filter__input_label-container">
                        <span className="filter__input-label">Дата поездки</span>
                        <FilterInput props={{type: "from", setDate: setDateFrom, date: dateFrom, setSearchData: setSearchData}}/>
                    </div>
                    <div className="filter__input_label-container">
                        <span className="filter__input-label">Дата возвращения</span>
                        <FilterInput props={{type: "to", setDate: setDateTo, date: dateTo, setSearchData: setSearchData}}/>
                    </div>
                </div>
                <div className="filter__options-container">
                    {options.map((item, i) => (
                        <FilterOption key={i} props={item}/>
                    ))}
                </div>
                <div className="filter__price-container">
                    <span className="filter__price-label">
                        Стоимость
                    </span>
                    <FilterSlider props={price}/>
                </div>
                <div className="filter__times-container">
                    {time.map((item, i) => (
                        <FilterTime key={i} props={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}