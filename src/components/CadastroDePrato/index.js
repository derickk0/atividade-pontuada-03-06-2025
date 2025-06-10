// src\components\CadastroDePrato\index.js

import React, { useState } from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom'
import useMensagem from '../../hooks/useMensagem'
import Feedback from '../Feedback'
import axios from 'axios'
import logo from '../../assets/images/gutin-fastfood.png'

function CadastroDePrato() {
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [preco, setPreco] = useState('')
    const [categoria, setCategoria] = useState('')
    const [disponibilidade, setDisponibilidade] = useState(false)
    const [url, setUrl] = useState('')

    const navigate = useNavigate()
    const { exibirMensagem, mensagem, tipoMensagem, visivel, fecharMensagem } = useMensagem()

    const cadastrarPrato = async () => {
        try {
            const response = await axios.post('https://atividade-pontuada-03-06-2025-a2lz.onrender.com/cardapio', {nome, descricao, preco, categoria, disponibilidade, url})
            exibirMensagem(response.data.mensagem || 'Prato cadastrado com sucesso!', 'sucesso')
            setNome('')
            setDescricao('')
            setPreco('')
            setCategoria('')
            setDisponibilidade('')
            setUrl('')

        } catch (error) {
            let erroMsg = 'Erro ao conectar ao servidor.'
            if (error.response && error.response.data) {
                erroMsg = error.response.data.mensagem
                if (error.response.erros) {
                    erroMsg += '' + Object.values(error.response.erros).join(',')
                }
            }
            exibirMensagem(erroMsg, 'erro')
        }
    }
    return (
        <div className="container-cadastroDePrato">
            <img src={logo} alt="Logo Gutin" className='logo-gutin' />
            <form onSubmit={(e) => {e.preventDefault(); cadastrarPrato()}} className="form-cadastroDePrato">
                <h2>Cadastrar Prato</h2>
                <div>
                    <input
                        type="text"
                        id="nome"
                        value={nome}
                        placeholder='Nome do prato'
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="descricao"
                        value={descricao}
                        placeholder='Descrição do prato'
                        onChange={(e) => setDescricao(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        type="number"
                        id="preco"
                        value={preco}
                        placeholder='Preço do prato'
                        onChange={(e) => setPreco(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="categoria"
                        value={categoria}
                        placeholder='Categoria do prato'
                        onChange={(e) => setCategoria(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        type="disponibilidade"
                        id="disponibilidade"
                        value={disponibilidade}
                        placeholder='Disponibilidade do prato'
                        onChange={(e) => setDisponibilidade(e.target.checked)}
                        required
                    />
                </div>
                <div>
                    <input
                        type="url"
                        id="url"
                        value={url}
                        placeholder='URL da imagem do prato'
                        onChange={(e) => setUrl(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className='submit'>Cadastrar</button>
                <button onClick={() => navigate('/cardapio')} className='link-cardapio'>
                    Ver cardápio
                </button>
            </form>
            <Feedback
                mensagem={mensagem}
                tipo={tipoMensagem}
                visivel={visivel}
                onClose={fecharMensagem}
            />
        </div>
    )
}

export default CadastroDePrato