import EmployeeIn from '../model/employee/EmployeeIn';
import { RequestClient, HttpMethod, RequestReturn, SeniorApi } from '@seniorsistemas/senior-core';
import HCMApi from '../HCMApi';

export default class Payroll extends RequestClient {
  #seniorApi: SeniorApi;

  constructor(hcmApi: HCMApi) {
    super(hcmApi, 'hcm', 'payroll');
  }

  employeeQuery(employeeIn: EmployeeIn): Promise<RequestReturn> {
    const employeeInJSON = JSON.parse(employeeIn.toJsonString());
    const clientOptions = {
      url: this.getUrlPath('queries/employeeQuery'),
      method: HttpMethod.POST,
      data: employeeInJSON,
      headers: {
        authorization: this.#seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }
}
