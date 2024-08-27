import TrainSort from "./TrainSort";
import TrainShow from "./TrainShow";
import Train from "./Train";

export default function Trains () {

    return (
        <div className="trains-container">
            <div className="trains__sorting-container">
                <div className="trains__found-container">
                    <span>найдено </span><span className="trains__found">{20}</span>
                </div>
                <div className="trains__sort_show-container">
                    <div className="trains__sort-container">
                        <span>сортировать по: </span>
                        <TrainSort />
                    </div>
                    <div className="trains__show-container">
                        <span>показывать по: </span>
                        <TrainShow />
                    </div>
                </div>
            </div>
        </div>
    )
}