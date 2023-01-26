import './App.css'
import AudioLoader from './components/audioLoader/AudioLoader'
import Nav from './components/nav/Nav'
import PreLoader from './components/preLoader/PreLoader'
import SinglePage from './components/singlePage/SinglePage'
import SvgLine from './components/svgLine/SvgLine'

function App() {

  return (
    <div className="App">
      <PreLoader/>
      <SvgLine/>
      <AudioLoader/>
      <Nav/>
      <SinglePage/>
    </div>
  )
}

export default App
