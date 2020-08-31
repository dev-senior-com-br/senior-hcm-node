import { BaseModel } from '../BaseModel';

export default class VacancyDetailsIn extends BaseModel {

    /**
     * Identificador único da vaga.
     */
    #id: string;

    set id(value: string) {
      this.#id = value;
    }

    get id(): string {
      return this.#id;
    }

    /**
     * Id do contrato ativo no analytics
     */
    #activeEmployeeId: string;

    set activeEmployeeId(value: string) {
      this.#activeEmployeeId = value;
    }

    get activeEmployeeId(): string {
      return this.#activeEmployeeId;
    }

    /**
     * Indica que a primitiva foi chamada pelo recrutamento legado (base HCM), default é true.
     */

    #fromRecruitment: boolean;

    set fromRecruitment(value: boolean) {
      this.#fromRecruitment = value;
    }

    get fromRecruitment(): boolean {
      return this.#fromRecruitment;
    }
}