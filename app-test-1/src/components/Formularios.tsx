import { useState } from "react";
import { useForm } from "./hooks/useForm";

export const Formularios = () => {
  const { formulario,onChange,email,password } = useForm()

  return (
    <>
      <h3>Formulario</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        //value={formulario.email}
        value={email}
        //Eq1: una opcion es instanciando las propiedades del evento onChange.
        //onChange={(ev)=> onChange(ev.target.value, 'email')}
        onChange={({ target }) => onChange(target.value, "email")}
      ></input>

      <input
        type="text"
        className="form-control mt-2 mb-2"
        placeholder="Password"
        //value={formulario.password}
        value={password}
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
