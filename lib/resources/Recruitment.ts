import HCMApi from '../HCMApi';
import { RequestClient, HttpMethod, RequestReturn } from '@seniorsistemas/senior-core';
import { ListVacanciesDTO, VacancyDetailsDTO, VacancyDetailsSummaryDTO, SearchPersonsDTO } from '../dto/Recruitment';

export default class Recruitment extends RequestClient {
  constructor(hcmApi: HCMApi) {
    super(hcmApi, 'hcm', 'recruitment');
  }

  listVacancies(vacanciesIn: ListVacanciesDTO): Promise<RequestReturn> {
    const clientOptions = {
      url: this.getUrlPath('queries/listVacancies'),
      method: HttpMethod.POST,
      data: vacanciesIn,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }
  vacancyDetails(vacancyDetailsIn: VacancyDetailsDTO): Promise<RequestReturn> {
    const clientOptions = {
      url: this.getUrlPath('queries/vacancyDetails'),
      method: HttpMethod.POST,
      data: vacancyDetailsIn,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  vacancyDetailsSummary(vacancyDetailsSummaryIn: VacancyDetailsSummaryDTO): Promise<RequestReturn> {
    const clientOptions = {
      url: this.getUrlPath('queries/vacancyDetailsSummary'),
      method: HttpMethod.POST,
      data: vacancyDetailsSummaryIn,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }

  searchPersons(searchPersonsIn: SearchPersonsDTO): Promise<RequestReturn> {
    const clientOptions = {
      url: this.getUrlPath('queries/searchPersons'),
      method: HttpMethod.POST,
      data: searchPersonsIn,
      headers: {
        authorization: this.seniorApi.accessToken,
      },
    };
    return this.request(clientOptions);
  }
}
