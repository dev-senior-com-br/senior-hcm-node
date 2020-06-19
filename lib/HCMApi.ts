import Recruitment from "./resources/Recruitment";
import Dependent from "./resources/Dependent";
import Payroll from "./resources/Payroll";
import SeniorApi from "@seniorsistemas/senior-core/dist/lib/SeniorApi";

export default class HCMApi extends SeniorApi {
    _recruitment: Recruitment;
    _dependent: Dependent;
    _payroll: Payroll;

    get recruitment(): Recruitment {
        this._recruitment = this._recruitment || new Recruitment(this);
        return this._recruitment;
    }

    get dependent(): Dependent {
        this._dependent = this._dependent || new Dependent(this);
        return this._dependent;
    }

    get payroll(): Payroll {
        this._payroll = this._payroll || new Payroll(this);
        return this._payroll;
    }
}