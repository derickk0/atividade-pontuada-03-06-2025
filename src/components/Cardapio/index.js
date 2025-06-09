// src\components\Cardapio\index.js

import { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css'

function Cardapio() {
    const [pratos, setPratos] = useState([])

    useEffect(() => {
        const carregarPratos = async () => {
            try {
                const response = await axios.get('https://atividade-pontuada-03-06-2025.onrender.com/cardapio')
                setPratos(response.data)
            } catch (error) {
                alert('Erro ao buscar pratos: ', error)
                setPratos([])
            }
        }
        carregarPratos()
    }, [])
    return (
        <ul id='cardapio' className='cardapio'>
            {pratos.length === 0 ? (
                <li>Nenhum prato encontrado.</li>
            ) : (
                pratos.map( prato => (
                    <li key={prato.id} className="dados-pratos">
                        <strong>Nome: </strong> {prato.nome}<br />
                        <strong>Descrição: </strong> {prato.descricao}<br />
                        <strong>Preço: </strong> {prato.preco}<br />
                    </li>
                ))
            )}
        </ul>
    )
}

export default Cardapio