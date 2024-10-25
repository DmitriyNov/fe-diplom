import { useState } from "react"

export default function TrainSort () {

    const [sorting, setSorting] = useState("времени");
    const [visibility, setVisibility] = useState(false);
    const [timeHide, setTimeHide] = useState(null);

    function show () {
        setVisibility(true);
        setTimeHide(setTimeout(() => {
            setTimeHide(null);
            setVisibility(false);
        }, 10 * 1000));
    };

    function sort (event) {
        clearTimeout(timeHide);
        setTimeHide(null);
        setVisibility(false);
        setSorting(event.target.textContent);
    };

    function blur () {
        console.log("blur");
        clearTimeout(timeHide);
        setTimeHide(null);
        setVisibility(false);
    } //Не работает(
    
    return (
        <div className="trains__sort">
            <span onClick={show}>{sorting}</span>
            {!visibility || 
                <div className="trains__sort_item-container" onBlur={blur} tabIndex="0" autoFocus>
                    <div className="trains__sort_item" onClick={sort}>времени</div>
                    <div className="trains__sort_item" onClick={sort}>стоимости</div>
                    <div className="trains__sort_item" onClick={sort}>длительности</div>
                </div>}
        </div>
    )
}