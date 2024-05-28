import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'

function App() {

  return (
    <div className="max-w-6xl mx-auto">
      <Header></Header>
      <Outlet>
        <Banner></Banner>
      </Outlet>
    </div>
  )
}

export default App
