import HCMApi from '../HCMApi';
import { RequestClient, HttpMethod, RequestReturn } from '@seniorsistemas/senior-core';
import { DependentQueryDTO, DependentListQueryDTO } from '../dto/Dependent';

export default class Dependent extends RequestClient {
  constructor(hcmApi: HCMApi) {
    super(hcmApi, 'hcm', 'dependent');
  }

  dependentQuery(dependentQueryIn: DependentQueryDTO): Promise<RequestReturn> {
    const clientOptions = {
      url: this.getUrlPath('queries/dependentQuery'),
      method: HttpMethod.POST,
      data: dependentQueryIn,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  dependentListQuery(dependentListQuery: DependentListQueryDTO): Promise<RequestReturn> {
    const clientOptions = {
      url: this.getUrlPath('queries/dependentListQuery'),
      method: HttpMethod.POST,
      data: dependentListQuery,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }
}
