import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { manual } from './store/slice/counter'

function ManualCounter() {
    const [value, setValue] = useState(0)
    const dispatch = useDispatch()

    function handleSave() {
        dispatch(manual(+value))
    }

    function handleChange(event) {
        setValue(event.target.value)
    }
    return (
        <div>
            <input type="number" onChange={handleChange} value={value} />
            <button onClick={handleSave}>Save</button>

        </div>
    )
}

export default ManualCounter
