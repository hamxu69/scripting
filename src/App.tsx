import './App.css'
import AlertButton from "./AlertButton";
function App() {
  const name = 'Hamz'
  const city = 'Lahore'
  return (<>
    <h1>I am {name}</h1>
    <h2>I live in {city}</h2>
    <AlertButton></AlertButton>
  </>
  )
}

export default App
