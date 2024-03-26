import '../styles/card.css'
const Card = ({ img}) => {

  return (
    <div className="card">
        <img src={img}/>
    </div>
  )
}

export default Card