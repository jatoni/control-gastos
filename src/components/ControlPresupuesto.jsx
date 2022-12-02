
import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({ presupuesto, gastos }) => {

    const [porcentaje, setPorcentaje] = useState(20)
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);
        const totalDisponible = presupuesto - totalGastado;

        //  Calcular el porcentaje gastado
        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje)
        }, 1500)


        setDisponible(totalDisponible);
        setGastado(totalGastado);
    }, [gastos])

    const formatearCantidad = cantidad => {
        return cantidad.toLocaleString('es-MX', {
            style: 'currency',
            currency: 'MXN'
        })
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar
                    value={porcentaje}
                    text={`${porcentaje}% Gastado`}
                    styles={buildStyles({
                        pathColor: "#3b82f6",
                        trailColor: "#f5f5f5",
                        textColor: "#3b82f6"
                    })}
                />
            </div>

            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
                </p>
                <p>
                    <span>Disponible: </span> {formatearCantidad(disponible)}
                </p>
                <p>
                    <span>Gastado: </span> {formatearCantidad(gastado)}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto