import React from "react";
export const TiposBasicos = () => {
  let sergioIdNombre: string | number = "Sergio";
  sergioIdNombre = 706;
  sergioIdNombre = "Checho";
  const sergioNombre: string = "Sergio Armando";
  const sergioApellidos: string = "Serrano Nuño";
  const sergioNumControl: number = 1840;
  const sergioNumControl2: number = 1083;
  const sergioFechaRef: Date = new Date();
  let sergioExperiencia = 20;
  let sergioActivo: boolean = true;
  sergioExperiencia = 25;
  let sergioPasatiempos: string[] = ['futbol', 'natación','leer','series y peliculas'];
//   sergioPasatiempos.push(706);
//   sergioPasatiempos.push(true);
  let sergioLibros = []
  sergioLibros.push(706);
  sergioLibros.push(true);
  sergioLibros.push("El principito");

  return (
    <>
      <h3>Tipos básicos</h3>
      Alias: {sergioIdNombre}, <br />
      Nombre: {sergioNombre}, <br />
      Apellidos: {sergioApellidos}, <br />
      No. Control: {sergioNumControl}, <br />
      No. Control2: {sergioNumControl2}, <br />
      Fecha de registro: {sergioFechaRef.toString()}, <br />
      Años de experiencia: {sergioExperiencia}, <br />
      Status: {sergioActivo ? "Activo" : "No activo"}, <br />
      Libros: {sergioLibros[0]},  
      {(sergioLibros[1]) ? 'Activo' : 'No activo'}, 
      {sergioLibros[2]}

    </>
  );
};
