import { useState } from "react";
import { SliderArrowLeft, SliderArrowRight } from "../icons/Icons";

export default function TrainsSlider (props) {
    const {quantity, show} = props;
    const slidesQuantity = Math.ceil(quantity / show);
    const slides = [];
    for (let i = 0; i < slidesQuantity; i++) {
        slides.push(i + 1);
    }
    const [activeSlide, setActiveSlide] = useState(1);
    function selectActiveSlide (event) {
        const curentActiveSlide = event.target.innerText;
        setActiveSlide(curentActiveSlide);
        console.log(curentActiveSlide);
    }

    return (
        <div className="trains__slider">
            <div className="trains__slider-left">
                <SliderArrowLeft />
            </div>
            {slides.map((item) => (
                <div key={item} className={"trains__slider-item" + ((activeSlide === item) ? " trains__slider-item-active" : "")} onClick={selectActiveSlide}>
                    {item}
                </div>
            ))}
            <div className="trains__slider-right">
                <SliderArrowRight />
            </div>
        </div>
    )
}