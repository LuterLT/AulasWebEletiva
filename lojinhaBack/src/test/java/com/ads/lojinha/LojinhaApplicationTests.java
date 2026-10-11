package com.ads.lojinha;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(controllers = {ClienteController.class, ProdutoController.class})
class LojinhaApplicationTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void deveListarClientes() throws Exception {
        mockMvc.perform(get("/api/clientes"))
                .andExpect(status().isOk());
    }

    @Test
    void deveBuscarClientePorId() throws Exception {
        mockMvc.perform(get("/api/clientes/1"))
                .andExpect(status().isOk());
    }

    @Test
    void deveListarProdutos() throws Exception {
        mockMvc.perform(get("/api/produtos"))
                .andExpect(status().isOk());
    }

    @Test
    void deveCriarProduto() throws Exception {
        String payload = "{\"nome\":\"Notebook\",\"descricao\":\"Dell\",\"preco\":2500.0,\"valorPromo\":2200.0,\"quantidade\":5,\"destaque\":1}";

        mockMvc.perform(post("/api/produtos")
                .contentType(MediaType.APPLICATION_JSON)
                .content(payload))
                .andExpect(status().isOk());
    }
}
