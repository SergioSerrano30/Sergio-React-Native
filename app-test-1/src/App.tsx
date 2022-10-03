import React from 'react';
//import { TiposBasicos } from './typescript/TiposBasicos';
// import { ObjetosLiterales } from './typescript/ObjetosLiterales';
// import { Contador } from './components/Contador';
import { ContadorHook } from './components/ContadorHook';

const App = () =>{
  return (
    <div>
      <h1>Introducción a Type Script con React</h1>
      <hr />
      {/* <TiposBasicos/> */}
      {/* <ObjetosLiterales/> */}
      {/* {<Contador/>} */}
      {<ContadorHook/>}
    </div>
  )
}

export default App;
