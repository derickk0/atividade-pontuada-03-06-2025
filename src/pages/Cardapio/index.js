// src\pages\Cardapio\index.js

import Cardapio from '../../components/Cardapio'
import { useNavigate } from 'react-router-dom'
import './styles.css'
import background from '../../assets/images/background.jpg'

function PaginaListaUsuarios() {
    const navigate = useNavigate()
    
    return (
        <div className='pagina-cardapio'>
            <div className='background'>
                <img src={background} alt="Background" className='background-image' />
            </div>
            <div className='container-cardapio'>
                <h2>Cardápio</h2>
                <Cardapio/>
                <button onClick={() => navigate('/cadastro-prato')} className='link-cadastro'>
                    Cadastrar prato
                </button>
            </div>
        </div>
    )
}

export default PaginaListaUsuarios