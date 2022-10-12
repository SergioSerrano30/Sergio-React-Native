import { useState } from 'react';

export const useForm = () => {
    const [state, setState] = useState({
        email: "test@test.com",
        password: "123",
      });
      const onChange = (value: string, campo: string) => {
        //Eq1: llamado a la función que cambia el useState
        setState({
          //Eq1: desestructuramos los valores del useState
          ...state,
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
    return {
        ...state,
        formulario: state,
        onChange
    };
};