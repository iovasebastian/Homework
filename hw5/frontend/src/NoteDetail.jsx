import './NoteDetail.css';
import axios from 'axios';
import mongoose from 'mongoose';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const NoteDetail = () =>{
  const navigate = useNavigate();
  const location = useLocation();
  const _id = location.state._id;
  const [content,setContent] = useState(location.state.contentShort);
  const [title,setTitle] = useState(location.state.title);

  const handleOnChange= (e) =>{
    setContent(e.target.value);
  }
  const handleOnChangeTitlu = (e) =>{
    setTitle(e.target.value);
    console.log(title);
  }

  const functionUpdate = async () => {
    try {
        const newContent = content;
        const newTitle = title;
        console.log('titlul este', newTitle);
        const response = await axios.put(`http://localhost:3000/api/items/${_id}`, { titlu:newTitle, content: newContent });
        console.log(response.data);
        navigate('/');
    } catch (error) {
        console.error('Error updating note:', error);
    }
};
  const functionDelete = async () =>{
    try{
      const response = await axios.delete(`http://localhost:3000/api/items/${_id}`);
      navigate('/');
    }catch(error){
      console.log('error',error);
    }
  }
  return(
  
    <div className="divDetail">
      <h1>Modify the Note</h1>
      <input value = {title} className = 'inputTitlu' type="text" id = "titlu" placeholder="Titlu" onChange={handleOnChangeTitlu}/>
      <div className="divTextDetail">
        <textarea className= "inputDetail" type = "text" value = {content} onChange = {handleOnChange}></textarea>
        <div className='divButton'>
          <button className = "button" onClick = {functionUpdate}>Update</button>
          <button className = "button" onClick = {functionDelete}>Delete</button>
        </div>
      </div>
    </div>
    
  )
}
export default NoteDetail