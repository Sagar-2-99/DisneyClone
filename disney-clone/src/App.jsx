import './App.css'
import Headers from './Components/Headers'
import { Slider } from './Components/Slider'

function App() {
  //https://api.themoviedb.org/3/movie/550?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf

  return (
    <>
    <div className='bg-blue-950 h-dvh'>
    <Headers/>
    <Slider/>
    </div>
    
    </>
  )
}

export default App
