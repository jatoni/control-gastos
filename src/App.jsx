import { useState } from "react"
import Header from "./components/Header";
import Modal from "./components/Modal";
import IconNuevoGasto from './img/nuevo-gasto.svg';
import { generarId } from './helpers'


const App = () => {
  const [presupuesto, setPresupuesto] = useState(0);
  const [valid, setValid] = useState(false);
  const [modal, setModal] = useState(false);
  const [animar, setAnimar] = useState(false);
  const [gastos, setGastos] = useState([]);

  const handleNuevoGasto = () => {
    setModal(true);
    setTimeout(() => {
      setAnimar(true);
    }, 500)
  }

  const guadarGasto = gasto => {
    gasto.id = generarId();
    setGastos([...gastos, gasto])
    
    setTimeout(() => {
      setModal(false);
    }, 500)
    setAnimar(false);

  }
  return (
    <>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        valid={valid}
        setValid={setValid}
      />
      {valid && (
        <div className="nuevo-gasto">
          <img
            src={IconNuevoGasto}
            alt="icono nuevo gasto"
            onClick={handleNuevoGasto}
          />
        </div>
      )}

      {modal && (<Modal
        setModal={setModal}
        animar={animar}
        setAnimar={setAnimar}
        guadarGasto={guadarGasto}
      />)}
    </>
  )
}

export default App
