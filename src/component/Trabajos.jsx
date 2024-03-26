
import '../styles/trabajoContainer.css'
import cardObject from '../assets/CardOjects'
import Card from './Card'

const Trabajos = () => {

  return (
    <section id='arte' className='trabajo-container'>
        {
            cardObject.map(item => (
                <Card key={item.id} descripcion={item.desc} img={item.img}/>
            ))
        }
    </section>
  )
}

export default Trabajos