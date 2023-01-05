import React from 'react'
import './Exam.css'

function Result({props}) {

  const data = JSON.parse(localStorage.getItem('Que'))

  return (
    <div className='result'>
    <div>Question Attempted : {props.correct + (data.length - props.correct)}</div><br/>
    <div>Right Answers : {props.correct}</div><br/>
    <div>Wrong Answers : {data.length - props.correct} </div>
    </div>
  )
}

export default Result