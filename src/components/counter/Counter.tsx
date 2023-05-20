import React, { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState<number>(0)
  const [amount, setAmount] = useState<number>(0)
  return (
    <div>
      <h1 className={'line-count'}>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <label htmlFor="amount" id="amount">
        Count:{' '}
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
        />
      </label>
      <button onClick={() => setCount(amount)}>Set</button>
    </div>
  )
}
