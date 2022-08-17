# SDK Descontinuada!

Caso julgue necessário o uso de uma SDK, sugerimos a utilização de geradores código a partir do swagger de cada API via ferramenta https://editor.swagger.io/ (Opção Generate Client)

<hr />
<strike>
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
npm i @seniorsistemas/senior-hcm --save
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

Primeiro você precisa criar um arquivo `.js`, como por exemplo: `recruitment.js`, e nele requerer a biblioteca.

```javascript
const HCMApi = require('@seniorsistemas/senior-hcm');
```

Então você precisa criar instância informando usuário e senha.

```javascript
const api = new HCMApi(username, password);
```

Mudando o ambiente:

```javascript
const { ENVIRONMENTS } = require('@seniorsistemas/senior-core');
api.setEnvironment(ENVIRONMENTS.PROD);
```

### Exemplos
Na pasta [examples](https://github.com/dev-senior-com-br/senior-hcm-node/tree/develop/examples) você encontrar alguns exemplos.
Para executa-los, basta rodar o comando abaixo com o nome do arquivo (substituir a chave <nome_arquivo>).
```
node examples/<nome_arquivo>.js
``` 

Para rodar arquivos `.ts` é necessário instalar o pacote `ts-node` globalmente (`npm i -g ts-node`) e executar o exemplo conforme abaixo.

```
ts-node examples/<nome_arquivo>.ts
```

Alguns exemplos necessitam de propriedades específicas, descritas no inicio dos arquivos. Para configurar basta criar um arquivo no root do projeto chamado `.env` contendo chave=valor para cada variavel de ambiente que o exemplo necessita.
Exemplo:
No arquivo `examples/recruitment.js` usamos a variavel de ambiente: `process.env.SENIOR_USERNAME`, sendo assim no arquivo `.env` você vai colocar o seguinte:
```
SENIOR_USERNAME=<seu_usuario_da_plataforma>
PASS=<seu_password_da_plataforma>
```

Essa configuração é igual ao colocar variáveis de ambiente, o `.env` é só um falicitador para o node.

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

### Entidades

Para utilizar as entidades é necessário chamar o metódo `getEntity` da api passando por parâmetro o domínio, serviço e a entidade.

```javascript
const entity: Entity<Vacancy> = api.getEntity("hcm", "recruitment", "vacancy");
entity.get().then(resp => console.log(resp.body));

// Caso seja necessário utilizar a classe de filtro
String filter = new FilterBuilder().field("id").equals("60B3957C72C44E00A9739451B07265C3").build();
// O mesmo terá como retorno o seguinte : ?filter=id eq '60B3957C72C44E00A9739451B07265C3'
```

## Obtendo versão de distribuição
Última versão disponível em [https://www.npmjs.com/package/@seniorsistemas/senior-hcm](https://www.npmjs.com/package/@seniorsistemas/senior-hcm)

## [Guia de contribuição](https://dev.senior.com.br/guia-de-contribuicao/)

## Suporte

Criar uma issue [https://github.com/dev-senior-com-br/senior-hcm-node/issues](https://github.com/dev-senior-com-br/senior-hcm-node/issues)

## License

Copyright © 2020.
</strike>
