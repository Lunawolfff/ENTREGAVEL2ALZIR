# Backend - API de Operações com Java Spring

Este projeto é o backend de uma API desenvolvida em **Java Spring** que realiza operações matemáticas simples, como cálculo de Fibonacci, contagem de aprovados, e mais. Esta API pode ser utilizada para fins de estudo ou como base para futuras implementações.

## Endpoints

A API possui os seguintes endpoints:

### 1. **Contagem de Aprovados**
- **URL**: `/api/operacoes/contagem-aprovados`
- **Método**: `GET`
- **Parâmetros**:
  - `quantidade` (int): Número de alunos.
  - `notas` (int[]): Array de notas dos alunos.
- **Exemplo**: `/api/operacoes/contagem-aprovados?quantidade=3&notas=7,5,8`
- **Descrição**: Retorna a contagem de alunos aprovados, considerando uma média mínima.

### 2. **Sequência de Fibonacci**
- **URL**: `/api/operacoes/fibonacci`
- **Método**: `GET`
- **Parâmetros**:
  - `termos` (int): Número de termos a serem calculados.
- **Exemplo**: `/api/operacoes/fibonacci?termos=5`
- **Descrição**: Retorna a sequência de Fibonacci até o número de termos informado.

### 3. **Máximo Divisor Comum (MDC)**
- **URL**: `/api/operacoes/mdc`
- **Método**: `GET`
- **Parâmetros**:
  - `a` (int): Primeiro número.
  - `b` (int): Segundo número.
- **Exemplo**: `/api/operacoes/mdc?a=10&b=15`
- **Descrição**: Retorna o Máximo Divisor Comum (MDC) entre dois números.

### 4. **Verificação de Número Primo**
- **URL**: `/api/operacoes/numero-primo`
- **Método**: `GET`
- **Parâmetros**:
  - `numero` (int): Número a ser verificado.
- **Exemplo**: `/api/operacoes/numero-primo?numero=7`
- **Descrição**: Verifica se o número informado é primo.

### 5. **Ordenação de Vetor**
- **URL**: `/api/operacoes/ordenacao`
- **Método**: `POST`
- **Body**: Array de inteiros.
- **Exemplo**:
  ```json
  [3, 1, 5, 2, 4]
  ```
- **Descrição**: Retorna o vetor ordenado.

### 6. **Somador de Números**
- **URL**: `/api/operacoes/somador`
- **Método**: `POST`
- **Body**: Array de inteiros.
- **Exemplo**:
  ```json
  [1, 2, 3, 4, 5]
  ```
- **Descrição**: Retorna a soma dos números informados.

### 7. **Troca de Variáveis**
- **URL**: `/api/operacoes/troca-variaveis`
- **Método**: `POST`
- **Parâmetros**:
  - `a` (int): Primeiro valor.
  - `b` (int): Segundo valor.
- **Exemplo**: `/api/operacoes/troca-variaveis?a=5&b=10`
- **Descrição**: Troca os valores das variáveis `a` e `b`.

## Requisitos

Para rodar o projeto, você precisará ter instalado:

- **Java 11+**
- **Maven**
- **Spring Boot**

### Dependências

As principais dependências deste projeto podem ser encontradas no arquivo `pom.xml`. Algumas delas incluem:
- Spring Web
- Spring Boot DevTools
- Lombok

## Como rodar o projeto

### Passos para rodar a aplicação localmente:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. **Acesse o diretório do projeto**:
   ```bash
   cd backend-operacoes
   ```

3. **Instale as dependências**:
   Se você estiver usando Maven, rode o seguinte comando para instalar todas as dependências do projeto:
   ```bash
   mvn clean install
   ```

4. **Configure o arquivo `application.properties`**:
   O arquivo `src/main/resources/application.properties` pode ser ajustado conforme necessário. Para a execução local, você pode usar o banco de dados embutido H2 ou configurar um outro banco de dados.

5. **Execute a aplicação**:
   Para rodar a aplicação, use o comando abaixo:
   ```bash
   mvn spring-boot:run
   ```
   A API estará disponível em `http://localhost:8080`.

## Observações

- Esta aplicação utiliza um serviço REST e retorna dados em formato JSON.
- Para acessar os endpoints via **Postman** ou outra ferramenta de API, configure as URLs conforme os exemplos mencionados acima.
