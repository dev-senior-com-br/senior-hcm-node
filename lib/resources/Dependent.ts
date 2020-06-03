import HCMApi from "../HCMApi";
import RequestClient from "../base/RequestClient";
import { HttpMethod } from "../model/HttpMethod";
import DependentIn from "../model/dependent/DependentIn";
import DependentListIn from "../model/dependent/DependentListIn";

export default class Dependent extends RequestClient {
    private _client: RequestClient;

    constructor(hcmApi: HCMApi) {
        super(hcmApi);
    }

    dependentQuery = (dependentQueryIn: DependentIn) => {
        let dependentQueryInJSON = JSON.parse(dependentQueryIn.toJsonString());
        const clientOptions = {
            url: "/rest/hcm/dependent/queries/dependentQuery",
            method: HttpMethod.POST,
            data: dependentQueryInJSON
            ,
            headers: {
                authorization: this.seniorApi.accessToken
            }
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
                authorization: this.seniorApi.accessToken
            }
        };
        return this.request(clientOptions);
    };
}