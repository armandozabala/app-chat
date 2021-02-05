import React, { useContext, useState } from 'react'

import {ChatContext } from '../context/ChatProvider'


const Agregar = () => {

    const { agregarMensajes, usuario } = useContext(ChatContext);

    const  [mensaje, setMensaje] = useState('')

    const agregar = (e) => {
        e.preventDefault()
        if(!mensaje.trim()){
            console.log('vacio')
            return;
        }

        agregarMensajes(usuario.uid, mensaje)
        setMensaje('')

    }
    return (
        <form className="fixed-bottom input-group p-3 bg-dark"
              onSubmit={agregar}
                >
                <input type="text"
                       className="form-control"
                       value={mensaje}
                       onChange = { e => setMensaje(e.target.value )}
                />
            <div className="input-group-append">
                <button className="btn btn-primary"
                        type="submit"
                >
                     Enviar
                </button>
            </div>
        </form>
    )
}

export default Agregar
