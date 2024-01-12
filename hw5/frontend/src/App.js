import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import NoteSelector from './NoteSelector';
import NoteDetail from './NoteDetail';
import Newnote from './Newnote';

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <Routes>
          <Route path="/" element={<NoteSelector />} />
          <Route path='/details' element={<NoteDetail />} />
          <Route path='/newNote' element={<Newnote />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
