package com.ads.lojinha;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/clientes")
public class ClienteController {

    @GetMapping
    public List<Cliente> buscarClientes() {
        var obj1 = new Cliente();
        obj1.setId(1);
        obj1.setNome("Cliente 1");
        obj1.setEmail("cliente1@email.com");
        obj1.setTelefone("123456789");
        obj1.setAtivo(true);

        return List.of(obj1);
    }

    @GetMapping("/{id}")
    public Cliente buscarCliente(@PathVariable int id) {
        var cliente = new Cliente();
        cliente.setId(id);
        cliente.setNome("Cliente " + id);
        cliente.setEmail("cliente" + id + "@email.com");
        cliente.setTelefone("123456789");
        cliente.setAtivo(true);
        return cliente;
    }

    @PostMapping
    public String cadastrarCliente(@RequestBody Cliente cliente) {
        return "Cliente gravado: " + cliente.getNome();
    }

    @PutMapping("/{id}")
    public String atualizarCliente(@PathVariable int id, @RequestBody Cliente cliente) {
        return "Cliente atualizado: " + id + " - " + cliente.getNome();
    }

    @DeleteMapping("/{id}")
    public String deletarCliente(@PathVariable int id) {
        return "Cliente deletado: " + id;
    }
}
