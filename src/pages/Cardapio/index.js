// src\pages\Cardapio\index.js

import Cardapio from '../../components/Cardapio'
import { useNavigate } from 'react-router-dom'
import './styles.css'

function PaginaListaUsuarios() {
    const navigate = useNavigate()
    
    return (
        <div className='pagina-cardapio'>
            <div className='container-cardapio'>
                <h2>Lista de jogadores</h2>
                <Cardapio/>
                <button onClick={() => navigate('/cadastro-prato')} className='link-cadastro'>
                    Cadastrar jogador
                </button>
            </div>
        </div>
    )
}

export default PaginaListaUsuarios