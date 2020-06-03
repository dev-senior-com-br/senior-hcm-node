import { BaseModel } from "../BaseModel";

export default class EmployeeIn extends BaseModel {

    /**
     * Id do colaborador
     */
    private _employeeId: string;

    public set employeeId(value: string) {
        this._employeeId = value;
    }

    public get employeeId() {
        return this._employeeId;
    }

    /**
     * Data de referencia
     */
    private _referenceDate: string;

    public set referenceDate(value: string) {
        this._referenceDate = value;
    }

    public get referenceDate() {
        return this._referenceDate;
    }

}