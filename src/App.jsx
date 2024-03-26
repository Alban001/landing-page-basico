
import './styles/container.css'
import Header from './component/Header'
import Entrada from './component/Home'
import Trabajos from './component/Trabajos'
import About from './component/About'
import Contacto from './component/Contacto'
import Footer from './component/Footer'

function App() {
  

  return (
    <div className='container'>
        <Header />
        <Entrada />
        <Trabajos />
        <About />
        <Contacto />
        <Footer />
    </div>
  )
}

export default App
