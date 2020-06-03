import RequestClient from "../base/RequestClient";
import { HCMApi } from "../..";
import { HttpMethod } from "../model/HttpMethod";
import EmployeeIn from "../model/employee/EmployeeIn";

export default class Payroll extends RequestClient {
    private _client: RequestClient;

    constructor(hcmApi: HCMApi) {
        super(hcmApi);
    }

    employeeQuery = (employeeIn: EmployeeIn) => {
        let employeeInJSON = JSON.parse(employeeIn.toJsonString());
        const clientOptions = {
            url: "/rest/hcm/payroll/queries/employeeQuery",
            method: HttpMethod.POST,
            data: employeeInJSON,
            headers: {
                authorization: this.seniorApi.accessToken
            }
        };
        return this.request(clientOptions);
    };
}