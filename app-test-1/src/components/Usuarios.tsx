import { useEffect, useRef, useState } from "react";
import { reqRespApi } from "../api/reqRest";
import { ReqRespUsuariosListado, Usuario } from "../interfaces/reqResp";

export const Usuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const sergioCargaUsuarios = async () => {
    const sergioResponse = await //Eq1: llamado de la API
    reqRespApi
      .get<ReqRespUsuariosListado>("/users", {
        params: {
          page: sergioRefPage.current,
        },
      })
      .then((resp) => {
        if (resp.data.data.length > 0) {
          setUsuarios(resp.data.data);
          sergioRefPage.current++;
        } else {
          alert("No hay mas registros");
        }
      })
      .catch((err) => console.log(err));
  };
  const sergioRefPage = useRef(1);
  useEffect(() => {
    //Eq1: llamar función de carga de usuarios.

    sergioCargaUsuarios();
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
      <button className="btn btn-primary">Siguiente</button>
    </>
  );
};
