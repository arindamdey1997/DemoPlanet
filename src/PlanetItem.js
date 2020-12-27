import React,{useState} from 'react';
import './Common.css';
const PlanetItem = props => {
  var fav=[];
  const [check,setcheck]=useState(true);
  const favoriteHandler = (event) => {
      debugger;
      //fav.push(props.Planet)
      if(event.target.checked)
      props.func(props.Planet,true);
      else{
      props.func(props.Planet,false);
      props.arr.map(e=>e.id==props.Planet.id?e.isFavourite=false:true)
      setcheck(false);
    }
    console.log(event); // send this to the backend!
  };
  function checkPlanet(item) {
    debugger;
     if(item.id == props.Planet.id && item.isFavourite && check) {
       return true;
     }
     return false;
  }
  if (props.arr.find(checkPlanet)){
    return (
      
          <table cellspacing="10">
              
                  <tr>
              <td>{props.Planet.id}</td>
              <td>{props.Planet.name}</td>
              <td><input type="checkbox" id="yes" name="favorite"  onChange={favoriteHandler}  checked/>

    </td>
          </tr>
      </table>
  )}
  else{
      return(
    <table cellspacing="10">
              
    <tr>
<td>{props.Planet.id}</td>
<td>{props.Planet.name}</td>
<td><input type="checkbox" id="yes" name="favorite"  onChange={favoriteHandler}/>

</td>
</tr>
</table>);
  }

}

export default PlanetItem;