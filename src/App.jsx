import React, { useContext } from 'react'
import Navbar from './components/Navbar';
import { ChatContext } from './context/ChatProvider'
import Skeleton from 'react-loading-skeleton';
import Chat from './components/Chat';
 
const App = () => {

    const { usuario } = useContext(ChatContext);

    return usuario !== null ? (
        <div>
            <Navbar/>
            {
                usuario.estado ? (
                    <Chat/>
                ): (
                    <div className="text-center mt-5">
                        Debes iniciar sesion.
                    </div>
                )
            }
        </div>
    ) : (
        <div style={{ fontSize: 20, lineHeight: 2 }}>
        <h1> <Skeleton /> </h1>
        <Skeleton count={10} />
      </div>
    )
}

export default App
