import FilterInput from "./FilterInput";
import FilterOption from "./FilterOption";
import FilterSlider from "./FilterSlider";
import FilterTime from "./FilterTime";
import { Compartment, Reserved, Seating, Lux, WiFi, Express, There, Back } from "../icons/Icons";

export default function Filter () {

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
        value: [2000, 10000],
        range: [2000, 10000],
        options: true,
        onSliderChange: () => {
            console.log("slider-price")
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

    function onChangeFilter (event) {
        event.preventDefault();
    }

    return (
        <div className="filter">
            <form className="filter__form">
                <div className="filter__inputs-container">
                    <div className="filter__input_label-container">
                        <span className="filter__input-label">Дата поездки</span>
                        <FilterInput />
                    </div>
                    <div className="filter__input_label-container">
                        <span className="filter__input-label">Дата возвращения</span>
                        <FilterInput />
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
            </form>
        </div>
    )
}