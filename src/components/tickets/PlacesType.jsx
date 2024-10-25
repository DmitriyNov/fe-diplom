import { Compartment, Reserved, Seating, Lux } from "../icons/Icons";

export default function PlacesType ({props}) {

    const {type, activeType, selectActiveType} = props;

    return (
        <div id={type} className={"places__tickets_carriages-type" + " " + ((type === activeType) ? "places__tickets_carriages_type-active" : "")} onClick={selectActiveType}>
            <div className="places__tickets_carriages_type-icon">
                {type === "Сидячий" ? <Seating /> : type === "Плацкарт" ? <Reserved /> : type === "Купе" ? <Compartment /> : <Lux />}
            </div>
            <span className="places__tickets_carriages_type-label">
                {type}
            </span>
        </div>
    )
}