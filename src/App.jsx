import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Faqs from './components/faqs/Faqs'
import Footer from './components/footer/Footer'
import { Home } from './components/home/Home'
import Nav from './components/nav/Nav'
import Services from './components/services/Services'
import ServicesTitle from './components/services/ServicesTitle'

function App() {

  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
      <ServicesTitle/>
      <Services/>
      <Contact/>
      <Faqs/>
      <Footer/>
    </div>
  )
}

export default App
