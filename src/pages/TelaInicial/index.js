// src\pages\TelaInicial\index.js

import './styles.css'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo-gutin.png'
import background from '../../assets/images/background.jpg'

function TelaInicial() {
    const navigate = useNavigate()

    return (
        <div className='tela-inicial'>
            <div className='background'>
                <img src={background} alt="Background" className='background-image' />
            </div>
            <div className='container-telaInicial'>
                <img src={logo} alt='logo do restaurante' className='logo'></img>
                <h1>Gutin Restaurant</h1>
                <button onClick={() => navigate('/cadastro-de-prato')} className='link-cadastro-prato'>
                    Cadastrar Prato
                </button>
                <button onClick={() => navigate('/cardapio')} className='link-cardapio'>
                    Cardápio
                </button>
            </div>
        </div>
    )
}

export default TelaInicial