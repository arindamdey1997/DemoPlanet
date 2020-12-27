import React from 'react';

import PlanetItem from './PlanetItem'

const Favorites = props => {
  return (
<table>
              {props.fav.map(items=>(items.isFavourite?
                  <tr>
              <td>{items.id}</td>
              <td>{items.name}</td>
              
          </tr>:null))}
      </table>  );
};

export default Favorites;