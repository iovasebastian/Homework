import './Card.css';
import './background.jpg';

const Card = (props) =>{
    return(
        <div className='cover'>
            <img className = 'picture' src={props.poza} alt = "poza"/>
            <div className='bottom-card'>
            <h1 className='titlu'>{props.title}</h1>
            <p className='text'>{props.text}</p>
            </div>
            
        </div>
    )
}
export default Card;