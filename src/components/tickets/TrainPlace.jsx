import { Ruble } from "../icons/Icons";

export default function TrainPlace ({props}) {

    const {type, quantity, price} = props;

    return (
        <div className="train__place-container">
            <span className="train__place-type">{type}</span>
            <span className="train__place-quantity">{quantity}</span>
            <div className="train__place_price-container">
                <span>от</span>
                <span className="train__place_price">{price}</span>
                <Ruble />
            </div>
        </div>
    )
}