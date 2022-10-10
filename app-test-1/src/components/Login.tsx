import { act } from "@testing-library/react";
import { type } from "os";
import { useEffect, useReducer } from "react";

interface AuthState {
  validando: boolean;
  token: string | null;
  username: string;
  nombre: string;
}

const initialState = {
  validando: true,
  token: null,
  username: "",
  nombre: "",
};

type LoginPayLoad = {
  username: string;
  nombre: string;
};
type AuthAction = { type: "logout" } | { type: "login"; payload: LoginPayLoad };
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        username: "",
        nombre: "",
      };
    case "login":
      const { nombre, username } = action.payload;
      return {
        validando: false,
        token: "MITOKEN1234567890",
        //username: action.payload.username,
        //nombre: action.payload.nombre,
        username,
        nombre,
      };
      break;
    default:
      return state;
      break;
  }
};

export const Login = () => {
  //const [{validando, token}, dispatch] = useReducer(authReducer, initialState)
  const login = () => {
    dispatch({
      type: "login",
      payload: {
        username: "SERRANO",
        nombre: "SERGIO",
      },
    });
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 2500);
  }, []);
  //Eq1: si se agregara una dependencia
  if (state.validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="sergioAlertInfo_Div alert alert-warning">Validando Información...</div>
      </>
    );
  }
  return (
    <>
      <h3>Login</h3>
      {state.token ? (
        <div className="sergioAlertSuccess_Div alert alert-success">
          Autenticado como: {state.nombre}
        </div>
      ) : (
        <div className="sergioAlertDanger_Div alert alert-danger">No Autenticado...</div>
      )}
      {state.token ? (
        <button className="sergioLogout_Button btn btn-danger">Logout</button>
      ) : (
        <button
          name="sergioLogin_Button"
          className="btn btn-primary"
          onClick={login}
        >
          Login
        </button>
      )}
    </>
  );
};
