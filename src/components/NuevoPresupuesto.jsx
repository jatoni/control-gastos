import React from 'react'

const NuevoPresupuesto = () => {
    return (
        <div className="contenedor-presupuesto contenedor sombra">

            <form className='formulario'>
                <div className='campo'>
                    <label>Definir presupuesto</label>

                    <input
                        className='nuevo-presupuesto'
                        type="number"
                        placeholder='Enter your money'
                    />
                </div>
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default NuevoPresupuesto