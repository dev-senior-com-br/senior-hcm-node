import EmployeeIn from "../model/employee/EmployeeIn";
import RequestClient from "@seniorsistemas/senior-core/dist/lib/base/RequestClient";
import HCMApi from "../HCMApi";
import { HttpMethod } from "@seniorsistemas/senior-core/dist/lib/model/HttpMethod";

export default class Payroll extends RequestClient {
  private _client: RequestClient;
  seniorApi: any;

  constructor(hcmApi: HCMApi) {
    super(hcmApi, "hcm", "payroll");
  }

  employeeQuery = (employeeIn: EmployeeIn) => {
    let employeeInJSON = JSON.parse(employeeIn.toJsonString());
    const clientOptions = {
      url: "/rest/hcm/payroll/queries/employeeQuery",
      method: HttpMethod.POST,
      data: employeeInJSON,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  };
}
