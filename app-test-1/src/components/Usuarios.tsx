import { useEffect, useRef, useState } from "react";
import { reqRespApi } from "../api/reqRest";
import { ReqRespUsuariosListado, Usuario } from "../interfaces/reqResp";

export const Usuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    //Eq1: Llamado de la API
    reqRespApi
      .get<ReqRespUsuariosListado>("/users")
      .then((resp) => {
        //console.log(resp.data.data);
        setUsuarios(resp.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const renderItem = (usuario: Usuario) => {
    return (
      <tr key={usuario.id.toString()}>
        <td>
          <img
            src={usuario.avatar}
            alt={usuario.first_name}
            style={{
              width: 50,
              borderRadius: 100,
            }}
          ></img>
        </td>
        <td>
          {usuario.first_name} {usuario.last_name}
        </td>
        <td>{usuario.email}</td>
      </tr>
    );
  };
  return (
    <>
      <h3>Usuarios</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((sergioArgUsuario) => renderItem(sergioArgUsuario))}
        </tbody>
      </table>
    </>
  );
};
