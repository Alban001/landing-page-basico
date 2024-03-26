import '../styles/card.css'
const Card = ({descripcion, img}) => {

  return (
    <div className="card">
        <img src={img}/>
        <p className='centered'>{descripcion}</p>
    </div>
  )
}

export default Card