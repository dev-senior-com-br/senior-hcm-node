import { ProcessTypeDto } from "../../enum/ProcessTypeDto";
import { VacancySituationDto } from "../../enum/VacancySituationDto";

export class ListVacanciesIn {

    /**
     * Motivo da abertura da vaga
     */
    private _reason: ProcessTypeDto;

    public get reason() {
        return this._reason;
    }

    public set reason (value: ProcessTypeDto) {
        this._reason = value;
    }

    /**
     * Lista de palavras-chave a serem filtradas
     */    
    private _q : string;

    public set q(value: string) {
        this._q = value;
    }

    public get q() {
        return this._q;
    }
    
    /**
     * Situação a ser filtrada.
     */    
    private _situation : VacancySituationDto;

    public set situation(value: VacancySituationDto) {
        this._situation = value;
    }

    public get situation() {
        return this._situation;
    }

    /**
     * Locais da vaga a serem considerados.
     */    
    private _locations : string;

    public set locations(value: string) {
        this._locations = value;
    }

    public get locations() {
        return this._locations;
    }

    /**
     * Responsaveis de vaga a serem considerados.
     */
    private _responsibles : string;

    public set responsibles(value: string) {
        this._responsibles = value;
    }

    public get responsibles() {
        return this._responsibles;
    }

    /**
     * Data mínima para a criação da vaga.
     */
    private _minCreateDate : Date;

    public set minCreateDate(value: Date) {
        this._minCreateDate = value;
    }
 
    public get minCreateDate() {
        return this._minCreateDate;
    }

    /**
     * Data máxima para a criação da vaga.
     */   
    private _maxCreateDate : Date;

    public set maxCreateDate(value: Date) {
        this._maxCreateDate = value;
    }

    public get maxCreateDate() {
        return this._maxCreateDate;
    }

    /**
     * Data mínima para a conclusão da vaga.
     */
    private _minConclusionDate : Date;

    public set minConclusionDate(value: Date) {
        this._minConclusionDate = value;
    }

    public get minConclusionDate() {
        return this._minConclusionDate;
    }

    /**
     * Data máxima para a conclusão da vaga.
     */
    private _maxConclusionDate : Date;

    public set maxConclusionDate(value: Date) {
        this._maxConclusionDate = value;
    }

    public get maxConclusionDate() {
        return this._maxConclusionDate;
    }

    /**
     * Solicitantes das vagas a serem considerados.
     */
    private _requesters : string;

    public set requesters(value: string) {
        this._requesters = value;
    }

    public get requesters() {
        return this._requesters;
    }

    /**
     * Cargos das vagas a serem considerados.
     */
    private _positions : string;

    public set positions(value: string) {
        this._positions = value;
    }

    public get positions() {
        return this._positions;
    }

    /**
     * Progresso mínimo das vagas.
     */
    private _minProgress : number;

    public set minProgress(value: number) {
        this._minProgress = value;
    }

    public get minProgress() {
        return this._minProgress;
    }

    /**
     * Progresso máximo das vagas.
     */
    private _maxProgress : number;

    public set maxProgress(value: number) {
        this._maxProgress = value;
    }

    public get maxProgress() {
        return this._maxProgress;
    }

    /**
     * Data de referência.
     */
    private _referenceDate : Date;

    public set referenceDate(value: Date) {
        this._referenceDate = value;
    }

    public get referenceDate() {
        return this._referenceDate;
    }

    /**
     * Índice da página a ser retornada. Padrão 0.
     */
    private _page : number;

    public set page(value: number) {
        this._page = value;
    }

    public get page() {
        return this._page;
    }

    /**
     * Quantidade de modelos que devem ser retornados por página. Padrão 20.
     */
    private _size : number;

    public set size(value: number) {
        this._size = value;
    }

    public get size() {
        return this._size;
    }

    /**
     * Flag indicando que será filtrado por solicitante, considerando hierarquia (liderados diretos e indiretos). Nesse caso, mesmo se o usuário for gestor (possuir permissão para visualizar todas as vagas), será considerada a hierarquia.
     */
    private _considerHierarchy : boolean;

    public set considerHierarchy(value: boolean) {
        this._considerHierarchy = value;
    }

    public get considerHierarchy() {
        return this._considerHierarchy;
    }

    /**
     * Ticket dos filtros do Analytics (ID dos filtros aplicados no Analytics)
     */
    private _ticket : string;

    public set ticket(value: string) {
        this._ticket = value;
    }

    public get ticket() {
        return this._ticket;
    }

    /**
     * Id do contrato ativo no analytics.
     */
    private _activeEmployeeId : string;

    public set activeEmployeeId(value: string) {
        this._activeEmployeeId = value;
    }

    public get activeEmployeeId() {
        return this._activeEmployeeId;
    }

    /**
     * Flag que identifica que se a chamada vem do Analytics
     */    
    private _fromAnalytics : boolean;

    public set fromAnalytics(value: boolean) {
        this._fromAnalytics = value;
    }

    public get fromAnalytics() {
        return this._fromAnalytics;
    }

}