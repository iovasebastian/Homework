import Note from './Note';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
const baseURL = 'http://localhost:3000/api/items';

const Newnote = () => {
    const navigate = useNavigate();
    const addNote = async() =>{
        try{
          const titlu = document.getElementById('titlu').value;
          const content = document.getElementById('content').value;
    
          axios.post(baseURL,{
            titlu: titlu,
            content: content
          })
          navigate('/');
          document.getElementById('titlu').value = '';
          document.getElementById('content').value = '';
        }catch(error){
          console.error(error);
        }
      }
    return (
        <div className="divDetail">
            <h1>Create new Note</h1>
            <div className='divTextDetail'>
              <input className = 'inputTitlu' type="text" id = "titlu" placeholder="Titlu"/>
              <textarea className = "inputDetail" type ="text" id = "content" placeholder="Content"></textarea>
              <button className = 'button' onClick={addNote}>Add new note</button>
            </div>
            
        </div>
    )
}
export default Newnote