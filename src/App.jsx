import './App.css'
import Faqs from './components/faqs/Faqs'
import Footer from './components/footer/Footer'
import { Home } from './components/home/Home'
import Nav from './components/nav/Nav'

function App() {

  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Faqs/>
      <Footer/>
    </div>
  )
}

export default App
