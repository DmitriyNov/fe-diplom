import Search from "../search/Search";
import Step from "./Step";

export default function StepsScreen ({props}) {

    const {steps, startSearch, searchData, setSearchData} = props;

    const styles = {
        top: {paddingTop: "28px"},
        bottom: {marginTop: "0"},
    };

    return (
        <div className="steps_screen">
            <div className="steps_screen__content">
                <div className="steps_screen__widget-container">
                    <Search props={{styles: styles, startSearch: startSearch, searchData: searchData, setSearchData: setSearchData}}/>
                </div>
                <div className="steps-container">
                    {steps.map((item, i) => (
                        <Step key={i} props={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}