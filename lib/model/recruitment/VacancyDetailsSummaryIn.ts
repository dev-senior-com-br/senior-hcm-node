import { BaseModel } from "../BaseModel";

export default class VacancyDetailsSummaryIn extends BaseModel {
    private _vacancyId: string;

    public get vacancyId() {
        return this._vacancyId;
    }

    public set vacancyId(value: string) {
        this._vacancyId = value;
    }
}