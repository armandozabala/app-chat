import React, { createContext, useState, useEffect } from 'react'
import { db, auth, provider } from '../firebase'


export const ChatContext =  createContext();

const ChatProvider = (props) => {

    const dataUsuario = {
           uid: null,
           email: null,
           estado: null
    }
    const [usuario, setUsuario] = useState(dataUsuario)
    const [mensaje, setMensaje] = useState([])

    useEffect(() => {
        detectarUsuario()
    },[])

    const ingresoUsuario = async() => {
        try{
            const resp = await auth.signInWithPopup(provider)
        }catch(error){
            console.log(error);
        }
    }

    const cerrarSesion = () => {
          auth.signOut()
    }


    const detectarUsuario = () => {
            auth.onAuthStateChanged(user => {
                  if(user){
                     setUsuario({
                        uid: user.uid,
                        email: user.email,
                        estado: true
                     })
                     cargarMensaje()
                  }else{
                     setUsuario({
                         uid: null,
                         email: null,
                         estado: false
                    })
                }
            })
    }

    const cargarMensaje = () => {
          db.collection('chat')
             .onSnapshot(query => {
                  const arrayMensaje = query.docs.map(item => item.data());
                  setMensaje(arrayMensaje)
             })
    }

    const agregarMensajes = async (uidChat, textoInput) => {

        try{
            await db.collection('char').add({
                 fecha: Date.now(),
                 texto: textoInput,
                 uid: uidChat
            })
        }catch(error){
            console.log(error)
     }
   }

    return (
        <ChatContext.Provider value={{ 
                                        usuario, 
                                        ingresoUsuario, 
                                        cerrarSesion, 
                                        mensaje,
                                        agregarMensajes
                                    }}>

            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatProvider
