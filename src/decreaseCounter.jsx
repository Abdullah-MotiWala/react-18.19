import React from 'react'
import { useDispatch } from 'react-redux'
import { DECREMENT } from './store/constants'
import { Decrement } from './store/actions'

const DecreaseCounter = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => {
                dispatch(Decrement)
            }}>Decrease Counter</button>
        </div>
    )
}

export default DecreaseCounter
