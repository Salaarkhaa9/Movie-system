import './App.css'
import MovieCard from './components/MovieCard'
function App() {
  //CONDITIONAL RENDERING
  const movienumber=1
  return (
    <>
    {
      movienumber===1?
      (<MovieCard movie={{title:"Final Destination" , release_date:"August 2025"}}/>):
      (<MovieCard movie={{title:"Spider man" , release_date:"June 2024"}}/>)
    }
    </>
  )
}

export default App
