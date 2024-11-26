import { useEffect, useState } from "react";

export default function Calendar(props) {

    const {setValue} = props;

    const [date, setDate] = useState(new Date());
    const [tableMatrix, setTableMatrix] = useState([]);

    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const month = months[date.getMonth()];

    function setMonth () {
        const currentDate = new Date();
        const currentTableMatrix = [];
        const currentDay = currentDate.getDate();
        const currentMonth = currentDate.getMonth();
        const currentMonthDays = Math.round((new Date(date.getFullYear(), (date.getMonth() + 1)) - new Date(date.getFullYear(), date.getMonth())) / 1000 / 3600 / 24);
        const previousMonthDays = Math.round((new Date(date.getFullYear(), date.getMonth()) - new Date(date.getFullYear(), (date.getMonth() - 1))) / 1000 / 3600 / 24);
        const firstweekDays = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        let counter = currentMonthDays;
        let nextMonthCounter = 1;
        for (let i = 1; i < 7; i++) {
            const weekArray = [];
            for (let j = 1; j < 8; j++) {
                if (i === 1) {
                    if (j < firstweekDays) {
                        weekArray.push({date: previousMonthDays - (firstweekDays - j - 1), class: "datepicker-other_month"});
                    } else if (j === currentDay && currentMonth === date.getMonth()) {
                        weekArray.push({date: currentMonthDays - (counter - 1), class: "datepicker-today"});
                        counter-=1;
                    } else {
                        weekArray.push({date: currentMonthDays - (counter - 1), class: ""});
                        counter-=1;
                    }
                } else if (i > 4) {
                    if (counter <= 0) {
                        weekArray.push({date: nextMonthCounter, class: "datepicker-other_month"});
                        nextMonthCounter+=1;
                    } else if (currentMonthDays - (counter - 1) === currentDay && currentMonth === date.getMonth()) {
                        weekArray.push({date: currentMonthDays - (counter - 1), class: "datepicker_today"});
                        counter-=1;
                    } else {
                        weekArray.push({date: currentMonthDays - (counter - 1), class: ""});
                        counter-=1;
                    }
                } else {
                    if (currentMonthDays - (counter - 1) === currentDay && currentMonth === date.getMonth()) {
                        weekArray.push({date: currentMonthDays - (counter - 1), class: "datepicker_today"});
                        counter-=1;
                    } else {
                        weekArray.push({date: currentMonthDays - (counter - 1), class: ""});
                        counter-=1;
                    }
                }
            }
            currentTableMatrix.push(weekArray);
        }
        setTableMatrix(currentTableMatrix);
    }

    useEffect(() => {
        setMonth();
    }, [date]);

    function changeMonthPre () {
        let currentMonth;
        currentMonth = ((date.getMonth() - 1) > 0) ? (date.getMonth() - 1) : 11;
        const currentDate = new Date();
        currentDate.setMonth(currentMonth);
        setDate(currentDate);
        console.log(currentDate.toDateString())
    }

    function changeMonthNext () {
        let currentMonth;
        currentMonth = ((date.getMonth() + 1) < 12) ? (date.getMonth() + 1) : 0;
        const currentDate = new Date();
        currentDate.setMonth(currentMonth);
        setDate(currentDate);
        console.log(currentDate.toDateString())
    }

    function changeValue (event) {
        if (event.currentTarget.className === "datepicker-other_month") {
            return;
        }
        const currentDay = (event.currentTarget.innerText.length < 2) ? ("0" + event.currentTarget.innerText) : event.currentTarget.innerText;
        const currentMonth = (((date.getMonth() + 1) + "").length < 2) ? ("0" + (date.getMonth() + 1)) : (date.getMonth() + 1);
        const currentYear = (date.getFullYear() + "").slice(2);
        const currentValue = currentDay + "/" + currentMonth + "/" + currentYear;
        setValue(currentValue);
    }

    return (
        <div className="datepicker">
            <div className="datepicker-header">
                <div className="datepicker-title">
                    <div onClick={changeMonthPre}>
                        ⮜
                    </div>
                    <span className="datepicker-month">{month}</span>
                    <div onClick={changeMonthNext}>
                        ⮞
                    </div>
                </div>
            </div>
            <table className="datepicker-calendar">
                <tbody>
                    {tableMatrix.map((i, n) => (
                        <tr key={n}>
                            {i.map((j, m) => (
                                <td key={m} className={j.class} onClick={changeValue}>{j.date}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}