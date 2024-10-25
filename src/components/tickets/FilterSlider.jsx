import { ConfigProvider, Slider } from "antd";
import { useState } from "react";

export default function FilterSlider ( {props} ) {

    const { value, range, options, onSliderChange } = props;

    const [ sliderValue, setValue] = useState(value);
    
    const handleChange = (value) => {
        setValue(value);
        onSliderChange();
    };

    return (
        <div className="filter__slider">
            {!options || <div className="slider__options-container">
                <span>от</span>
                <span>до</span>
            </div>}
            <ConfigProvider
            theme={{
                components: {
                    Slider: {
                        handleColor: "#FFFFFF",
                        handleActiveColor: "#FFA800",
                        handleSize: 18,
                        handleSizeHover: 18,
                        railSize: 10,
                        railBg: "rgba(0, 0, 0, 0)",
                        railHoverBg: "rgba(0, 0, 0, 0)",
                        trackBg: "#FFA800",
                        trackHoverBg: "#FFA800",
                        colorText: "#E5E5E5",
                        fontSize: 16,
                    }
                },
            }}>
                <Slider 
                    value={sliderValue}
                    range
                    max={range[1]}
                    min={range[0]}
                    tooltip={
                        {
                            autoAdjustOverflow: false,
                            open: true, 
                            placement: "bottom",
                            color: "rgba(0, 0, 0, 0)",
                            arrow: false,
                            formatter: value => (range[1] === 24) ? <span>{value + ":00"}</span> : <span>{value}</span>
                        }
                    }
                    defaultValue={[range[0], range[1]]}
                    onChange={handleChange}
                />    
            </ConfigProvider>
        </div>
    )
}