import Recruitment from './resources/Recruitment';
import Dependent from './resources/Dependent';
import Payroll from './resources/Payroll';
import PontoMobile from './resources/PontoMobile';
import { SeniorApi } from '@seniorsistemas/senior-core';

export default class HCMApi extends SeniorApi {
  #recruitment: Recruitment;
  #dependent: Dependent;
  #payroll: Payroll;
  #pontomobile: PontoMobile;

  get recruitment(): Recruitment {
    this.#recruitment = this.#recruitment || new Recruitment(this);
    return this.#recruitment;
  }

  get dependent(): Dependent {
    this.#dependent = this.#dependent || new Dependent(this);
    return this.#dependent;
  }

  get payroll(): Payroll {
    this.#payroll = this.#payroll || new Payroll(this);
    return this.#payroll;
  }

  get pontomobile(): PontoMobile {
    this.#pontomobile = this.#pontomobile || new PontoMobile(this);
    return this.#pontomobile;
  }
}
