import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './slices/counterSlice'

export function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div className='btn-area'>
        <button
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className='count'>{count}</span>
        <button
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}