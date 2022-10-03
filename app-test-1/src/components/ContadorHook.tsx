import React from "react";
//import { useState } from "react";
import { useCounter } from "./hooks/useCounter";
export const ContadorHook = () => {
    const {valor, acumular} = useCounter(100);
    return (
        <div>
            <h3>ContadorHook: <small>{valor}</small></h3>
            <button className="sergioButton1"
            onClick={() => acumular(1)}>
                Sumar (+1)</button>
            &nbsp;
            <button className="sergioButton2"
            onClick={() => acumular(-1)}>
                Restar (-1)</button>
        </div>
    )
}