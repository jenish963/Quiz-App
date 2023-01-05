import React, { useState } from 'react'
import Validation from './Validation'

function AddQuestion() {

    const initialState = {
        question: '',
        answer: '',
        A: '',
        B: '',
        C: '',
        D: ''
    }

    const [data, setdata] = useState(initialState)

    const handleChange = (e) => {
        setdata({...data,
                [e.target.name] : e.target.value
        })
    }

    const set = { question: '', answer: '', A: '', B: '', C: '', D: '' }

    const submit = (e) => {
        const datas = JSON.parse(localStorage.getItem("Que") || "[]")

        datas.push(data)

        localStorage.setItem('Que', JSON.stringify(datas))
        setdata(set)

        let allRadio = document.querySelectorAll('.radioButton')
        allRadio.forEach(value => value.checked = false)

        Validation(data)

    }

    localStorage.removeItem("Ans")

  return (
    <div className='mcq'>
    <div>
        Question: <input type='text' placeholder='Question' name='question' value={data.question} onChange={handleChange}/>
    </div><br/>
    <div className='option'>
        <input type='radio' className='radioButton' name='answer' value='A' onChange={handleChange}/>
        <input type='text' placeholder='Option-1' name='A' value={data.A} onChange={handleChange} />
    </div>
    <div className='option'>
        <input type='radio' className='radioButton' name='answer' value='B' onChange={handleChange}/>
        <input type='text' placeholder='Option-2' name='B' value={data.B} onChange={handleChange} />
    </div>
    <div className='option'>
        <input type='radio' className='radioButton' name='answer' value='C' onChange={handleChange}/>
        <input type='text' placeholder='Option-3' name='C' value={data.C} onChange={handleChange} />
    </div>
    <div className='option'>
        <input type='radio' className='radioButton' name='answer' value='D' onChange={handleChange}/>
        <input type='text' placeholder='Option-4' name='D' value={data.D} onChange={handleChange} />
    </div><br/>
    <div>
        <button onClick={submit} >SAVE</button>
    </div>
    </div>
  )
}

export default AddQuestion