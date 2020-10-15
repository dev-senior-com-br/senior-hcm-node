import VacanciesIn from '../model/recruitment/VacanciesIn';
import HCMApi from '../HCMApi';
import VacancyDetailsIn from '../model/recruitment/VacancyDetailsIn';
import { RequestClient, HttpMethod, RequestReturn } from '@seniorsistemas/senior-core';
import VacancyDetailsSummaryIn from '../model/recruitment/VacancyDetailsSummaryIn';
import SearchPersonsIn from '../model/recruitment/SearchPersonsIn';

export default class Recruitment extends RequestClient {
  constructor(hcmApi: HCMApi) {
    super(hcmApi, 'hcm', 'recruitment');
  }

  listVacancies(vacanciesIn: VacanciesIn): Promise<RequestReturn> {
    const vacanciesJSON = JSON.parse(vacanciesIn.toJsonString());
    const clientOptions = {
      url: this.getUrlPath('queries/listVacancies'),
      method: HttpMethod.POST,
      data: vacanciesJSON,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }
  vacancyDetails(vacancyDetailsIn: VacancyDetailsIn): Promise<RequestReturn> {
    const vacancyDetailsInJSON = JSON.parse(vacancyDetailsIn.toJsonString());
    const clientOptions = {
      url: this.getUrlPath('queries/vacancyDetails'),
      method: HttpMethod.POST,
      data: vacancyDetailsInJSON,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  vacancyDetailsSummary(vacancyDetailsSummaryIn: VacancyDetailsSummaryIn): Promise<RequestReturn> {
    const vacancyDetailsSummaryInJSON = JSON.parse(vacancyDetailsSummaryIn.toJsonString());
    const clientOptions = {
      url: this.getUrlPath('queries/vacancyDetailsSummary'),
      method: HttpMethod.POST,
      data: vacancyDetailsSummaryInJSON,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  searchPersons(searchPersonsIn: SearchPersonsIn): Promise<RequestReturn> {
    const searchPersonsInJSON = JSON.parse(searchPersonsIn.toJsonString());
    const clientOptions = {
      url: this.getUrlPath('queries/searchPersons'),
      method: HttpMethod.POST,
      data: searchPersonsInJSON,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }
}
