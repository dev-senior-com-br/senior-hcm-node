export default class SearchPersonsIn {
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
    private _referenceDate: Date;

    public set referenceDate(value: Date) {
        this._referenceDate = value;
    }

    public get referenceDate() {
        return this._referenceDate;
    }

}