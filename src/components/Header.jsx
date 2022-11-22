import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";


const Header = ({ presupuesto, setPresupuesto, valid, setValid }) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {valid ? (
        <ControlPresupuesto
          presupuesto={presupuesto}
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