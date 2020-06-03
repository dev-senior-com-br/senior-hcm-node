import { BaseModel } from "../BaseModel";

export default class VacancyDetailsIn extends BaseModel {

    /**
     * Identificador único da vaga.
     */
    private _id: string;

    public set id(value: string) {
        this._id = value;
    }

    public get id() {
        return this._id;
    }

    /**
     * Id do contrato ativo no analytics
     */
    private _activeEmployeeId: string;

    public set activeEmployeeId(value: string) {
        this._activeEmployeeId = value;
    }

    public get activeEmployeeId() {
        return this._activeEmployeeId;
    }

    /**
     * Indica que a primitiva foi chamada pelo recrutamento legado (base HCM), default é true.
     */

    private _fromRecruitment: boolean;

    public set fromRecruitment(value: boolean) {
        this._fromRecruitment = value;
    }

    public get fromRecruitment() {
        return this._fromRecruitment;
    }
}