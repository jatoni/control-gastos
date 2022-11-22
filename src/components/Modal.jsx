import { useState } from "react"
import CerrarBtn from '../img/cerrar.svg'


const Modal = ({ setModal, animar, setAnimar }) => {

    const [nombre, setNombre] = useState("");
    const [cantidad, setCantidad] = useState(0);
    const [categoria, setCategoria] = useState("");

    const ocultarModal = () => {
        setTimeout(() => {
            setModal(false);
        }, 500)
        setAnimar(false);
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={CerrarBtn}
                    alt="Cerrar Modal"
                    onClick={ocultarModal}
                />
            </div>
            <form className={`formulario ${animar ? 'animar' : 'cerrar'}`}>
                <legend className="">Nuevo Gasto</legend>

                <div className="campo">
                    <label htmlFor="nombre">Nombre gasto</label>
                    <input 
                        type="text"
                        placeholder="Ingrese el nombre del gasto"
                        id="nombre"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input 
                        type="number"
                        placeholder="Ingrese la cantidad del gasto: ej.300"
                        id="cantidad"
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="categoria">Categoria</label>
                    <select
                        id="categoria"
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>

                <input
                    type="submit"
                    value="Agregar Gasto"
                />
            </form>
        </div>
    )
}

export default Modal