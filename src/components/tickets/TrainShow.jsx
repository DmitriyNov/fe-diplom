export default function TrainShow (props) {

    const {selectShow} = props;

    return (
        <div className="trains__show">
            <span className="trains__show-active" onClick={selectShow}>5</span>
            <span onClick={selectShow}>10</span>
            <span onClick={selectShow}>15</span>
        </div>
    )
}