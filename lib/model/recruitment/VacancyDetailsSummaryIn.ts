import { BaseModel } from '../BaseModel';

export default class VacancyDetailsSummaryIn extends BaseModel {
    #vacancyId: string;

    get vacancyId(): string {
      return this.#vacancyId;
    }

    set vacancyId(value: string) {
      this.#vacancyId = value;
    }
}