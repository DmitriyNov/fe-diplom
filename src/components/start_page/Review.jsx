export default function Review ({props}) {

    const {image, name, text} = props;

    return (
        <div className="review">
            <div className="review__icon-container">
                <img className="review__icon" src={image}/>
            </div>
            <div className="review__content">
                <span className="review__content-title">
                    {name}
                </span>
                <span className="review__content-text">
                    <span className="quotes quotes-top">
                        “
                    </span>
                    {text}
                    <span className="quotes">
                        ”
                    </span>
                </span>
            </div>
        </div>
    )
}