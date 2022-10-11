import { useState } from "react";

export const Formularios = () => {
  const [formulario, setForumulario] = useState({
    email: "test@test.com",
    password: "123",
  });
  const onChange = (value: string, campo: string) => {
    //Eq1: llamado a la función que cambia el useState
    setForumulario({
      //Eq1: desestructuramos los valores del useState
      ...formulario,
      //Eq1: aqui es como si estuvieramos mandando
      //el atributo email o password. Dicho de otro modo
      //los [] computan es decir compara el valor que trae
      //el parametro "campo" y lo relaciona con el valor del
      //useState. Por ultimo si encontro un atributo que se llame
      //igual le asigna el valor que trae el parametro "value"
      //de la funcion onChange.
      [campo]: value,
    });
  };
  return (
    <>
      <h3>Formulario</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        value={formulario.email}
        //Eq1: una opcion es instanciando las propiedades del evento onChange.
        //onChange={(ev)=> onChange(ev.target.value, 'email')}
        onChange={({ target }) => onChange(target.value, "email")}
      ></input>

      <input
        type="text"
        className="form-control mt-2 mb-2"
        placeholder="Password"
        value={formulario.password}
        //Eq1: una opcion es instanciando las propiedades del evento onChange.
        //onChange={(evento)=> onChange(evento.target.value, 'password')}
        //Eq1: otra opcion es desestructurando el target del control input.
        onChange={({ target }) => onChange(target.value, "password")}
      ></input>
      <code>
        <pre>{JSON.stringify(formulario, null, 2)}</pre>
      </code>
    </>
  );
};
