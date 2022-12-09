import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";


const Header = ({ presupuesto, setPresupuesto, valid, setValid, gastos, setGastos }) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {valid ? (
        <ControlPresupuesto
          presupuesto={presupuesto}
          gastos={gastos}
          setGastos={setGastos}
          setPresupuesto={setPresupuesto}
          setValid={setValid}
        />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setValid={setValid}
        />
      )}
    </header>
  )
}

export default Header