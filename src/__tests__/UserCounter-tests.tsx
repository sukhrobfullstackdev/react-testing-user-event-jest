import { act, renderHook } from '@testing-library/react'
import { useCounter } from '../components/hooks/useCounter'

describe('useCounter tests', () => {
  test('Should render initial count', () => {
    const { result } = renderHook(useCounter) // renderHook - hook ni render qilish uchun
    const { count } = result.current
    expect(count).toBe(0)
  })
  test('should accept and render the same initial count', () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 10 },
    }) // initial value options ni ichida shunday beriladi!
    const { count } = result.current
    expect(count).toBe(10)
  })
  test('testing increment', () => {
    const { result } = renderHook(useCounter) // initial value options ni ichida shunday beriladi!
    act(() => {
      // react state larni ozgartiradigan kodni act funksiyasiga oriymiz
      result.current.increment() // increment setCount qiladi bu esa state ozgartiradi shunga act ga oradik
    })
    expect(result.current.count).toBe(1)
  })
  test('testing decrement', () => {
    const { result } = renderHook(useCounter)
    act(() => {
      result.current.decrement()
    })
    expect(result.current.count).toBe(-1)
  })
})
