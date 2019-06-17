import React, { useEffect, useState } from 'react';

const endDate = new Date();
const numberOfDaysToAdd = 7;
endDate.setDate(endDate.getDate() + numberOfDaysToAdd); 

export default function Counter() {
    const [ time, setTime ] = useState({});
      
    useEffect(() => {
        const countdown = endDate => { 
            const t = Date.parse(endDate) - Date.parse(new Date());
            const seconds = Math.floor( (t/1000) % 60 );
            const minutes = Math.floor( (t/1000/60) % 60 );
            const hours = Math.floor( (t/(1000*60*60)) % 24 );
            const days = Math.floor( t/(1000*60*60*24) );
            let time;

            return {
                'total': t,
                'days': days <= 9 ? `0${days}` : days,
                'hours': hours <= 9 ? `0${hours}` : hours,
                'minutes': minutes <= 9 ? `0${minutes}` : minutes,
                'seconds': seconds <= 9 ? `0${seconds}` : seconds
            };
        }

       const interval = setInterval(() => {
            const time = countdown(endDate);
            setTime(time);

            if (time.total <= 0) {
                clearInterval(interval);

                return;
            }
        }, 1000);

        return () => {
             clearInterval(interval);
       
        }
    });

    return (
        <div className="counter">
            <Block time={time.days} label="days"/>
            <Block time={time.hours} label="hours"/>
            <Block time={time.minutes} label="minutes"/>
            <Block time={time.seconds} label="seconds"/>
        </div>
    )
}

const Block = props => (
    <div className="counter__block">
        <span>{props.time}</span>
        <p>{props.label}</p>
    </div>
)
