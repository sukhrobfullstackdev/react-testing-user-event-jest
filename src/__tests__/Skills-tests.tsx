import { render, screen, logRoles } from '@testing-library/react'
import Skills from '../components/skills/Skills'

describe('Skills component tests', () => {
  const skills: Array<string> = ['kind', 'clever']
  test('Skills component renders with skills', () => {
    const { container } = render(<Skills skills={skills} />)
    logRoles(container)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
    const elementsOfList = screen.getAllByRole('listitem') // li tegini role i listitem role orqali barcha li larni oldik!
    expect(elementsOfList).toHaveLength(skills.length)
    // li lar ikkita bosin divomiz chunki tepada render qiganda 2 ta skills berdik,
    // 2 skills ikkta li lar generate qiladi
  })
  test('Renders login button', () => {
    render(<Skills skills={skills} />)
    const loginBtn = screen.getByRole('button', {
      name: 'Login',
    })
    expect(loginBtn).toBeInTheDocument()
  })
  test('Start learning button is not rendered', () => {
    render(<Skills skills={skills} />)
    const startLearning = screen.queryByRole('button', {
      name: 'Start learning!',
    })
    // queryByRole - toplmasa error bermidi null beradi!
    // shunga buni ozi aslida bolishi kerak emas bolgan elementlarga ishlatamiz
    expect(startLearning).not.toBeInTheDocument()
  })
  test('Start learning button is eventually displayed', async () => {
    render(<Skills skills={skills} />)
    const startLearning = await screen.findByRole(
      'button',
      {
        name: 'Start learning!',
      },
      {
        timeout: 3000, // findBy ning ustun tarafi asynchron bolib unga kutishi uchun timeout bersak boladi
      }
    )
    expect(startLearning).toBeInTheDocument()
  })
})
