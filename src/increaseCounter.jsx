import React from 'react'
import { useDispatch } from 'react-redux'
import { increment } from './store/slice/counter'
// import { INCREMENT } from './store/constants'
// import { Increment } from './store/actions'

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
