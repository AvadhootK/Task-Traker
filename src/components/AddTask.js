import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [text,setText]=useState('')
    const [day,setDay]=useState('')
    const [reminder,setReminder]=useState(false)

    const onSubmit=(e)=> {
        e.preventDefault()                  // prevent page from reloading
        if(!text) {
            alert('Please add a task')
            return
        }
        onAdd({ text,day,reminder })

        setText('')
        setDay('')
        setReminder(false)
    }


    return (
        <form className='add-form' onSubmit={onSubmit} > 
            <div className='form-control'>
                <label htmlFor='input1'>Task</label>
                <input 
                    id='input1' 
                    type='text' 
                    placeholder='Add Task'
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                />
            </div>
            <div className='form-control'>
                <label htmlFor='input2'>Day and Time</label>
                <input 
                    id='input2' 
                    type='text' 
                    placeholder='Add Day and Time' 
                    value={day} 
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label htmlFor='input3'>Set Reminder</label>
                <input 
                    id='input3' 
                    type='checkbox' 
                    checked={reminder} 
                    value={reminder} 
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input type='submit' className='btn btn-block' value='Save Task'></input>
        </form>
    )
}

export default AddTask
