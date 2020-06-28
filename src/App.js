import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import {BrowserRouter , Route, Switch} from 'react-router-dom';
import Post from './Components/Post';


class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
           <Switch> 
            <Route exact path='/' component={Home}/>
            <Route path='/about' component ={About}/>
            <Route path='/contact' component ={Contact}/>
            <Route path="/:post_id" component={Post}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  };
}

export default App;
