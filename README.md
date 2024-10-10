# Projeto Front-End com Consumo de API em Java

Este repositório contém um front-end desenvolvido em JavaScript que consome uma API construída em Java com Spring. O projeto demonstra como realizar operações matemáticas básicas, como cálculo de Fibonacci, Máximo Divisor Comum (MDC), troca de valores de variáveis, soma de números, manipulação de vetores e verificação de números primos.

## Estrutura do Projeto

```
/frontend
    ├── index.html
    ├── style.css
    ├── script.js
/backend
    ├── src
        ├── main
            ├── java
                ├── com
                    ├── exemplo
                        ├── api
                            ├── ApiApplication.java
                            ├── controller
                                ├── MathController.java
                            ├── service
                                ├── MathService.java
    ├── pom.xml
```

## Tecnologias Utilizadas

### Front-End

- **HTML**: Estrutura da aplicação
- **CSS**: Estilização
- **JavaScript**: Lógica e consumo da API

### Back-End

- **Java**: Linguagem de programação
- **Spring Boot**: Framework para desenvolvimento de aplicações Java
- **Maven**: Gerenciamento de dependências

## Configuração do Back-End

1. **Instalação do Java**: Certifique-se de ter o JDK instalado. Você pode baixar o JDK [aqui](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html).

2. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio/backend
   ```

3. **Compile o projeto com Maven**:
   ```bash
   mvn clean install
   ```

4. **Execute a aplicação**:
   ```bash
   mvn spring-boot:run
   ```

A API estará disponível em `http://localhost:8080/api/math`.

## Endpoints da API

- `GET /api/math/fibonacci/{n}`: Retorna o n-ésimo número de Fibonacci.
- `GET /api/math/mdc?a={a}&b={b}`: Retorna o Máximo Divisor Comum entre dois números.
- `POST /api/math/troca`: Troca valores de duas variáveis.
- `POST /api/math/soma`: Retorna a soma de uma lista de números.
- `GET /api/math/primario/{n}`: Verifica se um número é primo.

## Configuração do Front-End

1. **Navegue até a pasta do front-end**:
   ```bash
   cd nome-do-repositorio/frontend
   ```

2. **Abra o arquivo `index.html` em um navegador**.

3. **Interaja com a aplicação**: O front-end irá se conectar à API e permitir a realização das operações matemáticas.

## Exemplo de Código em JavaScript

No arquivo `script.js`, utilize `fetch` para consumir os endpoints da API:

```javascript
// Função para calcular Fibonacci
function calcularFibonacci(n) {
    fetch(`http://localhost:8080/api/math/fibonacci/${n}`)
        .then(response => response.json())
        .then(data => {
            console.log('Fibonacci:', data);
            // Atualizar a UI com o resultado
        })
        .catch(error => console.error('Erro:', error));
}

// Função para calcular MDC
function calcularMDC(a, b) {
    fetch(`http://localhost:8080/api/math/mdc?a=${a}&b=${b}`)
        .then(response => response.json())
        .then(data => {
            console.log('MDC:', data);
            // Atualizar a UI com o resultado
        })
        .catch(error => console.error('Erro:', error));
}

// Função para trocar valores de variáveis
function trocarValores(var1, var2) {
    fetch('http://localhost:8080/api/math/troca', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ var1, var2 })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Valores trocados:', data);
    })
    .catch(error => console.error('Erro:', error));
}

// Função para somar números
function somarNumeros(numeros) {
    fetch('http://localhost:8080/api/math/soma', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(numeros)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Soma:', data);
    })
    .catch(error => console.error('Erro:', error));
}

// Função para verificar se um número é primo
function verificarPrimo(n) {
    fetch(`http://localhost:8080/api/math/primario/${n}`)
        .then(response => response.json())
        .then(data => {
            console.log('É primo?', data);
        })
        .catch(error => console.error('Erro:', error));
}
```
