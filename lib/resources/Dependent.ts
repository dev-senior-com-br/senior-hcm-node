import HCMApi from "../HCMApi";
import DependentIn from "../model/dependent/DependentIn";
import DependentListIn from "../model/dependent/DependentListIn";
import RequestClient from "@seniorsistemas/senior-core/dist/lib/base/RequestClient";
import { HttpMethod } from "@seniorsistemas/senior-core/dist/lib/model/HttpMethod";

export default class Dependent extends RequestClient {
  private _client: RequestClient;
  seniorApi: any;

  constructor(hcmApi: HCMApi) {
    super(hcmApi, "hcm", "dependent");
  }

  dependentQuery = (dependentQueryIn: DependentIn) => {
    let dependentQueryInJSON = JSON.parse(dependentQueryIn.toJsonString());
    const clientOptions = {
      url: "/rest/hcm/dependent/queries/dependentQuery",
      method: HttpMethod.POST,
      data: dependentQueryInJSON,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  };

  dependentListQuery = (dependentListQuery: DependentListIn) => {
    let dependentListQueryJSON = JSON.parse(dependentListQuery.toJsonString());
    const clientOptions = {
      url: "/rest/hcm/dependent/queries/dependentListQuery",
      method: HttpMethod.POST,
      data: dependentListQueryJSON,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  };
}
