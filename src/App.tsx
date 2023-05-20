import './App.css'
import { AppProviders } from './components/providers/AppProviders'
import { Users } from './components/users/Users'

const App = () => {
  return (
    <AppProviders>
      <div className={'App'}>
        <Users />
      </div>
    </AppProviders>
  )
}

export default App
