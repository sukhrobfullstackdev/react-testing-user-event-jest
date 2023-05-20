import React from 'react'
import { IGreetProps } from './Greet.types'

const Greet = ({ name }: IGreetProps) => {
  return (
    <>
      {name ? (
        <div className={'greetingElement'}>Hello {name}!</div>
      ) : (
        <div className={'greetingElement'}>Hello!</div>
      )}
    </>
  )
}

export default Greet
