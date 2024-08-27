import { useState } from "react";
import Review from "./Review";
import Markers from "./Markers";

export default function ReviewsSlider (props) {

    const {list} = props;
    const quantity = list.length - 1;
    const markers = [];
    for (let i = 0; i < quantity; i++) {
        markers.push("");
    }
    markers[0] = "marker-active";
    const [items, setItems] = useState(list.slice(0, 2));
    function slider () {
        //Слайдер реализую позднее
    }

    return (
        <div className="reviews__slider">
            <div className="reviews__slider-body">
                {items.map((item, i) => (
                    <Review key={i} props={item}/>
                ))}
            </div>
            <Markers markers={markers} slider={slider}/>
        </div>
    )
}