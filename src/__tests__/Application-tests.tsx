import { render, screen } from '@testing-library/react'
import Application from '../components/application/Application'

describe('Application component tests', () => {
  test('Application component whether renders correctly or not', () => {
    render(<Application />)
    const nameElement: HTMLElement = screen.getByRole('textbox', {
      name: 'Name:', // name ni value siga inputni labelini ichida yozilgan text ni beramiz
    })
    expect(nameElement).toBeInTheDocument()
    const bioElement: HTMLElement = screen.getByRole('textbox', {
      name: 'Bio:',
    })

    expect(bioElement).toBeInTheDocument()
    const nameElementSecond = screen.getByLabelText('Name:', {
      selector: 'input',
    }) // Label ni ichidagi text orqali labelni keyin ushbu label orqali inputni topadi
    expect(nameElementSecond).toBeInTheDocument()
    const pageHeading = screen.getByRole('heading', {
      name: 'Job application form',
    })
    // name deb turib h tegi ichida gi text orqali oldik
    expect(pageHeading).toBeInTheDocument()
    const pageSectionHeading = screen.getByRole('heading', { level: 2 })
    // level deb h2 bolgani uchun level ga 2 berib level boyicha h2 tegi olib kevoldik
    expect(pageSectionHeading).toBeInTheDocument()
    const jobLocationElement: HTMLElement = screen.getByRole('combobox')
    expect(jobLocationElement).toBeInTheDocument()
    const termsElement: HTMLElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()
    const termsElementSecond: HTMLElement = screen.getByLabelText(
      'I agree to the terms and conditions'
    )
    expect(termsElementSecond).toBeInTheDocument()
    const submitButtonElement: HTMLElement = screen.getByRole('button')
    expect(submitButtonElement).toBeInTheDocument()
    const elementByPlaceholder = screen.getByPlaceholderText(
      'Please enter your name!'
    )
    // placeholder ichidagi yozilgan text orqali elementni olib kelib oldik!
    expect(elementByPlaceholder).toBeInTheDocument()
    const elementByText = screen.getByText((content) =>
      content.startsWith('Lorem')
    )
    expect(elementByText).toBeInTheDocument()
    const elementByValue = screen.getByDisplayValue('Sukhrobbek')
    // input elementni value property siga bergan qiymatinimiz orqali olib kelib oldik!
    expect(elementByValue).toBeInTheDocument()
    const imgElementByAlt = screen.getByAltText('developer image')
    expect(imgElementByAlt).toBeInTheDocument()
    const spanElementByTitle = screen.getByTitle('close')
    expect(spanElementByTitle).toBeInTheDocument()
    const elementByTestId = screen.getByTestId('custom_element')
    expect(elementByTestId).toBeInTheDocument()
    // data-testid deb qiymat berdik shuni getByTestId deb ovoldik
    const btnElementByTestId = screen.getByTestId('submit_button')
    expect(btnElementByTestId).toBeInTheDocument()
  })
})
