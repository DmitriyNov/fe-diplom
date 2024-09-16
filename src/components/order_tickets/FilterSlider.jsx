import { Slider } from "@mui/material";
import { useState } from "react";

export default function FilterSlider ( {props} ) {

    const { value, range, options, onSliderChange } = props;

    const [ sliderValue, setValue] = useState(value);
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
        onSliderChange();
    };
    
    const marks = [
        {
            value: range[0],
            label: range[0],
        },
        {
            value: range[1],
            label: range[1],
        },
    ]

    return (
        <div className="filter__slider">
            {!options || <div className="slider__options-container">
                <span>от</span>
                <span>до</span>
            </div>}
            <Slider 
                getAriaLabel={() => {}} //так и не понял, что сюда нужно писать
                value={sliderValue}
                max={range[1]}
                min={range[0]}
                marks={marks}
                onChange={handleChange}
                valueLabelDisplay="auto"
                color="warning"
            />
        </div>
    )
}