package com.example.aula.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Prato {
    @Id
    
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Nome do prato é obrigatório.")
    private String nome;

    @NotBlank(message = "A descrição do prato é obrigatória.")
    private String descricao;

    @NotBlank(message = "O preço do prato é obrigatório.")
    private Double preco;

    @NotBlank(message = "A categoria do prato é obrigatória.")
    private String categoria;

    @NotBlank(message = "A disponibilidade do prato é obrigatória.")
    private String disponibilidade;

    @NotBlank(message = "A URL da imagem do prato é obrigatória.")
    private String url;

    public Prato() {
    }

    public Prato(Long id, String nome, String descricao, Double preco, String categoria, String disponibilidade, String url) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.categoria = categoria;
        this.disponibilidade = disponibilidade;
        this.url = url;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public @NotBlank(message = "Nome do prato é obrigatório.") String getNome() {
        return nome;
    }

    public void setNome(@NotBlank(message = "Nome do prato é obrigatório.") String nome) {
        this.nome = nome;
    }

    public @NotBlank(message = "A descrição do prato é obrigatória.") String getDescricao() {
        return descricao;
    }

    public void setDescricao(@NotBlank(message = "A descrição do prato é obrigatória.") String descricao) {
        this.descricao = descricao;
    }

    public @NotBlank(message = "O preço do prato é obrigatório.") Double getPreco() {
        return preco;
    }

    public void setPreco(@NotBlank(message = "O preço do prato é obrigatório.") Double preco) {
        this.preco = preco;
    }

    public @NotBlank(message = "A categoria do prato é obrigatória.") String getCategoria() {
        return categoria;
    }

    public void setCategoria(@NotBlank(message = "A categoria do prato é obrigatória.") String categoria) {
        this.categoria = categoria;
    }

    public @NotBlank(message = "A disponibilidade do prato é obrigatória.") String getDisponibilidade() {
        return disponibilidade;
    }

    public void setDisponibilidade(@NotBlank(message = "A disponibilidade do prato é obrigatória.") String disponibilidade) {
        this.disponibilidade = disponibilidade;
    }

    public @NotBlank(message = "A URL da imagem do prato é obrigatória.") String getUrl() {
        return url;
    }

    public void setUrl(@NotBlank(message = "A URL da imagem do prato é obrigatória.") String url) {
        this.url = url;
    }

}
