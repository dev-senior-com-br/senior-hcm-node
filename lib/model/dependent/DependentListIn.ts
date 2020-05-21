import { Pagination } from "../../model/Pagination";

export class DependentListIn {

    /**
     * Id do colaborador
     */
    private _employeeId : string;

    public set employeeId(value: string) {
        this._employeeId = value;
    }

    public get employeeId() {
        return this._employeeId;
    }

    /**
     * Paginação da busca
     */
    private _page : Pagination;

    public set page(value: Pagination) {
        this._page = value;
    }

    public get page() {
        return this._page;
    }

}