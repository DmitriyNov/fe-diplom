export default function PlacesTicketType ({props}) {

    const {type, selected, left, text, selectedType, selectType} = props;

    return (
        <div id={type} className={"places__tickets_type-container" + " " + ((type === selectedType) ? "places__tickets_type-active" : "")} onClick={selectType}>
            <div className="places__tickets_type">
                {type + " — " + selected}
            </div>
            {!text || 
            <span className="places__tickets_type-text">
                {text.first + " " + left + " " + text.second}
            </span>}
        </div>
    )
}