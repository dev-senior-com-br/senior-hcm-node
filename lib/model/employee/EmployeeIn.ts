export default class EmployeeIn {

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
    private _referenceDate: Date;

    public set referenceDate(value: Date) {
        this._referenceDate = value;
    }

    public get referenceDate() {
        return this._referenceDate;
    }

}