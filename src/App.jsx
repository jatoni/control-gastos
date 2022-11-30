import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import IconNuevoGasto from "./img/nuevo-gasto.svg";
import { generarId } from "./helpers";
import ListadoGastos from "./components/ListadoGastos";

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
    }, 500);
  };

  const guadarGasto = gasto => {
    gasto.id = generarId();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto]);
    setTimeout(() => {
      setModal(false);
    }, 500);
    setAnimar(false);
  };
  return (
    <div className={modal ? "fijar" : ''}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        valid={valid}
        setValid={setValid}
      />
      {valid && (
        <>
          <main>
            <ListadoGastos gastos={gastos} />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconNuevoGasto}
              alt="icono nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animar={animar}
          setAnimar={setAnimar}
          guadarGasto={guadarGasto}
        />
      )}
    </div>
  );
};

export default App;
