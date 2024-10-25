import { Calendar } from "../icons/Icons";

export default function FilterInput () {

    return (
        <div className="filter__input-container">
            <input className="filter__input" />
            <div className="filter__input-icon">
                <Calendar />
            </div>
        </div>
    )
}