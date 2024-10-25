import { useState } from "react";
import { Passenger, Collapse, Disclose, Ruble } from "../icons/Icons";

export default function DetailsPassengers ({props}) {
    
    const passengers = props;
    
    const [visibility, setVisibility] = useState(true);

    function collapse () {
        if (visibility) {
            setVisibility(false);
        } else {
            setVisibility(true);
        }
    }

    return (
        <div className="details__passengers">
            <div className="details__passengers_title-container">
                <div className="details__passengers_icon_title-container">
                    <div className="details__passengers-icon">
                        <Passenger/>
                    </div>
                    <span className="details__passengers-title">
                        Пассажиры
                    </span>
                </div>
                <div className="details__passengers-collapse" onClick={collapse} >
                    {visibility ? <Collapse /> : <Disclose />}
                </div>
            </div>
            {!visibility || 
            <div className="details__passengers-info">
                {passengers.map((item, i) => (
                    <div key={i} className="details__passengers-info_container">
                        <span>
                            {item.quantity + " " + item.type}
                        </span>
                        <div>
                            <span className="details__passengers-info-price">
                                {item.price}
                            </span>
                            <Ruble/>
                        </div>
                    </div>
                ))}
            </div>
            }
        </div>
    )
}