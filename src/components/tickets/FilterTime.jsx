import FilterSlider from "./FilterSlider";
import { Collapse, Disclose } from "../icons/Icons";
import { useState } from "react";

export default function FilterTime ({props}) {

    const {title, icon, sliders}  = props;

    const [visibility, setVisibility] = useState(false);

    function collapse () {
        if (visibility) {
            setVisibility(false);
        } else {
            setVisibility(true);
        }
    }

    return (
        <div className="filter__time-container">
            <div className="filter__time_title-container">
                <div className="filter__icon_title-container">
                    <div className="filter__time-icon">
                        {icon}
                    </div>
                    <span className="filter__time-title">
                        {title}
                    </span>
                </div>
                <div className="filter__time-collapse" onClick={collapse} >
                    {visibility ? <Collapse /> : <Disclose />}
                </div>
            </div>
            {!visibility || sliders.map((index, i) => (
                <div key={i} className="filter__time_slider-container">
                    <span className="filter__time_slider-label">
                        {index.label}
                    </span>
                    <FilterSlider props={index}/>
                </div>
            ))}
        </div>
    )
}