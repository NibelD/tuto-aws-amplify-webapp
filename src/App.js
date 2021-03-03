import React, { useState, useEffect } from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import  Todo  from './Todo';
import Inscription from './Inscription';


function App() {


  return (
    <div className="App">

      <Inscription />
      <br/>
      {/* <Todo /> */}
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);