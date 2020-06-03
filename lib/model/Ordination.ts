import { DirectionType } from "../enum/DirectionType";
import { BaseModel } from "./BaseModel";

export default class Ordination extends BaseModel {

    /**
     * Campo que será ordenado
     */
    private _field: string;

    public set field(value: string) {
        this._field = value;
    }

    public get field() {
        return this._field;
    }

    /**
     * Tipo da ordenação
     */
    private _direction: DirectionType;

    public set direction(value: DirectionType) {
        this._direction = value;
    }

    public get direction() {
        return this._direction;
    }

}