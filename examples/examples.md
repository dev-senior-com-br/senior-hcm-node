## Documentaçao para os exemplos

Neste documento é definido os requisitos minimos para conseguir rodar os exemplos e como rodar eles.

### Definindo envs

Para definir as variáveis de ambiente definidos em alguns dos exemplos desse projeto, você precisa configurar de uma das seguintes formas:

Criando arquivo `.env` na raiz do projeto com o padrão abaixo

```
NOME_DA_VARIAVEL=VALOR_DA_VARIAVEL
PROXIMA_VARIAVEL=VALOR_PROXIMA_VARIAVEL
```

Adicionando envs pelo `bash` no terminal ou um arquivo `.sh`:

```bash
export NOME_DA_VARIAVEL="VALOR_DA_VARIAVEL"
export PROXIMA_VARIAVEL="VALOR_PROXIMA_VARIAVEL"
```

Adicionando envs pelo `cmd`:

```bat
SET NOME_DA_VARIAVEL=VALOR_DA_VARIAVEL
SET PROXIMA_VARIAVEL=VALOR_PROXIMA_VARIAVEL
```

Também é possivel alterar os valores pelo próprio arquivo `.js` ou `.ts`, conforme exemplo abaixo:

Nesse trecho de código o exemplo está pegando os valores da variavel de ambiente:

```js
var username = process.env.SENIOR_USERNAME;
var password = process.env.PASS;
var tenantName = process.env.TENANT_NAME;
```

No trecho abaixo foi alterado o exemplo para que seja passado diretamente os valores em vez de pegar da variável de ambiente:

```js
var username = 'username';
var password = 'pass';
var tenantName = 'tenant_name';
```

### Exemplos

Abaixo a listagem de exemplos que podem ser executados neste projeto. Em cada seção é informado o comando a ser executado a partir da pasta root do projeto e as variáveis de ambientes necessárias.

#### Dependent

```bash
node examples/dependent.js
```

```
USERNAME=
PASS=
DEPENDENT_ID=
EMPLOYEE_ID=
```

#### Entidade

```bash
node examples/entidade.ts
```

```
USERNAME=
PASS=
```

#### Payroll

```bash
npm run ts-node examples/payroll.js
```

```
USERNAME=
PASS=
EMPLOYEE_ID=
```

#### Ponto Mobile

```bash
node examples/pontomobile.ts
```

```
USERNAME=
PASS=
```

#### Recruitment

```bash
node examples/recruitment.js
```

```
USERNAME=
PASS=
VACANCY_ID=
```
