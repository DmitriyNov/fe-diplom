import PassengerInput from "./PassengerInput";
import Button from "../ui/Button";
import { Open, Close, Clear, Invalid, Valid } from "../icons/Icons";
import { useState } from "react";

export default function Passenger ({props}) {

    const {id, is_adult, first_name, last_name, patronymic, gender, birthday, document_type, document_data, passengers, setPassengers} = props;

    const [visibility, setVisibility] = useState(true);
    const [status, setStatus] = useState(null);
    const [faultText, setFaultText] = useState("");
    const [documentSeries, setDocumentSeries] = useState("");
    const [documentNumber, setDocumentNumber] = useState("");

    function collapse () {
        if (visibility) {
            setVisibility(false);
        } else {
            setVisibility(true);
        }
    };

    function selectAge (event) {
        if (event.currentTarget.value === "Взрослый") {
            passengers.forEach((item) => {
                if (item.id === id) {
                    item.is_adult = true;
                }
            });
        } else {
            passengers.forEach((item) => {
                if (item.id === id) {
                    item.is_adult = false;
                }
            });
        }
        setPassengers([...passengers]);
    };

    function selectGender (event) {
        if (event.currentTarget.id === "male") {
            passengers.forEach((item) => {
                if (item.id === id) {
                    item.gender = true;
                }
            });
        } else if (event.currentTarget.id === "female") {
            passengers.forEach((item) => {
                if (item.id === id) {
                    item.gender = false;
                }
            });
        }
        setPassengers([...passengers]);
    };

    function selectDocumentType (event) {
        if (event.currentTarget.value === "Паспорт РФ") {
            passengers.forEach((item) => {
                if (item.id === id) {
                    item.document_type = "Паспорт РФ";
                }
            });
        } else {
            passengers.forEach((item) => {
                if (item.id === id) {
                    item.document_type = "Свидетельство о рождении";
                }
            });
        }
        setPassengers([...passengers]);
    };

    function selectValue (event) {
        const value = event.currentTarget.value;
        passengers.forEach((item) => {
            if (item.id === id) {
                if (event.currentTarget.id === "document_data_series") {
                    setDocumentSeries(value);
                    if (documentNumber !== "") {
                        item.document_data = value + " " + documentNumber;
                    }
                } else if (event.currentTarget.id === "document_data_number") {
                    setDocumentNumber(value);
                    if (documentSeries !== "") {
                        item.document_data = documentSeries + " " + value;
                    }
                } else {
                    item[event.currentTarget.id] = value;
                }
            }
        });
        setPassengers([...passengers]);
    };

    function validateInput (event) {
        const value = event.currentTarget.value;
        if (value.length === 0) {
            selectValue(event);
        }
        if (event.currentTarget.id === "birthday") {
            const day = Number(value.slice(0, 2));
            const month = Number(value.slice(3, 5));
            const year = Number(value.slice(6));
            const validatedDate = month + "-" + day + "-" + year;
            const date = new Date(validatedDate);
            if (isNaN(date.getTime())) {
                setStatus("invalid");
                setFaultText("Пожалуйста, введите корректную дату рождения.");
                return;
            } else {
                selectValue(event);
                setStatus("");
                setFaultText("");
            }
        } else if (event.currentTarget.id === "document_data_series") {
            const filter = new RegExp("^[0-9]{4}$");
            if (!filter.test(value)) {
                setStatus("invalid");
                setFaultText("Пожалуйста, введите корректную cерию паспорта РФ.");
                return;
            } else {
                selectValue(event);
                setStatus("");
                setFaultText("");
            }
        } else if (document_type === "Паспорт РФ" && event.currentTarget.id === "document_data_number") {
            const filter = new RegExp("^[0-9]{6}$");
            if (!filter.test(value)) {
                setStatus("invalid");
                setFaultText("Пожалуйста, введите корректный номер паспорта РФ.");
                return;
            } else {
                selectValue(event);
                setStatus("");
                setFaultText("");
            }
        } else if (document_type === "Свидетельство о рождении" && event.currentTarget.id === "document_data_number") {
            const filterSeries = new RegExp("^[IVXLCDM]{1,5}[-|s][А-ЯЁ]{2}$");
            const filterNumber = new RegExp("^[0-9]{6}$");
            const series = value.replace(value.slice(-7), "");
            const number = value.slice(-6);
            if (!filterSeries.test(series) || !filterNumber.test(number)) {
                setStatus("invalid");
                setFaultText("Пожалуйста, введите корректный номер свидетельства о рождении.");
                return;
            } else {
                selectValue(event);
                setStatus("");
                setFaultText("");
            }
        } else {
            if (value.length > 1) {
                selectValue(event);
                setStatus("");
                setFaultText("");
            }
        }
    }

    function validateForm () {
        if (!first_name || !last_name || !patronymic || !birthday || !document_data) {
            setStatus("invalid");
            setFaultText(`Пожалуйста, введите ${(!last_name ? "фамилию." : !first_name ? "имя." : !patronymic ? "отчество." : !birthday ? "дату рождения." : "номер документа.")}`);
            return;
        }
        if (document_type === "Паспорт РФ" && !document_data.includes(" ")) {
            setStatus("invalid");
            setFaultText("Пожалуйста, введите серию документа.");
            return;
        }
        if (faultText.length === 0) {
            setStatus("valid");
        }
    }

    const button = {
        size: "button-large",
        decor: "button-simple_black",
        text: "Следующий пассажир",
        onClick: () => {
            validateForm();
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
                        Пассажир {id}
                    </span>
                </div>
                <div className="passenger__title-clear">
                    <Clear />
                </div>
            </div>
            {!visibility || 
            <div className="passenger__info">
                <div className="passenger__info_form">
                    <div className="passenger__info_personal_data">
                        <div>
                            <select className="passenger__info-select" onChange={selectAge}>
                                <option value={"Взрослый"} selected={is_adult}>
                                    Взрослый
                                </option>
                                <option value={"Детсикй"} selected={!is_adult}>
                                    Детсикй
                                </option>
                            </select>
                        </div>
                        <div>
                            <label className="passenger__info-label">
                                Фамилия
                                <PassengerInput id="last_name" placeholder="" lastValue={last_name} onBlur={validateInput}/>
                            </label>
                            <label className="passenger__info-label">
                                Имя
                                <PassengerInput id="first_name" placeholder="" lastValue={first_name} onBlur={validateInput}/>
                            </label>
                            <label className="passenger__info-label">
                                Отчество
                                <PassengerInput id="patronymic" placeholder="" lastValue={patronymic} onBlur={validateInput}/>
                            </label>
                        </div>
                        <div>
                            <label className="passenger__info-label">
                                Пол
                                <input className="passenger__info-input_gender" type="radio" />
                                <div className="passenger__info-input_gender_container">
                                    <div id="male" className={"passenger__info-input_gender_button" + " " + (gender ? "passenger__info-input_gender-selected" : "")} onClick={selectGender}>
                                        М
                                    </div>
                                    <div id="female" className={"passenger__info-input_gender_button" + " " + (!gender ? "passenger__info-input_gender-selected" : "")} onClick={selectGender}>
                                        Ж
                                    </div>
                                </div>
                            </label>
                            <label className="passenger__info-label">
                                Дата рождения
                                <PassengerInput id="birthday" placeholder="ДД.ММ.ГГГГ" lastValue={birthday} onBlur={validateInput}/>
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
                            <select className={"passenger__info-select" + " " + (document_type === "Свидетельство о рождении" ? "passenger__info-select_large" : "")} onChange={selectDocumentType}>
                                <option value={"Паспорт РФ"} selected={document_type === "Паспорт РФ"}>
                                    Паспорт РФ
                                </option>
                                <option value={"Свидетельство о рождении"} selected={document_type === "Свидетельство о рождении"}>
                                    Свидетельство о рождении
                                </option>
                            </select>
                        </label>
                        {document_type === "Паспорт РФ" && 
                        <label className="passenger__info-label">
                            Серия
                            <PassengerInput id="document_data_series" placeholder="_ _ _ _" lastValue={documentSeries} onBlur={validateInput}/>
                        </label>}
                        <label className="passenger__info-label">
                            Номер
                            <PassengerInput id="document_data_number" placeholder="_ _ _ _ _ _" lastValue={documentNumber} onBlur={validateInput}/>
                        </label>
                    </div>
                </div>
                <div className={"passenger__info_footer " + ((status === "valid") ? "passenger__info_footer-valid" : (status === "invalid") ? "passenger__info_footer-invalid" : "")} >
                    {((status === "valid") ? 
                        <>
                            <div className="passenger__info_footer-wraper">
                                <Valid />
                                Готово
                            </div>
                            <Button props={button} />
                        </>
                    : (status === "invalid") ? 
                        <>  
                            <div className="passenger__info_footer-wraper">
                                <Invalid />
                                {faultText}
                            </div>
                        </> 
                    : <Button props={button} />)}
                </div>
            </div>}
        </div>
    )
}