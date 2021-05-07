import React, { Component } from 'react';
import{ BrowserRouter as Router, Route} from 'react-router-dom';
import Join from './components/Join';
import Chat from './components/Chat';



const App = () =>(
    <Router> 
        {/* when user first logs in Join gets activated and then data is passed through Chat */}
        <Route path="/" exact component={Join}/> 
        <Route path="/chat" exact component={Chat}/>

    </Router>
);

export default App;