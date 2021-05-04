# Testes com Cypress

## Projeto original utilizando Cypress, VS e NodeJs

**Conteúdo dos testes, por ordem:**

1. Primeiro teste produzido foi Teste.js que visa testar o acesso à uma página e verificar o conteúdo do carrinho de compras.
2. Segundo teste produzido sample_spec.js que tem por objetivo testar o commands.js acessando uma página, digitando um e-mail e verificando o campo digitado.
3. Terceiro teste produzido foi signIn.js que acessa a página e faz um teste de Sign in, esperando um erro e verificando o erro apresentado.
4. Quarto teste produzido foi GenCPF.js que acessa a página, gera um CPF aleatório e verifica se ele é válido. 

**Para iniciar os testes, execute um dos seguintes comandos no terminal do VS Code no diretório do projeto:**

- Para executar os testes via terminal: *npx cypress run*
- Para executar os testes via browser: *npx cypress open*
