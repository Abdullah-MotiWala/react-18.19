import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from './store/slice/counter'

const IncreaseCounter = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => {
                dispatch(increment())
            }}>Increase Counter</button>
        </div>
    )
}

export default IncreaseCounter
