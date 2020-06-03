import { BaseModel } from "../BaseModel";

export default class SearchPersonsIn extends BaseModel {
    /**
     * Expressão a ser encontrada, a busca é efetuada no nome completo do colaborador.
     */
    private _q: string;

    public set q(value: string) {
        this._q = value;
    }

    public get q() {
        return this._q;
    }

    /**
     * Data de referência da pesquisa.
     */
    private _referenceDate: string;

    public set referenceDate(value: string) {
        this._referenceDate = value;
    }

    public get referenceDate() {
        return this._referenceDate;
    }

}