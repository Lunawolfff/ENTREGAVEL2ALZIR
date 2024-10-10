package com.backend_trabalho.Trabalho.service;

import org.springframework.stereotype.Service;

@Service
public class OperacoesService {

    public String contagemAprovados(int quantidade, int[] notas) {
        int aprovados = 0;
        for (int nota : notas) {
            if (nota >= 50) aprovados++;
        }
        return "Total de alunos: " + quantidade + ", Aprovados: " + aprovados;
    }

    public String fibonacci(int termos) {
        int a = 0, b = 1, i = 2;
        StringBuilder resultado = new StringBuilder(a + ", " + b);
        while (i < termos) {
            a = a + b;
            b = a + b;
            i += 2;
            resultado.append(", ").append(a).append(", ").append(b);
        }
        return resultado.toString();
    }

    public String mdc(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return "MDC: " + a;
    }

    public String numeroPrimo(int numero) {
        if (numero <= 1) return numero + " não é primo";
        for (int i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i == 0) return numero + " não é primo";
        }
        return numero + " é primo";
    }

    public String ordenacao(int[] vetor) {
        for (int i = 0; i < vetor.length - 1; i++) {
            for (int j = i + 1; j < vetor.length; j++) {
                if (vetor[i] > vetor[j]) {
                    int temp = vetor[i];
                    vetor[i] = vetor[j];
                    vetor[j] = temp;
                }
            }
        }
        return "Vetor ordenado: " + java.util.Arrays.toString(vetor);
    }

    public String somador(int[] numeros) {
        int soma = 0;
        for (int num : numeros) {
            soma += num;
        }
        return "Soma total: " + soma;
    }
}
