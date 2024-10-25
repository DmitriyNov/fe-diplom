import Details from "../order/Details";
import Passenger from "./Passenger";
import Button from "../ui/Button";
import { useOutletContext } from "react-router-dom";

export default function Passengers () {
    
    const [selectPlaces, backToTrains, selectPassengers, selectPayment] = useOutletContext();

    const passengers = [
        {
            id: 1,
            is_adult: true,
            first_name: "",
            last_name: "",
            patronymic: "",
            gender: true,
            birthday: "",
            document_type: "Паспорт РФ",
            document_data: "",
        },
        {
            id: 2,
            is_adult: true,
            first_name: "",
            last_name: "",
            patronymic: "",
            gender: true,
            birthday: "",
            document_type: "Паспорт РФ",
            document_data: "",
        },
        {
            id: 3,
            is_adult: false,
            first_name: "",
            last_name: "",
            patronymic: "",
            gender: true,
            birthday: "",
            document_type: "Свидетельство о рождении",
            document_data: "",
        },
    ];

    const button = {
        size: "button-medium",
        decor: "button-orange_white",
        text: "ДАЛЕЕ",
        onClick: () => {
            selectPayment();
        },
    };

    return (
        <div className="passengers">
            <div className="passengers__aside_widget-container">
                <Details />
            </div>
            <div className="passengers__content-container">
                {passengers.map((item, i) => (
                    <Passenger key={i} props={item}/>
                ))}
                <div className="passengers-button">
                    <Button props={button} />
                </div>
            </div>
        </div>
    )
}