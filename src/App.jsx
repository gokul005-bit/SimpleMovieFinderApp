import { BrowserRouter } from 'react-router'
import './App.css'
import { AuthProvider } from './context/AuthContext'
import Approutes from './routes/Approutes'

function App() {

  return (
    <>
      <Approutes/>
    </>
    
  )
}

export default App
