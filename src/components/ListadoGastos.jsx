import React from "react"
import { Gasto } from "./Gasto"


export const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastosFiltrados2 }) => {
  return (
    <div className="listado-gastos contenedor">
      

      {
        filtro ? (
          <>
            <h2>{gastosFiltrados2.length ? 'Gastos' : 'No hay gastos en esta categoria'}</h2>
              {gastosFiltrados2.map (gasto =>(

                <Gasto
                  key={gasto.id}
                  gasto={gasto}
                  setGastoEditar={setGastoEditar}
                  eliminarGasto={eliminarGasto}
                />
              ))}
          </>
        ) : (
            <>
            <h2>{gastos.length ? 'Gastos' : 'No hay Gastos'}</h2>
              {gastos.map(gasto => (

                <Gasto
                  key={gasto.id}
                  gasto={gasto}
                  setGastoEditar={setGastoEditar}
                  eliminarGasto={eliminarGasto}

                />
              ))}
            </>
        )
      }

    </div>
  )
}
