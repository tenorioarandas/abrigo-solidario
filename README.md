# Abrigo Solidário 🆘🌊

## 1. Apresentação da Ideia

Esse é o meu projeto Full Stack desenvolvido como parte da minha jornada estudante do Vai Na Web. Tomando como base o contexto das enchentes, decidi focar no problema de **logística e conexão rápida entre quem quer ajudar e quem precisa de abrigo.** Em situações de desastre, a velocidade da informação salva vidas, e este sistema visa centralizar essa rede de apoio.

## 2. Problema Escolhido

O grande problema é a confusão na hora de encontrar abrigo. Quando acontece uma crise climática, muita gente fica desorientada e não sabe quais lugares são seguros ou estão recebendo pessoas. Do outro lado, muitas pessoas tem a possibilidade de ceder um espaço, mas que não tem onde anunciar isso de forma organizada. Essa falta de um "meio" acaba deixando pessoas desamparadas por mais tempo do que deveriam.

## 3. Solução Proposta

A solução é uma plataforma de conexão direta. O sistema permite o cadastro de usuários com perfis distintos:

- **Oferecer ajuda:** Para abrigos formais ou cidadãos com espaço disponível.
- **Preciso de ajuda:** Para quem foi afetado e busca refúgio imediato.
  O sistema conta com autenticação segura e armazenamento persistente para garantir que a rede de contatos seja confiável.

## 4. Estrutura do Sistema

O projeto foi dividido em três camadas principais:

### 📱 Front-end

- **Tecnologia:** React.js
- **Estilo:** Sass
- **Descrição:** Interface responsiva e intuitiva. Utiliza **Axios** para consumir a API do backend, garantindo uma experiência de usuário fluida sem recarregamentos de página (SPA).

### ⚙️ Back-end

- **Tecnologia:** Node.js com Express
- **Descrição:** API REST que gerencia as regras de negócio. Implementa segurança com **Bcrypt** para criptografia de senhas e utiliza **CORS** para permitir a integração segura com o front-end. As variáveis sensíveis são protegidas via **Dotenv**.

### 🗄️ Banco de Dados

- **Tecnologia:** PostgreSQL
- **Descrição:** Banco de dados relacional para persistência de dados. A estrutura conta com uma tabela de `usuarios` que valida a unicidade de e-mails e organiza os tipos de perfis cadastrados.
