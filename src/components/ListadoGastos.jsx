import Gasto from "./Gasto"


const ListadoGastos = ({ gastos, setGastoEditar, eliminarGastos }) => {
  return (
    <div className="listado-gastos contenedor">
        <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos aun'}</h2>

        {gastos.map( gasto => (
          <Gasto
            gasto={gasto}
            key={gasto.id}
            setGastoEditar={setGastoEditar}
            eliminarGastos={eliminarGastos}
          />
        ))}
    </div>
  )
}

export default ListadoGastos