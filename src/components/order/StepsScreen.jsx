import Search from "../search/Search";
import Step from "./Step";

export default function StepsScreen (props) {

    const {steps, startSearch} = props;

    const styles = {
        top: {paddingTop: "28px"},
        bottom: {marginTop: "0"},
    };

    return (
        <div className="steps_screen">
            <div className="steps_screen__content">
                <div className="steps_screen__widget-container">
                    <Search styles={styles} startSearch={startSearch} />
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