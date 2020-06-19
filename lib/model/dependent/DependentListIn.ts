import { BaseModel } from "../BaseModel";
import { Pagination } from "@seniorsistemas/senior-core/dist/lib/model/Pagination";

export default class DependentListIn extends BaseModel {

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
     * Paginação da busca
     */
    private _page: Pagination;

    public set page(value: Pagination) {
        this._page = value;
    }

    public get page() {
        return this._page;
    }

}