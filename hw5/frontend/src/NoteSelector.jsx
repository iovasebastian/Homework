import './noteSelector.css';
import Note from './Note';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
const baseURL = 'http://localhost:3000/api/items';
const NoteSelector = () =>{
  const navigate = useNavigate();
  const [data,setData] = useState([]);
  const [fetch,setFetch] = useState(true);

  useEffect(()=>{
    handleRetrieveAll();
  },[data]);

  const getExistingData = async () =>{
    const response = await axios.get(baseURL);
    console.log('got the data',response);
    return response.data;
  }

  const createNote = () =>{
    navigate('/newNote');
  }

  const handleRetrieveAll = async ()=>{
    try{
      if(fetch){
      const existingData = await getExistingData();
      existingData.forEach((item,index)=>{
        setData((prevData)=>{
          const updatedData = [...prevData];
          updatedData[index] = item;
          return updatedData;
        })
      })
      }
      setFetch(false);
    }catch(error){
      console.log('Error receiving data: ', error);
    }
  }

  const elements = data.map((data,index) => 
    <Note key = {index} _id = {data._id}titlu = {data.titlu} content = {data.content}/>
  )

  return(
    <div className = 'background'>
      <h1>List of Notes</h1>
      <div className='gridNotes'>
      {elements}
      <button className = 'inputSelector' onClick = {createNote}>Add a new note</button>
      </div>
    </div>
  )
}
export default NoteSelector;