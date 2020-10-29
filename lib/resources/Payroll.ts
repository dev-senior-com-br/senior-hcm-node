import { RequestClient, HttpMethod, RequestReturn } from '@seniorsistemas/senior-core';
import HCMApi from '../HCMApi';
import { EmployeeQueryDTO } from 'lib/dto/Payroll';

export default class Payroll extends RequestClient {

  constructor(hcmApi: HCMApi) {
    super(hcmApi, 'hcm', 'payroll');
  }

  employeeQuery(employeeIn: EmployeeQueryDTO): Promise<RequestReturn> {
    const clientOptions = {
      url: this.getUrlPath('queries/employeeQuery'),
      method: HttpMethod.POST,
      data: employeeIn,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }
}
