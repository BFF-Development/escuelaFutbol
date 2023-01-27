import './App.css'
import { lazy,Suspense } from 'react';
import Loader from './components/assets/loader/Loader';
import Nav from './components/nav/Nav';

const AudioLoader = lazy(() => import('./components/audioLoader/AudioLoader'))
const PreLoader = lazy(() => import('./components/preLoader/PreLoader'))
const SinglePage = lazy(() => import('./components/singlePage/SinglePage'))
const SvgLine = lazy(() => import('./components/svgLine/SvgLine'))



function App() {

  return (
      <Suspense fallback={<Loader/>}>
        <div className="App">
            <PreLoader/>
            <SvgLine/>
            <AudioLoader/>
            <Nav/>
            <SinglePage/>
        </div>
      </Suspense>

  )
}

export default App
