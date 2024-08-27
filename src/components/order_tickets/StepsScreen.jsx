import Search from "../search/Search";
import Step from "./Step";

export default function StepsScreen () {
    
    const styles = {
        top: {paddingTop: "28px"},
        bottom: {marginTop: "0"},
    };
    const steps = [
        {
            number: 1,
            text: "Билеты",
            status: "step-active",
            decore: "first-step",
        },
        {
            number: 2,
            text: "Пассажиры",
            status: "",
            decore: true,
        },
        {
            number: 3,
            text: "Оплата",
            status: "",
            decore: true,
        },
        {
            number: 4,
            text: "Проверка",
            status: "",
            decore: "finish-step",
        },
    ];


    return (
        <div className="steps_screen">
            <div className="steps_screen__content">
                <div className="steps_screen__widget-container">
                    <Search styles={styles}/>
                </div>
                <div className="steps-container">
                    {steps.map((item) => (
                        <Step key={item.number} props={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}