export default function Markers (props) {

    const {markers, slider} = props;

    return (
        <div className="markers">
            {markers.map((item, i) => (
                <div key={i} className={"marker " + item}></div>
            ))}
        </div>
    )
}