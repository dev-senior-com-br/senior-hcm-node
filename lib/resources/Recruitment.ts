import RequestClient from "@seniorsistemas/senior-core/lib/base/RequestClient";
import VacanciesIn from "../model/recruitment/VacanciesIn";
import { HttpMethod } from "@seniorsistemas/senior-core/lib/model/HttpMethod";
import HCMApi from "../HCMApi";

export default class Recruitment extends RequestClient {
    private _client: RequestClient;

    constructor(hcmApi: HCMApi) {
        super(hcmApi);
    }

    /* postVacancy = (vacancy : Vacancy) => {
         return this.seniorApi.getEntity('hcm', 'recruitment', 'vacancy').post(vacancy);
     }*/

    listVacancies = (vacanciesIn: VacanciesIn) => {
        let vacanciesJSON = JSON.stringify(vacanciesIn);
        const clientOptions = {
            url: "/rest/platform/hcm/recruitment/queries/listVacancies",
            method: HttpMethod.POST,
            data: {
                vacanciesJSON
            },
            headers: {
                authorization: this.seniorApi.accessToken
            }
        };
        return this.request(clientOptions);
    };

    vacancyDetails = (vacanciesIn: VacanciesIn) => {
        let vacanciesJSON = JSON.stringify(vacanciesIn);
        const clientOptions = {
            url: "/rest/platform/hcm/recruitment/queries/vacancyDetails",
            method: HttpMethod.POST,
            data: {
                vacanciesJSON
            },
            headers: {
                authorization: this.seniorApi.accessToken
            }
        };
        return this.request(clientOptions);
    };

    vacancyDetailsSummary = (vacanciesIn: VacanciesIn) => {
        let vacanciesJSON = JSON.stringify(vacanciesIn);
        const clientOptions = {
            url: "/rest/platform/hcm/recruitment/queries/vacancyDetailsSummary",
            method: HttpMethod.POST,
            data: {
                vacanciesJSON
            },
            headers: {
                authorization: this.seniorApi.accessToken
            }
        };
        return this.request(clientOptions);
    };

    searchPersons = (vacanciesIn: VacanciesIn) => {
        let vacanciesJSON = JSON.stringify(vacanciesIn);
        const clientOptions = {
            url: "/rest/platform/hcm/recruitment/queries/searchPersons",
            method: HttpMethod.POST,
            data: {
                vacanciesJSON
            },
            headers: {
                authorization: this.seniorApi.accessToken
            }
        };
        return this.request(clientOptions);
    };

    dependentQuery = (vacanciesIn: VacanciesIn) => {
        let vacanciesJSON = JSON.stringify(vacanciesIn);
        const clientOptions = {
            url: "/rest/platform/hcm/dependent/queries/dependentQuery",
            method: HttpMethod.POST,
            data: {
                vacanciesJSON
            },
            headers: {
                authorization: this.seniorApi.accessToken
            }
        };
        return this.request(clientOptions);
    };

    dependentListQuery = (vacanciesIn: VacanciesIn) => {
        let vacanciesJSON = JSON.stringify(vacanciesIn);
        const clientOptions = {
            url: "/rest/platform/hcm/dependent/queries/dependentQuery",
            method: HttpMethod.POST,
            data: {
                vacanciesJSON
            },
            headers: {
                authorization: this.seniorApi.accessToken
            }
        };
        return this.request(clientOptions);
    };
}