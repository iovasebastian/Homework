import { useState } from 'react';
import './Note.css';
import { useNavigate } from 'react-router-dom';
const Note = (props) =>{
    const navigate = useNavigate();
    const[title,setTitle] = useState(props.titlu)
    const[contentul,setContentul] = useState(props.content);
    const contentShort = contentul.substring(0,32);
    const _id = props._id;
    
    const functionNavigate = () =>{
        navigate('/details', { state: { _id, title,contentShort } });
    }
    const displayContent = contentul.length > 32 ? contentShort + "..." : contentul;
    return(
        <div className='divNote' onClick = {functionNavigate}>
            <h3 className='noteTitle'>{title}</h3>
            <p className='noteContent'>{displayContent}</p>
        </div>
    )
}
export default Note