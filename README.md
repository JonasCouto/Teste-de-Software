# Teste-de-Software
Teste de Software simula um formulário que envia os dados do front-end para o back-end por um arquivo JSON 

Prova Técnica de Automação de Testes
Este projeto foi desenvolvido com o objetivo de automatizar testes de interface utilizando Cypress e JavaScript.

Instalação
Faça o clone do repositório: git clone https://github.com/JonasCouto/Teste-de-Software.git

Instalação do Cypress
Para instalar o Cypress, você precisará ter o Node.js e o npm (gerenciador de pacotes do Node.js) instalados. Em seguida, execute o seguinte comando:


```npm install cypress --save-dev```

Estrutura base do projeto:

- A pasta cypress contém todos os arquivos relacionados à configuração e execução dos testes.
- A pasta fixtures contém arquivos de dados utilizados nos testes.
- A pasta e2e contém os arquivos de teste em si.
- A pasta support contém arquivos de configuração e hooks de execução dos testes.
- O arquivo cypress.config.js contém a configuração do Cypress.
- O arquivo package.json contém as dependências do projeto.

Execução dos testes
Para executar os testes, use o seguinte comando:

Copy code
```npx cypress run```
Você também pode abrir o painel do Cypress usando o comando:

Copy code
```npx cypress open```


