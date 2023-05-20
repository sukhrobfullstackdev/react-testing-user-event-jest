import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { Counter } from '../components/counter/Counter'

describe('Counter component tests', () => {
  test('Counter component whether renders correctly or not', () => {
    render(<Counter />)
    const count: HTMLElement = screen.getByRole('heading', { level: 1 })
    expect(count).toBeInTheDocument()
    const incrementBtn: HTMLElement = screen.getByRole('button', {
      name: /increment/i,
    })
    expect(incrementBtn).toBeInTheDocument()
  })
  test('Testing initial state of counter', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading', { level: 1 })
    expect(countElement).toHaveTextContent('0')
  })
  test('Testing value of counter after clicking increment button', async () => {
    user.setup() // user-event ni ishlatish uchun birinchi setup qilib oldik
    render(<Counter />)
    const incrementBtn: HTMLElement = screen.getByRole('button', {
      name: /increment/i,
    })
    await user.click(incrementBtn) // user.click toliq click qilishini kutish uchun await qoydik!
    const countElement = screen.getByRole('heading', { level: 1 })
    expect(countElement).toHaveTextContent('1')
  })
  test('Testing value of counter after clicking twice increment button', async () => {
    user.setup() // user-event ni ishlatish uchun birinchi setup qilib oldik
    render(<Counter />)
    const incrementBtn: HTMLElement = screen.getByRole('button', {
      name: /increment/i,
    })
    await user.dblClick(incrementBtn) // dblClick - ikki marta bosilishi uchun
    const countElement = screen.getByRole('heading', { level: 1 })
    expect(countElement).toHaveTextContent('2')
  })
  test('renders a count of 10 after clicking the set button', async () => {
    user.setup()
    render(<Counter />)
    const setInput = screen.getByRole('spinbutton')
    await user.type(setInput, '10') // user.type inputga value yozib beradi!
    const setBtn = screen.getByRole('button', { name: /set/i })
    await setBtn.click()
    const countElement = screen.getByRole('heading', { level: 1 })
    expect(countElement).toHaveTextContent('10')
  })
  test('elements are focused in the right order', async () => {
    user.setup()
    render(<Counter />)
    const incBtn = screen.getByRole('button', {
      name: /increment/i,
    })
    const countIn = screen.getByRole('spinbutton')
    const setBtn = screen.getByRole('button', {
      name: /set/i,
    })
    await user.tab()
    expect(incBtn).toHaveFocus()
    await user.tab()
    expect(countIn).toHaveFocus()
    await user.tab()
    expect(setBtn).toHaveFocus()
  })
})
