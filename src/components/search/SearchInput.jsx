export default function SearchInput (props) {

    const {inputs} = props;

    return (
        <div className="search__input-container">
            <input className="search__input" placeholder={inputs.text} />
            <div className="search__icon-container">
                <img className="search__icon" src={inputs.icon}/>
            </div>
        </div>
    )
}