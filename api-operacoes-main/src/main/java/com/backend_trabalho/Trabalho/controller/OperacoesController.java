package com.backend_trabalho.Trabalho.controller;

import com.backend_trabalho.Trabalho.service.OperacoesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/operacoes")
@CrossOrigin(origins = "*") // Permite requisições de qualquer origem
public class OperacoesController {

    @Autowired
    private OperacoesService operacoesService;

    @GetMapping("/contagem-aprovados")
    public String contagemAprovados(@RequestParam int quantidade, @RequestParam int[] notas) {
        return operacoesService.contagemAprovados(quantidade, notas);
    }

    @GetMapping("/fibonacci")
    public String fibonacci(@RequestParam int termos) {
        return operacoesService.fibonacci(termos);
    }

    @GetMapping("/mdc")
    public String mdc(@RequestParam int a, @RequestParam int b) {
        return operacoesService.mdc(a, b);
    }

    @GetMapping("/numero-primo")
    public String numeroPrimo(@RequestParam int numero) {
        return operacoesService.numeroPrimo(numero);
    }

    @PostMapping("/ordenacao")
    public String ordenacao(@RequestBody int[] vetor) {
        return operacoesService.ordenacao(vetor);
    }

    @PostMapping("/somador")
    public String somador(@RequestBody int[] numeros) {
        return operacoesService.somador(numeros);
    }

    @GetMapping("/troca-variaveis")
    public String trocaVariaveis(@RequestParam int a, @RequestParam int b) {
        return "A: " + b + ", B: " + a;
    }
}


