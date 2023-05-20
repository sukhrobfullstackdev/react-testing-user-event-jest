import React, { useEffect, useState } from 'react'
import { ISkillsProps } from './Skills.types'

const Skills = ({ skills }: ISkillsProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true)
    }, 2000)
  }, [])
  return (
    <>
      <h1>something</h1>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      {isLoggedIn ? (
        <button>Start learning!</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  )
}

export default Skills
