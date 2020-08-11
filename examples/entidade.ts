require("dotenv").config({
  path: "../.env",
});
import { HCMApi } from "../dist";
import { Entity } from "@seniorsistemas/senior-core/dist/lib/base/Entity";
import { Vacancy } from "../dist/lib/model/vacancy";

const username = process.env.SENIOR_USERNAME;
const password = process.env.PASS;

var api = new HCMApi();
api.authentication
  .login(username, password)
  .then(async (json) => {
    api.accessToken = JSON.parse(json.body.jsonToken).access_token;
    let entity: Entity<Vacancy> = api.getEntity(
      "hcm",
      "recruitment",
      "vacancy"
    );
    const { body } = await entity.get();
    console.log(body);
    const vacancy: Vacancy = {
      description: "descricao de vaga",
      justification: "justificativa de vaga",
      reason: "razao da vaga",
      title: "titulo da vaga",
    };
    const { body: respBody } = await entity.post(vacancy);
    console.log(respBody);
    if (api.accessToken) {
      api.authentication.logout().catch(function (error) {
        console.error("Erro na tentativa de efetuar logout: ", error);
      });
    }
  })
  .catch(function (error) {
    console.error("Erro na tentativa de efetuar login: ", error);
  });
