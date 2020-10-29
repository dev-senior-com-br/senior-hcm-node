require('dotenv').config();
import { HCMApi } from '../dist';
import { Entity } from '@seniorsistemas/senior-core/dist/lib/base/Entity';
import { Vacancy } from '../dist/lib/model/vacancy';

const USERNAME = process.env.SENIOR_USERNAME;
const PASS = process.env.PASS;

const api = new HCMApi();
api.authentication
  .login(USERNAME, PASS)
  .then(async json => {
    api.accessToken = JSON.parse(json.body.jsonToken).access_token;
    let entity: Entity<Vacancy> = api.getEntity('hcm', 'recruitment', 'vacancy');
    const vacancy: Vacancy = {
      description: 'descricao de vaga',
      justification: 'justificativa de vaga',
      reason: 'STAFF_INCREASE',
      title: 'titulo da vaga',
    };
    const { body: respBody } = await entity.post(vacancy);
    console.log(respBody);
    try {
      const { body } = await entity.get(respBody.id);
      console.log(body);
    } catch (error) {
      console.error(error.body);
    }
    console.log({
      ...vacancy,
      title: 'Novo titulo de vaga'
    })
    const { body: respPut } = await entity.put(respBody.id, {
      ...vacancy,
      title: 'Novo titulo de vaga',
      id: respBody.id
    });
    console.log(respPut);
    const { body: respDelete } = await entity.delete(respBody.id);
    console.log(respDelete);
    if (api.accessToken) {
      api.authentication.logout().catch(function (error) {
        console.error('Erro na tentativa de efetuar logout: ', error);
      });
    }
  })
  .catch(function (error) {
    console.error('Erro na tentativa de efetuar login: ', error);
  });
