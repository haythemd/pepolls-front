import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreatePoll, Explore,Profil ,Login, CreateAccount,ContinueCreateAccount,Edit,ResetPassword,Setnewpassword} from './pages/index'; // Update the import statement


function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path='/explore' element={<Explore/>} />
            <Route path='CreatePoll' element={<CreatePoll />} />
            <Route path='/profil' element={<Profil/>} />
            <Route path='/CreateAccount' element={<CreateAccount/>}/>
            <Route path='/continueCreateAccount' element={<ContinueCreateAccount/>}/>
            <Route path='/' element={<Login/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/Edit' element={<Edit/>} />
            <Route path='/resetpassword' element={<ResetPassword/>} />
            <Route path='/setnewpassword' element={<Setnewpassword/>} />
            
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
