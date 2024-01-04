import './Card.css';
const Card = () =>{

    return(
        <div className='card'>
            <h1 className='titlu'>Sign In</h1>
            <input type="text" placeholder='Username'/>
            <input type="password" placeholder='Password'/>
            <div className='for-checkbox'>
            <label className='custom-checkbox'>
                <input type="checkbox" id = "checkbox" name = "checkbox"/>
                <span className='checkmark'></span>
            </label>
            <label className='label-for-checkbox'>Remember me</label>
            </div>
            <button className='buton'>
                <div className='linie-stanga'></div>
                <div className='linie-sus'></div>
                <div className='linie-jos'></div>
            </button>
            <div className='a-down'>
                <a className='a-1'>CAN'T SIGN IN?</a>
                <a className='a-2'>CREATE ACCOUNT</a>
            </div>
        </div>    
        )
}
export default Card;