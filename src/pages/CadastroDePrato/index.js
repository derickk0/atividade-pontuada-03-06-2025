// src\pages\CadastroDePrato\index.js

import CadastroDePrato from '../../components/CadastroDePrato'
import './styles.css'
import background from '../../assets/images/background.jpg'

function PaginaCadastro() {
    return (
        <div className='pagina-cadastro'>
            <div className='background'>
                <img src={background} alt="Background" className='background-image' />
            </div>
            <CadastroDePrato/>
        </div>
    )
}

export default PaginaCadastro