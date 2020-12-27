import React from 'react';
import PlanetItem from './PlanetItem';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
const Planets = props => {
  debugger;
  return (
<Get url="https://assignment-machstatz.herokuapp.com/planet" params={{}}>
        {(error, response, isLoading, makeRequest, axios) => {
          if(error) {
            return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
          }
          else if(isLoading) {
            return (<div>Loading...</div>)
          }
          else if(response !== null) {
              {debugger}
              var arr=[];
              arr=response.data;
            return (
                <React.Fragment>
                <table>
          <tr><td><center><b>ID</b></center></td>
                    <td><center><b>Name</b></center></td>
                    <td><center><b>Favorite</b></center></td>
                    </tr>
                    </table>
                {arr.map(p=>(<PlanetItem Planet= {p} fav="0" func={props.func} arr={props.fav}/>))}
                </React.Fragment>
                )
          }
          return (<div>Default message before request is made.</div>)
        }}
      </Get>  );
};

export default Planets;