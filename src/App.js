import React from 'react';
import './App.css';
import Header from './components/signUpForm/Header';
import ModalTest from './components/signUpForm/modalTest'

function App() {
  
  const initialStateData={
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    phoneNumber:'',
  }

  const loadingCase={
    ...initialStateData,
    loading:true
  }

  const errorCase={
    ...initialStateData,
    error:{
      nullCase:"This field is required",
    }
  }

  const errorSpecialCase={
    ...initialStateData,
    error:{
      nullCase:"This field is required",
      specialCase:"This email is already registered"
    }
  }

  return (
    <div className="App">
      <Header></Header>
      <ModalTest stateData={loadingCase}></ModalTest>
                
    </div>
  );
}

export default App;
