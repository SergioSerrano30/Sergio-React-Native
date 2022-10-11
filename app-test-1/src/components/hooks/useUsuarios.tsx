import { useEffect, useRef, useState } from "react";
import { reqRespApi } from "../../api/reqResp";
import { ReqRespUsuariosListado, Usuario } from "../../interfaces/reqResp";

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  let ultPagina = false;
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
          ultPagina=false;
        } else {
          alert("No hay mas registros");
          ultPagina=true;
        }
      })
      .catch((err) => console.log(err));
  };
  const sergioRefPage = useRef(1);
  useEffect(() => {
    //Eq1: llamar función de carga de usuarios.

    sergioCargaUsuarios();
  }, []);

  //Funciones
  const sergioAnterior = () => {
    if (sergioRefPage.current > 1) {
      sergioRefPage.current--;
      sergioCargaUsuarios();
    }
  };
  const sergioSiguiente = () => {
    if(!ultPagina){
        sergioRefPage.current++;
        sergioCargaUsuarios();
    }
  };

  return {
    usuarios,
    //sergioCargaUsuarios,
    sergioAnterior,
    sergioSiguiente,
  };
};
