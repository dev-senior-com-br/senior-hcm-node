import { BaseModel } from "../BaseModel";

export default class DependentIn extends BaseModel {
    private _dependentId: string;

    public set dependentId(value: string) {
        this._dependentId = value;
    }

    public get dependentId() {
        return this._dependentId;
    }

}