import React, {useState} from 'react'
import Result from './Result'
import './Exam.css'

function Exam() {

  const data = JSON.parse(localStorage.getItem('Que'))
  const selectedAns = JSON.parse(localStorage.getItem('Ans'))

  const [current, setCurrent] = useState(0)
  const [ans, setAns] = useState({index: null})
  const [correct, setCorrect] = useState(0)
  const [exit, setExit] = useState(false)


  const input = (e) => {
    setAns({...ans,
      [e.target.name]: e.target.value})
  }


  const handlePrevious = (e) => {
    setCurrent(current - 1)
    //debugger
    Previous()
  }


  const Previous = () => {
    let allRadio = document.querySelectorAll('.radioButton')
    allRadio.forEach(value => {
      if(selectedAns[current-1].index === value.value){
        value.checked = true
      }
    })
  }
  

  const handlerSave = () => {
    if (data[current].answer === ans.index) {
      setCorrect(correct + 1)
    }

    if ((current + 1) === data.length){
      setExit(true)
    }
    else {
    setCurrent(current + 1)
    }

    let allRadio = document.querySelectorAll('.radioButton')
    allRadio.forEach(value => value.checked = false)

    const answers = JSON.parse(localStorage.getItem("Ans") || "[]")
    //handlePrevious() ? answers.splice(ans,current,1):
     answers.push(ans)
    localStorage.setItem('Ans', JSON.stringify(answers))

  }

  return(
    <div>
      { exit === false ?
      <div className='mcq'>
      <div>
        Question :<span className='span'>{current + 1}</span>    
        {data[current].question}?
      </div><br/>
      <div>
        <div className='option'><input type='radio' value='A' name='index' onChange={input} className='radioButton'/> {data[current].A} </div>
        <div className='option'><input type='radio' value='B' name='index' onChange={input} className='radioButton'/> {data[current].B} </div>
        <div className='option'><input type='radio' value='C' name='index' onChange={input} className='radioButton'/> {data[current].C} </div>
        <div className='option'><input type='radio' value='D' name='index' onChange={input} className='radioButton'/> {data[current].D} </div>
      </div><br/>
      <div>
        { current !== 0 && <button onClick={handlePrevious}>Previous</button>}
        <button onClick={handlerSave}>Save & Next</button>
      </div>
      </div> :
      <Result props={{correct}}/>
      }
    </div>
  )
}

export default Exam;