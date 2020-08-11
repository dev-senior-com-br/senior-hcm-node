import { BaseModel } from '../BaseModel';

export default class DependentIn extends BaseModel {
    #dependentId: string;

    set dependentId(value: string) {
      this.#dependentId = value;
    }

    get dependentId(): string {
      return this.#dependentId;
    }

}