import Gasto from "./Gasto"


const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminarGastos,
  filtro,
  gastosfiltrados
}) => {
  return (
    <div className="listado-gastos contenedor">
      

      { filtro ? (
        <>
        <h2>{gastosfiltrados.length ? 'Gastos' : 'No Hay Gastos aun'}</h2>
            {gastosfiltrados.map(gasto => (
              <Gasto 
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                eliminarGastos={eliminarGastos}
              />
            ))}
        </>
      ) : (
        <>
        <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos aun'}</h2>
            {gastos.map( gasto => (
                <Gasto 
                  key={gasto.id}
                  gasto={gasto}
                  setGastoEditar={setGastoEditar}
                  eliminarGastos={eliminarGastos}
                />
              ))}
        </>
        )}
    </div>
  )
}

export default ListadoGastos