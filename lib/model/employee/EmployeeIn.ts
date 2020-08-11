import { BaseModel } from '../BaseModel';

export default class EmployeeIn extends BaseModel {

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
     * Data de referencia
     */
    #referenceDate: string;

    set referenceDate(value: string) {
      this.#referenceDate = value;
    }

    get referenceDate(): string {
      return this.#referenceDate;
    }

}