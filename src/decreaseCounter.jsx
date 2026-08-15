import React from 'react'
import { useDispatch } from 'react-redux'
import { DECREMENT } from './store/constants'
import { Decrement } from './store/actions'
import { decrement } from './store/slice/counter'

const DecreaseCounter = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => {
                dispatch(decrement())
            }}>Decrease Counter</button>
        </div>
    )
}

export default DecreaseCounter
