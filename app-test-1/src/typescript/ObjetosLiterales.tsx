import React from "react";
export const ObjetosLiterales = () => {
  interface Persona {
    nombreCompleto: string;
    edad: number;
    // direccion: {
    //     pais: string,
    //     estado: string,
    //     ciudad: string,
    //     calle: string,
    //     numero: number
    // }
  }
  interface Direccion {
    pais: string;
    estado: string;
    ciudad: string;
    calle: string;
    numero: number;
  }

  const persona: Persona = {
    nombreCompleto: "Martha",
    edad: 30,
    // direccion: {
    //     pais: 'México',
    //     estado: 'Nayarit',
    //     ciudad: 'Tepic',
    //     calle: 'Conocido',
    //     numero: 533
    // }
  };
  const direccion: Direccion = {
    pais: "México",
    estado: "Nayarit",
    ciudad: "Tepic",
    calle: "Conocido",
    numero: 533,
  };
  //const sergio = new Persona(); //error
  return (
    <div>
      <h3>Objetos Literales</h3>
      <code>
        <pre>
          {/* JSON.stringify(persona) */}
          {JSON.stringify(persona, null, 2)}
        </pre>
        <pre>
            {JSON.stringify(direccion, null, 2)}
        </pre>
      </code>
    </div>
  );
};
