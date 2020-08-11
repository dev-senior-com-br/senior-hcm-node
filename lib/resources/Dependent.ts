import HCMApi from '../HCMApi';
import DependentIn from '../model/dependent/DependentIn';
import DependentListIn from '../model/dependent/DependentListIn';
import { RequestClient, SeniorApi, HttpMethod, RequestReturn } from '@seniorsistemas/senior-core';

export default class Dependent extends RequestClient {
  #seniorApi: SeniorApi;

  constructor(hcmApi: HCMApi) {
    super(hcmApi, 'hcm', 'dependent');
  }

  dependentQuery(dependentQueryIn: DependentIn): Promise<RequestReturn> {
    const dependentQueryInJSON = JSON.parse(dependentQueryIn.toJsonString());
    const clientOptions = {
      url: '/rest/hcm/dependent/queries/dependentQuery',
      method: HttpMethod.POST,
      data: dependentQueryInJSON,
      headers: {
        authorization: this.#seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  dependentListQuery(dependentListQuery: DependentListIn): Promise<RequestReturn> {
    const dependentListQueryJSON = JSON.parse(
      dependentListQuery.toJsonString()
    );
    const clientOptions = {
      url: '/rest/hcm/dependent/queries/dependentListQuery',
      method: HttpMethod.POST,
      data: dependentListQueryJSON,
      headers: {
        authorization: this.#seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }
}
