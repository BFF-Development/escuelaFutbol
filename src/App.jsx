import './App.css'
import About from './components/about/About'
import Arco from './components/arco/Arco'
import Contact from './components/contact/Contact'
import Faqs from './components/faqs/Faqs'
import Footer from './components/footer/Footer'
import { Home } from './components/home/Home'
import Nav from './components/nav/Nav'
import Services from './components/services/Services'

function App() {

  return (
    <div className="App">
      
      <Nav/>
      <Home/>
      <About/>
      <Services/>
      <Contact/>
      <Faqs/>
      <Arco/>
      <Footer/>
    </div>
  )
}

export default App
