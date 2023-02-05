---
title: 'How to make countdown with ReacJs'
date: '2023-02-03'
---

In this short tutorial we are going to develop a countdown with ReactJs

Let's make some import

```js
import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
```

To install __styled-components__ run the command below in your terminal

```sh
npm install styled-components
```

First let's create a utility function __getTimeRemain__ to get the time difference between our expiration date (date we are counting down to)
and the current time at a particular moment.
This function will be called every seconds and will return the time difference in days, hours, minutes and seconds.

```js
// default date to countdown too, in case one is not provided
const futureDate = new Date(2024, 0, 1, 0, 0, 0) 

export function getTimeRemain(expiration=futureDate) {
    // expiration is a javaScripts date object
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

    // format function is to format a single digit number to two digits by attaching zero to it.
    //e.g 9 => 09
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
```

Now we make the React component to display time remaining to the countdown

We will utilize the javaScript __setInterval()__ method that executes a function at specified intervals in milliseconds.
The method returns an interval Id which uniquely identifies the effect of the method. This uniques interval Id can be passed
to __clearInterval()__ method to stop the __setInterval()__ from running the function passed to it.
Refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) for more information.

```js
const Countdown = ({ endDate }) => {
    // endDate must be javaScript Date instance
    const temp = {
            daysRemaining: '',
            hoursRemaining: '',
            minutesRemaining: '',
            secondsRemaining: ''
        }
    // declare a state variable for remaining time to countdown
    const [timeRemain, setTimeRemain] = useState(temp) 
    useEffect(() => {

        // the function updateTimeRemain will call the getTimeRemain function every seconds to obtain 
        // the time remain to the countdown. 
    
        function updateTimeRemain() {
            // each time the function is called, it will obtain the time difference between the current time
            // and the time we are counting down to. 
            let expiration = endDate || new Date(2023, 0, 0, 0, 0, 0)
            const todayDate = new Date()
            const temp = expiration.getTime() - todayDate.getTime()

            // if time difference between current time at any moment in milliseconds is less than or equal to zero,
            // then we should stop updateing the time remain
            if (temp <= 0) {
                clearInterval(countdownId)
            }

            // call getTimeRemain to obtain time remain to countdown in days, houres, minutes, and seconds
            setTimeRemain(getTimeRemain(expiration))
        }

        // updateTimeRemain every seconds
        const countdownId = setInterval(updateTimeRemain, 1000) 
        updateTimeRemain() // call updateTimeRemain first time the component is mounted

        return () => clearInterval(countdownId) // stop calling updateTimeRemain once the component is unmountedaaaa
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

Your final code should be as shown

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
