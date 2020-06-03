import Ordination from "./Ordination";
import { BaseModel } from "./BaseModel";

export default class Pagination extends BaseModel {

    /**
     * Página de inicio
     */
    private _current: number;

    public set current(value: number) {
        this._current = value;
    }

    public get current() {
        return this._current;
    }

    /**
     * Quantidade de páginas (iniciando por 1)
     */
    private _size: number;

    public set size(value: number) {
        this._size = value;
    }

    public get size() {
        return this._size;
    }

    /**
     * Ordenar por
     */
    private _orderBy: Ordination;

    public set orderBy(value: Ordination) {
        this._orderBy = value;
    }

    public get orderBy() {
        return this._orderBy;
    }

}