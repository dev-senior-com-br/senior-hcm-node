# Senior API SDK para Node.js

Esta biblioteca permite desenvolvedores criar integrações com API HCM da Senior. 
Você pode ler a documentação completa:
 [Dependent](https://dev.senior.com.br/apis/hcm_dependent/)
 [Recruitment](https://dev.senior.com.br/apis/hcm_recruitment/)
 [Payroll](https://dev.senior.com.br/apis/hcm_payroll/)
 
## Versão suportada do Node.js

A SDK suporta o Node.js na versão 10 ou superior.
 
## Instalação
```
npm i @seniorsistemas/senior-hcm --save-dev
```

## Ambiente
Atualmente o ambiente padrão para o desenvolvimento é o da Homologx.

## Fontes
```sh
$ git clone https://github.com/dev-senior-com-br/senior-hcm-node.git
$ cd senior-hcm-node
$ npm install
```

### Configurações
Os comando abaixo permitem configuração de proxy:
 - npm config set proxy <ALTERAR_PARA_PROXY_HTTP>
 - npm config set https-proxy <ALTERAR_PARA_PROXY_HTTPS>

_Criar arquivo *.env* na raíz do projeto_

#### _Adicionar ao arquivo as seguintes propriedades_ 
```text
 SENIOR_USERNAME = <NOME_DO_USUARIO>
 PASS = <SENHA_DO_USUARIO>
 TENANT_NAME = <NOME_DO_TENANT>
```

### Iniciando a utilização

Primeiro você precisa criar um arquivo `.js`, como por exemplo: `authentication-example.js`, e nele requerer a biblioteca.

```javascript
var SeniorApi = require('../senior-hcm-node/index').default;
```

Então você precisa criar instância informando usuário e senha.

```javascript
var api = new SeniorApi(username, password);
```

### Exemplos
Na pasta [examples](https://github.com/dev-senior-com-br/senior-hcm-node/tree/develop/examples) você encontrar alguns exemplos.
Para executa-los, entrar na pasta examples, executar a instalação das dependencias:
```
npm install
```

Alterear os valores das variáveis e executar conforme o comando abaixo:
```
node <teste>-example
``` 

Alguns exemplos necessitam de propriedades específicas, descritas no inicio dos arquivos. Como o `user-example`:
```
...
//Propriedades necessárias:
var creation_username = "<Username do novo usuário>";
var creation_fullName = "<Nome completo>";
var creation_email = "<Email do novo usuário>";
var creation_password = "<Senha do novo usuário>";
var creation_locale = "<Locale do usuário (exemplo: pt-BR)>";
var changed_fullName = "<Nome completo para alteração do usuário>";
var tenantName = "<Nome do tenant>";
var group_name =  "<Nome do novo grupo>";
var group_description = "<Descrição do grupo>";
...
```


### Links
* [Documentação da API](https://dev.senior.com.br/api/platform/)


## Obtendo versão de distribuição
Última versão disponível em [https://www.npmjs.com/package/@seniorsistemas/senior-hcm](https://www.npmjs.com/package/@seniorsistemas/senior-hcm)

## Suporte

Criar uma issue [https://github.com/dev-senior-com-br/senior-hcm-node/issues](https://github.com/dev-senior-com-br/senior-hcm-node/issues)

### License

Copyright © 2020.
