import './App.css'
import Contador from './pages/contador/Contador'
import Tarefa from './pages/tarefa/Tarefa'
import Home from './pages/home/Home'


function App() {

  return (
    <>
      <div>
        <Home
          titulo="Minha primeira postagem"
          texto="Texto da minha primeira postagem" />

        <Tarefa />
        
        <Contador />
      </div>
    </>
  )
}

export default App
