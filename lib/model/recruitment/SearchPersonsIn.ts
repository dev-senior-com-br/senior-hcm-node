import { BaseModel } from '../BaseModel';

export default class SearchPersonsIn extends BaseModel {
    /**
     * Expressão a ser encontrada, a busca é efetuada no nome completo do colaborador.
     */
    #q: string;

    set q(value: string) {
      this.#q = value;
    }

    get q(): string {
      return this.#q;
    }

    /**
     * Data de referência da pesquisa.
     */
    #referenceDate: string;

    set referenceDate(value: string) {
      this.#referenceDate = value;
    }

    get referenceDate(): string {
      return this.#referenceDate;
    }

}