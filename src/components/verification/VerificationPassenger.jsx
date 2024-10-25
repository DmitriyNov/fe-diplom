import { Person } from "../icons/Icons";

export default function VerificationPassenger ({props}) {

    const {id, is_adult, first_name, last_name, patronymic, gender, birthday, document_type, document_data} = props;

    return (
        <div className="verification_passenger-container">
            <div className="verification_passenger__type">
                <Person />
                <span>
                    {is_adult ? "Взрослый" : "Детский"}
                </span>
            </div>
            <div className="verification_passenger__info">
                <span className="verification_passenger__info-name">
                    {last_name + " " + first_name + " " + patronymic}
                </span>
                <span>
                    {"Пол " + ((gender) ? "мужской" : "женский")}
                </span>
                <span>
                    {"Дата рождения " + birthday}
                </span>
                <span>
                    {document_type + " " + document_data}
                </span>
            </div>
        </div>
    )
}