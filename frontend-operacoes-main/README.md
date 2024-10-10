```markdown
# Projeto de Aplicação de Operações Matemáticas

Este projeto é uma aplicação web que fornece uma API para realizar várias operações matemáticas, desenvolvida com **Spring Boot** no backend, e uma interface de usuário utilizando **HTML**, **CSS** e **JavaScript** no frontend. A aplicação permite que os usuários realizem operações como contagem de alunos aprovados, cálculo de MDC (Máximo Divisor Comum), Fibonacci, verificação de número primo, ordenação de um vetor e somador.

## Tecnologias Utilizadas

- **Java 17** ou superior
- **Spring Boot 2.7.x** (ou a versão mais recente)
- **Maven** para gerenciamento de dependências
- **HTML**, **CSS** e **JavaScript** para o frontend

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/seu_usuario/meu-projeto.git
   cd meu-projeto/backend
   ```


## Frontend - HTML, CSS e JavaScript

A parte frontend da aplicação consiste em uma interface simples onde os usuários podem interagir com a API.

### Instalação

Para o frontend, não há dependências externas, basta abrir o arquivo `index.html` em um navegador.

### Funcionalidades

O frontend possui duas partes principais:

1. **Escolha de Linguagem**
   - O usuário pode escolher entre **Java** e **JavaScript**. A interface é dividida em dois botões que ocupam 100% da largura da tela.

2. **Operações**
   - Quando o usuário seleciona **JavaScript**, ele pode acessar as operações matemáticas mencionadas anteriormente. Para **Java**, uma implementação similar deve ser feita, mas isso exige um ambiente de execução Java (como um servidor servlet) ou outro método para compilar e executar o código Java no navegador.

## Testes

Os testes para os serviços de operações matemáticas podem ser executados usando:

```bash
mvn test
```
