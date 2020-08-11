import { BaseModel } from '../BaseModel';
import { Pagination } from '@seniorsistemas/senior-core/dist/lib/model/Pagination';

export default class DependentListIn extends BaseModel {

    /**
     * Id do colaborador
     */
    #employeeId: string;

    set employeeId(value: string) {
      this.#employeeId = value;
    }

    get employeeId(): string {
      return this.#employeeId;
    }

    /**
     * Paginação da busca
     */
    #page: Pagination;

    set page(value: Pagination) {
      this.#page = value;
    }

    get page(): Pagination {
      return this.#page;
    }

}