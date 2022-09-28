import React from 'react';
//import { TiposBasicos } from './typescript/TiposBasicos';
// import { ObjetosLiterales } from './typescript/ObjetosLiterales';
import { Contador } from './components/Contador';

const App = () =>{
  return (
    <div>
      <h1>Introducción a Type Script con React</h1>
      <hr />
      {/* <TiposBasicos/> */}
      {/* <ObjetosLiterales/> */}
      {<Contador/>}
    </div>
  )
}

export default App;
