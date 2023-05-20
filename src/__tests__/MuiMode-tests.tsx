import { render, screen } from '../utils/test-utils' //AppProviders ni wrap qilishi uchun component yaratganmiz render funksiyasini ushbu test-utils dan import qilamiz shunda AppProviders avtomat ni wrap qilib beradi
import { MuiMode } from '../components/mui/MuiMode'

describe('MuiMode component tests', () => {
  test('renders text correctly', () => {
    render(<MuiMode />)
    const headingEl = screen.getByRole('heading', { level: 1 })
    expect(headingEl).toHaveTextContent('dark mode')
  })
})
