import Button from "../ui/Button";
import { Open, Close, Clear } from "../icons/Icons";
import { useState } from "react";

export default function Passenger ({props}) {
    
    const [passenger, setPassenger] = useState(props);

    const [visibility, setVisibility] = useState(true);

    function collapse () {
        if (visibility) {
            setVisibility(false);
        } else {
            setVisibility(true);
        }
    }

    function selectAge (event) {
        if (event.currentTarget.value === "Взрослый") {
            setPassenger({...passenger, is_adult: true});
        } else {
            setPassenger({...passenger, is_adult: false});
        }
    }

    function selectGender (event) {
        if (event.currentTarget.id === "male") {
            setPassenger({...passenger, gender: true});
        } else {
            setPassenger({...passenger, gender: false});
        }
    }

    function selectDocumentType (event) {
        if (event.currentTarget.value === "Паспорт РФ") {
            setPassenger({...passenger, document_type: "Паспорт РФ"});
        } else {
            setPassenger({...passenger, document_type: "Свидетельство о рождении"});
        }
    }

    const button = {
        size: "button-large",
        decor: "button-simple_black",
        text: "Следующий пассажир",
        onClick: () => {
            console.log("next");
        },
    };

    return (
        <div className="passenger-container">
            <div className={"passenger__title-container" + " " + ((visibility) ? "passenger__title-container-visibility" : "")}>
                <div className="passenger__title-collapse_text_container">
                    <div className="passenger__title-collapse" onClick={collapse}>
                        {visibility ? <Close /> : <Open />}
                    </div>
                    <span className="passenger__title">
                        Пассажир {passenger.id}
                    </span>
                </div>
                <div className="passenger__title-clear">
                    <Clear />
                </div>
            </div>
            {!visibility || 
            <div className="passenger__info">
                <form className="passenger__info_form">
                    <div className="passenger__info_personal_data">
                        <div>
                            <select className="passenger__info-select" onChange={selectAge}>
                                <option value={"Взрослый"} selected={passenger.is_adult}>
                                    Взрослый
                                </option>
                                <option value={"Детсикй"} selected={!passenger.is_adult}>
                                    Детсикй
                                </option>
                            </select>
                        </div>
                        <div>
                            <label className="passenger__info-label">
                                Фамилия
                                <input className="passenger__info-input" type="text" />
                            </label>
                            <label className="passenger__info-label">
                                Имя
                                <input className="passenger__info-input" type="text" />
                            </label>
                            <label className="passenger__info-label">
                                Отчество
                                <input className="passenger__info-input" type="text" />
                            </label>
                        </div>
                        <div>
                            <label className="passenger__info-label">
                                Пол
                                <input className="passenger__info-input_gender" type="radio" />
                                <div className="passenger__info-input_gender_container">
                                    <div id="male" className={"passenger__info-input_gender_button" + " " + (passenger.gender ? "passenger__info-input_gender-selected" : "")} onClick={selectGender}>
                                        М
                                    </div>
                                    <div id="female" className={"passenger__info-input_gender_button" + " " + (!passenger.gender ? "passenger__info-input_gender-selected" : "")} onClick={selectGender}>
                                        Ж
                                    </div>
                                </div>
                            </label>
                            <label className="passenger__info-label">
                                Дата рождения
                                <input className="passenger__info-input" type="text" />
                            </label>
                        </div>
                        <div className="passenger__info-limited">
                            <input className="passenger__info-input_limited" type="checkbox" />
                            <span>
                                ограниченная подвижность
                            </span>
                        </div>
                    </div>
                    <div className="passenger__info_documents">
                        <label className="passenger__info-label">
                            Тип документа
                            <select className={"passenger__info-select" + " " + (passenger.document_type === "Свидетельство о рождении" ? "passenger__info-select_large" : "")} onChange={selectDocumentType}>
                                <option value={"Паспорт РФ"} selected={passenger.document_type === "Паспорт РФ"}>
                                    Паспорт РФ
                                </option>
                                <option value={"Свидетельство о рождении"} selected={passenger.document_type === "Свидетельство о рождении"}>
                                    Свидетельство о рождении
                                </option>
                            </select>
                        </label>
                        {passenger.document_type === "Паспорт РФ" && 
                        <label className="passenger__info-label">
                            Серия
                            <input className="passenger__info-input" type="text" />
                        </label>}
                        <label className="passenger__info-label">
                            Номер
                            <input className="passenger__info-input" type="text" />
                        </label>
                    </div>
                </form>
                <div className="passenger__info_footer">
                    <Button props={button} />
                </div>
            </div>}
        </div>
    )
}