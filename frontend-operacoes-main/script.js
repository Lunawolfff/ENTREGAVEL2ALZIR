function contagemAprovados() {
    let n = prompt("Quantidade de alunos: ");
    let i = 0;
    let cont = 0;
    let resultado = "";
    while(i < n){
        let nota = prompt("Nota do aluno:");
        if(nota >= 50){
            cont++;
        }
        i++;
    }
    resultado += `São ${n} alunos no total<br>`;
    resultado += `São ${cont} alunos aprovados<br>`;
    document.getElementById("result").innerHTML = resultado;
}

function fibonacci() {
    let a = 0, b = 1, i = 2;
    let n = prompt("Digite a quantidade de termos: ");
    let resultado = `${a}, ${b}`;
    while(i < n){
        a = a + b;
        b = a + b;
        i += 2;
        resultado += `, ${a}, ${b}`;
    }
    if(i == n){
        resultado += `, ${a}, ${b}`;
    } else {
        resultado += `, ${a}`;
    }
    document.getElementById("result").innerHTML = resultado;
}

function mdc() {
    let mdc = 0;
    let a = prompt("Digite o primeiro número: ");
    let b = prompt("Digite o segundo número: ");
    let resultado = "";

    if(a % b === 0 || b % a === 0){
        if(a > b){
            resultado = "O MDC é: " + a;
        } else {
            resultado = "O MDC é: " + b;
        }
    } else {
        mdc = a * b;
        resultado = "O MDC é: " + mdc;
    }
    document.getElementById("result").innerHTML = resultado;
}

function numeroPrimo() {
    let a = prompt("Digite um número: ");
    let resultado = "";

    if(a != 1){
        if(a % 2 != 0 || a == 2){
            resultado = "O número " + a + " é primo";
        } else {
            resultado = "O número " + a + " não é primo";
        }
    } else {
        resultado = "O número " + a + " não é primo";
    }
    document.getElementById("result").innerHTML = resultado;
}

function ordenacao() {
    let n = prompt("Quantos números terá o vetor?");
    let vetor = [];
    let resultado = "Vetor original: ";

    for(let i = 0; i < n; i++){
        vetor[i] = prompt("Digite o " + (i+1) + "° valor: ");
    }

    resultado += vetor.join(", ") + "<br>";
    resultado += "Vetor ordenado: ";

    for(let i = 0; i < vetor.length; i++){
        for(let j = 0; j < vetor.length; j++){
            if(vetor[i] < vetor[j]){
                let aux = vetor[i];
                vetor[i] = vetor[j];
                vetor[j] = aux;
            }
        }
    }
    resultado += vetor.join(", ");
    document.getElementById("result").innerHTML = resultado;
}

function somador() {
    let n = prompt("Quantos números deseja somar?");
    let numero = 0;
    let resultado = "";
    
    for (let i = 0; i < n; i++) {
        numero += parseFloat(prompt("Digite o número:"));
    }
    resultado = "A soma é: " + numero;
    document.getElementById("result").innerHTML = resultado;
}

function trocaVariaveis() {
    let a = 10, b = 20, aux = 0;
    let resultado = "";

    resultado += "Valor a: " + a + "<br>";
    resultado += "Valor b: " + b + "<br>";
    resultado += "Valor aux: " + aux + "<br>";
    
    aux = a;
    a = b;
    b = aux;

    resultado += "Valor a: " + a + "<br>";
    resultado += "Valor b: " + b + "<br>";
    resultado += "Valor aux: " + aux;
    
    document.getElementById("result").innerHTML = resultado;
}
