export default function Button ({props}) {

    const {size, decor, text, onClick} = props;

    return (
        <button className={size + " " + decor + " button"} onClick={onClick}>
            {text}
        </button>
    )
}