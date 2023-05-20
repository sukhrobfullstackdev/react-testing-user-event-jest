import { render, screen } from '@testing-library/react'
import Greet from '../components/greet/Greet'

describe('Greet component tests', () => {
  test('Greet renders correctly', () => {
    // test.skip qiladigan bosek ushbu test test qimasdan otqazvoradi
    render(<Greet />)
    const textElement: HTMLElement = screen.getByText('Hello!')
    expect(textElement).toBeInTheDocument()
  })
  describe('Nested tests', () => {
    test('Greet renders with a name', () => {
      // test.only qiladigan bosek faqat shuni
      render(<Greet name={'Sukhrobbek'} />)
      const textElement: HTMLElement = screen.getByText('Hello Sukhrobbek!')
      expect(textElement).toBeInTheDocument()
    })
  })
})
