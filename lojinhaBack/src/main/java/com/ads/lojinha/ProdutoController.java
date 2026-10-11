package com.ads.lojinha;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/produtos")
public class ProdutoController {

    @GetMapping
    public List<Produto> buscarProdutos() {
        var obj = new Produto();
        obj.setId(1);
        obj.setNome("Produto 1");
        obj.setDescricao("Descrição do produto");
        obj.setPreco(100.0);
        obj.setValorPromo(80.0);
        obj.setQuantidade(10);
        obj.setDestaque(1);

        return List.of(obj);
    }

    @GetMapping("/{id}")
    public Produto buscarProduto(@PathVariable int id) {
        var obj = new Produto();
        obj.setId(id);
        obj.setNome("Produto " + id);
        obj.setDescricao("Descrição do produto");
        obj.setPreco(100.0);
        obj.setValorPromo(80.0);
        obj.setQuantidade(10);
        obj.setDestaque(1);

        return obj;
    }

    @PostMapping
    public String cadastrarProduto(@RequestBody Produto produto) {
        return "Produto gravado: " + produto.getNome();
    }

    @PutMapping("/{id}")
    public String atualizarProduto(@PathVariable int id, @RequestBody Produto produto) {
        return "Produto atualizado: " + id + " - " + produto.getNome();
    }

    @DeleteMapping("/{id}")
    public String deletarProduto(@PathVariable int id) {
        return "Produto deletado: " + id;
    }
}
