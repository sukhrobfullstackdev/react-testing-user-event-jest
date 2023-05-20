import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { AppProviders } from '../components/providers/AppProviders'

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AppProviders, ...options })
// Hamma componentlarni AppProviders orab olgan shunga test qilganimizda AppProviders ni wrap qilmaganimiz uchun error bermasligi uchun
// ushbu custom render ni yaratdik
// endi Hamma testlarimizni render qilganmizda AppProviders ni wrap qilib beradi
export * from '@testing-library/react'
export { customRender as render }
