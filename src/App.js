import logo from './logo.svg';
import './App.css';
import React from 'react';
import Favorites from './Favorites';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import MainNavigation from './MainNavigation';
import Planets from './Planets';
function App() {
  var arr=[];
  const handlerfunc=(item,bool)=>{
    if(bool){
    item.isFavourite=true;
    arr.push(item);
    }
    else
    arr.map(e=>e.id==item.id?e.isFavourite=false:true)
    debugger;
  }
  return (
    <div className="App">
      <Router>
        
          <MainNavigation />
          <Route path="/" exact>
              <Planets func={handlerfunc} fav={arr}/>
            </Route>
          <Route path="/Favorites" exact>
              <Favorites fav={arr}/>
            </Route>
      </Router>
    </div>
  );
}

export default App;
