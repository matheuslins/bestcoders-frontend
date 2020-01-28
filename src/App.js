import React, { useEffect, useState } from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

import api from './services/api';
import CoderItem from './components/Coderitem'
import CoderForm from './components/Coderform'

function App() {
  const [coders, setCoders] = useState([]);

  useEffect(() => {
    async function loadCoders(){
      const response = await api.get('/coders')
      setCoders(response.data.data)
    }
    loadCoders()
  }, []);

  async function handlerAddCoder(data){
    
    const response = await api.post('/coders', data);
    setCoders([...coders, response.data.data])
  
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <CoderForm onSubmit={handlerAddCoder}/>
      </aside>
      <main>
        <ul>
          {coders.map(coder => (
            <CoderItem key={coder._id} coder={coder}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
