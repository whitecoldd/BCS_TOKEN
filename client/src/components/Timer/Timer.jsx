import React, { useRef, componentDidMount, useEffect } from 'react'
import { CountdownTimer } from '../../helpers/TimerClass';
import "./timer.scss"

export default function Timer() {

    useEffect(() => {
        // 1. Получим элементы в которые нужно вывести оставшееся количество дней, часов, минут и секунд
        const elDays1 = document.querySelector('.timer-1 .timer__days');
        const elHours1 = document.querySelector('.timer-1 .timer__hours');
        const elMinutes1 = document.querySelector('.timer-1 .timer__minutes');
        const elSeconds1 = document.querySelector('.timer-1 .timer__seconds');

        // 2. Установим время, например, на одну минуту от текущей даты
        const deadline1 = new Date(new Date().getFullYear(), new Date().getMonth() + 12, 31);

        // 3. Создадим новый объект, используя new CountdownTimer()
        new CountdownTimer(deadline1, (timer) => {
            elDays1.textContent = timer.days;
            elHours1.textContent = timer.hours;
            elMinutes1.textContent = timer.minutes;
            elSeconds1.textContent = timer.seconds;
            elDays1.dataset.title = timer.daysTitle;
            elHours1.dataset.title = timer.hoursTitle;
            elMinutes1.dataset.title = timer.minutesTitle;
            elSeconds1.dataset.title = timer.secondsTitle;
        }, () => {
            document.querySelector('.timer-1 .timer__result').textContent = 'Таймер завершился!';
        });
    })

    return (
        <div className="ClaimBcs_subtitle timer timer-1">
            <div className="timer__items">
                <div className="timer__item timer__days">00</div>&nbsp;DAYS and&nbsp;
                <div className="timer__item timer__hours">00</div>:
                <div className="timer__item timer__minutes">00</div>:
                <div className="timer__item timer__seconds">00</div>
            </div>
            <div className="timer__result"></div>
        </div>
    )
}