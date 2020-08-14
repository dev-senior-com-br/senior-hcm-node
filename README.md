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
Para fazer a troca do ambiente basta chamar o metodo `setEnvironment` ou `setUrl` caso queira passar uma url da plataforma diferente das configuradas:

```javascript
export enum ENVIRONMENTS {
  DEV = 'https://platform-homologx.senior.com.br/t/senior.com.br/bridge/1.0',
  PROD = 'https://api.senior.com.br',
}
```

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

Mudando o ambiente:

```javascript
const { ENVIRONMENTS } = require('@seniorsistemas/senior-core');
api.setEnvironment(ENVIRONMENTS.PROD);
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

#### Exemplos implementados

* [Dependent](examples/dependent.js)
* [Entidade](examples/entidade.ts)
* [Payroll](examples/payroll.js)
* [Recruitment](examples/recruitment.js)

#### Entidades do Recruitment

* Currículo - [resume.ts](lib/model/recruitment/resume.ts)
* Contato telefônico (Currículo) - [resumePhoneContact.ts](lib/model/recruitment/resumePhoneContact.ts)
* Educação (Currículo) - [educationSection.ts](lib/model/recruitment/rducationSection.ts)
* Experiência profissional (Currículo) - [professionalExperienceSection.ts](lib/model/recruitment/professionalExperienceSection.ts)
* Vaga de emprego - [vacancy.ts](lib/model/recruitment/vacancy.ts)
* Processo seletivo do candidato - [recruitmentProcess.ts](lib/model/recruitment/recruitmentProcess.ts)
* Etapa do processo seletivo do candidato - [recruitmentProcessStage.ts](lib/model/recruitment/recruitmentProcessStage.ts)
* Compromisso do processo seletivo - [appointment.ts](lib/model/recruitment/appointment.ts)

#### Entidades do Payroll

* Histórico de natureza de despesa - [historicalExpenseNature.ts](lib/model/payroll/historicalExpenseNature.ts)
* Histórico de movimentação de um colaborador - [movimentation.ts](lib/model/payroll/movimentation.ts)
* Vínculo do telefone de contato com a pessoa - [personphonecontact.ts](lib/model/payroll/personphonecontact.ts)
* Documentação de uma pessoa - [document.ts](lib/model/payroll/document.ts)
* Histórico de sindicato - [syndicate.ts](lib/model/payroll/syndicate.ts)
* Aviso Prévio - [priorNotice.ts](lib/model/payroll/priorNotice.ts)
* Histórico de posto de trabalho - [historicalJobPosition.ts](lib/model/payroll/historicalJobPosition.ts)
* Histórico de afastamento - [historicalleave.ts](lib/model/payroll/historicalleave.ts)
* Histórico de horário - [historicalWorkshift.ts](lib/model/payroll/historicalWorkshift.ts)
* Tipo de atuação - [actingtype.ts](lib/model/payroll/actingtype.ts)
* Estrutura do posto de trabalho - [workstationgroupstructure.ts](lib/model/payroll/workstationgroupstructure.ts)
* Pessoa - [person.ts](lib/model/payroll/Person.ts)
* Histórico de centro de custo - [historicalCostCenter.ts](lib/model/payroll/historicalCostCenter.ts)
* Vínculo do colaborador - [historicalEmploymentRelationship.ts](lib/model/payroll/historicalEmploymentRelationship.ts)
* Histórico de categoria do eSocial - [historicalEsocialCategory.ts](lib/model/payroll/historicalEsocialCategory.ts)
* Outros contratos - [otherContract.ts](lib/model/payroll/otherContract.ts)
* Telefone de contato - [phonecontact.ts](lib/model/payroll/phonecontact.ts)
* Local de trabalho - [department.ts](lib/model/payroll/department.ts)
* Endereço de email da pessoa - [Email.ts](lib/model/payroll/email.ts)
* Conta bancária - [account.ts](lib/model/payroll/account.ts)

#### Entidades do Dependent

* Dependente - [dependent.ts](lib/model/dependent/dependent.ts)
* Tutela - [tutelage.ts](lib/model/dependent/tutelage.ts)
* Auxílio creche - [childcareAssistance.ts](lib/model/dependent/childcareAssistance.ts)
* Salário família - [familySalary.ts](lib/model/dependent/familySalary.ts)
* Documento do salário família - [familySalaryDocument.ts](lib/model/dependent/familySalaryDocument.ts)
* Dependente do imposto de renda - [dependentIncomeTax.ts](lib/model/dependent/dependentIncomeTax.ts)
* Dependente do plano saúde - [dependentHealthInsurance.ts](lib/model/dependent/dependentHealthInsurance.ts)
* Pensão judicial - [judicialPension.ts](lib/model/dependent/judicialPension.ts)

### Links
* [Documentação da API](https://dev.senior.com.br/api/platform/)


## Obtendo versão de distribuição
Última versão disponível em [https://www.npmjs.com/package/@seniorsistemas/senior-hcm](https://www.npmjs.com/package/@seniorsistemas/senior-hcm)

## Suporte

Criar uma issue [https://github.com/dev-senior-com-br/senior-hcm-node/issues](https://github.com/dev-senior-com-br/senior-hcm-node/issues)

### License

Copyright © 2020.
