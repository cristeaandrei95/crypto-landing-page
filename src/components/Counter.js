import React, { useEffect, useState } from 'react';

export default function Counter() {
    const [ time, setTime ] = useState();
    
    useEffect(() => {
        var countdownDate = new Date();
        var numberOfDaysToAdd = 7;
        countdownDate.setDate(countdownDate.getDate() + numberOfDaysToAdd); 
        let days, hours, minutes, seconds;
          
          endDate = new Date(endDate).getTime();
          
          if (isNaN(endDate)) {
            return;
          }
          
          setInterval(calculate, 1000);
          
          function calculate() {
            let startDate = new Date();
            startDate = startDate.getTime();
            
            let timeRemaining = parseInt((endDate - startDate) / 1000);
            
            if (timeRemaining >= 0) {
                days = parseInt(timeRemaining / 86400);
                timeRemaining = (timeRemaining % 86400);
              
                hours = parseInt(timeRemaining / 3600);
                timeRemaining = (timeRemaining % 3600);
              
                minutes = parseInt(timeRemaining / 60);
                timeRemaining = (timeRemaining % 60);
              
                seconds = parseInt(timeRemaining);

                setTime({ 
                    days:  parseInt(days, 10);
                    hours: ("0" + hours).slice(-2);
                    minutes: ("0" + minutes).slice(-2);
                    seconds: ("0" + seconds).slice(-2);
                )
            } else {
              return;
            }
          }

        return () => {
        
        }
    });

    return (
        <div className="counter">
            <Block time={time.dd} label="days"/>
            <Block time={time.hh} label="hours"/>
            <Block time={time.min} label="minutes"/>
            <Block time={time.sec} label="seconds"/>
        </div>
    )
}

const Block = props => (
    <div className="counter__block">
        <span>{props.time}</span>
        <p>{props.label}</p>
    </div>
)
