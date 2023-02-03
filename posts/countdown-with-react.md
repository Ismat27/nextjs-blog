---
title: 'How to make countdown with ReacJs'
date: '2023-02-03'
---

In this short tutorial we are going to develop a countdown with ReactJs

```js
import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

const futureDate = new Date(2022, 0, 1, 0, 0, 0)

export function getTimeRemain(expiration=futureDate) {
    // expiration is a date object
    const currentTime = new Date() // the current time
    
    // get time difference between the current time and expiration time. This difference will be in milli seconds
    const timeDifference = expiration.getTime() -  currentTime.getTime()
    
    if (timeDifference <= 0) {
          return {
            daysRemaining: '',
            hoursRemaining: '',
            minutesRemaining: '',
            secondsRemaining: '',
        }
  
    }
  
    // convert the time difference in milli seconds to days, hours, minutes and seconds
    
    const oneDay = 24 * 60 * 60 * 1000 // milli seconds
    const oneHour = 60 * 60 * 1000 // milli seconds
    const oneMinute = 60 * 1000 // milli seconds
    const oneSecond = 1000 // milli seconds
    
    const daysRemaining = Math.floor(timeDifference / oneDay)
    const hoursRemaining = Math.floor((timeDifference % oneDay) / oneHour)
    const minutesRemaining = Math.floor((timeDifference % oneHour) / oneMinute)
    const secondsRemaining = Math.floor((timeDifference % oneMinute) / oneSecond)
    
    return {
        daysRemaining: format(daysRemaining),
        hoursRemaining: format(hoursRemaining),
        minutesRemaining: format(minutesRemaining),
        secondsRemaining: format(secondsRemaining)
    }
    
}

function format(number){
    if (number < 10) {
        return `0${number}`
    }
    return number
}

const Countdown = ({ endDate }) => {
    const temp = {
            daysRemaining: '',
            hoursRemaining: '',
            minutesRemaining: '',
            secondsRemaining: ''
        }
    const [timeRemain, setTimeRemain] = useState(temp) 
    useEffect(() => {

        function updateTimeRemain() {
            let expiration = endDate || new Date(2023, 0, 0, 0, 0, 0)
            const todayDate = new Date()
            const temp = expiration.getTime() - todayDate.getTime()

            if (temp <= 0) {
                clearInterval(countdownId)
            }

            setTimeRemain(getTimeRemain(expiration))
        }

        const countdownId = setInterval(updateTimeRemain, 1000)
        updateTimeRemain()

        return () => clearInterval(countdownId)
    }, [endDate])

    return (
        <Wrapper className='comp-header'>
            <h2 className='capitalize'>flash sales</h2>
            <div className="countdown">
                <h4>ENDS IN</h4>
                <h2 className='countdown-time'>
                    <span>{timeRemain.daysRemaining || 0} days :</span>
                    <span>{timeRemain.hoursRemaining || 0} hrs :</span>
                    <span>{timeRemain.minutesRemaining || 0} mins :</span>
                    <span>{timeRemain.secondsRemaining || 0} secs</span>
                </h2>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
display: flex;
align-items: center;
gap: 1rem;
flex-wrap: wrap;
.countdown {
    display: flex;
    align-items: center;
    gap: 1rem;
}
@media (min-width: 768px) {
    column-gap: 2rem;
  
}
@media (min-width: 992px) {
    column-gap: 3rem;
}
`

export default Countdown
```
