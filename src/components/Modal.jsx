import { useState } from 'react'
import CerrarModal from '../img/cerrar.svg'

export const Modal = ({ setModal, animarModal, setAnimarModal }) => {

    const [nombre, setNombre]=useState(''); 
    const [cantidad, setCantidad]=useState('');
    const [categoria, setCategoria]=useState('');

    const ocultarModal = () => {
        setModal(false)
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 1000)
    }
    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={CerrarModal}
                    alt="img Cerrar"
                    onClick={ocultarModal}
                />
            </div>

            <form className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
                <legend>Nuevo Gasto</legend>
                <div className='campo'>
                    <label htmlFor="nombre">Nombre Gasto</label>

                    <input
                        id='nombre'
                        type="text"
                        placeholder='añade el nombre del gasto'
                        value={nombre}
                        onChange={e=>setNombre(e.target.value)}
                    />
                </div>

                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad</label>

                    <input
                        id='cantidad'
                        type="number"
                        placeholder='añade la cantidad del gasto ej. 300'
                        value={cantidad}
                        onChange={e=>setCantidad(Number(e.target.value))}
                    />
                </div>

                <div className='campo'>
                    <label htmlFor="categoria">Categoria</label>

                    <select 
                        id="categoria"
                        value={categoria}
                        onChange={e=>setCategoria(e.target.value)}
                    >
                     <option value=""> -- Seleccione --</option>
                     <option value="ahorro"> Ahorro </option>
                     <option value="comida"> Comida </option>
                     <option value="casa"> Casa </option>
                     <option value="gastos"> Gastos Varios </option>
                     <option value="ocio"> Ocio </option>
                     <option value="salud"> Salud </option>
                     <option value="suscripciones"> Suscripciones </option>

                    </select>
                </div>

                <input 
                type="submit"
                value="Añadir Gasto"
                />

            </form>
        </div>
    )
}
