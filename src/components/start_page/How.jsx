import Button from "../ui/Button";
import Advantage from "./Advantage";

export default function How () {
    
    const button = {
        size: "button-large",
        decor: "button-simple",
        text: "Узнать больше",
        onClick: () => {alert("Что должна делать этак кнопка?")},
    };
    const content = [
        {
            icon: "./icons/Website.svg",
            text: "Удобный заказ на сайте",
        },
        {
            icon: "./icons/Office.svg",
            text: "Нет необходимости ехать в офис",
        },
        {
            icon: "./icons/World.svg",
            text: "Огромный выбор направлений",
        },
    ];

    return (
        <div id="how" className="how">
            <div className="how__header">
                <span className="how__title">
                    КАК ЭТО РАБОТАЕТ
                </span>
                <Button props={button}/>
            </div>
            <div className="how__advantages">
                {content.map((item, i) => (
                    <Advantage key={i} props={item} />
                ))}
            </div>
        </div>
    )
}