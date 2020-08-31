import { ProcessTypeDto } from '../../enum/ProcessTypeDto';
import { VacancySituationDto } from '../../enum/VacancySituationDto';

export default class ListVacanciesIn {

    /**
     * Motivo da abertura da vaga
     */
    #reason: ProcessTypeDto;

    get reason(): ProcessTypeDto {
      return this.#reason;
    }

    set reason(value: ProcessTypeDto) {
      this.#reason = value;
    }

    /**
     * Lista de palavras-chave a serem filtradas
     */
    #q: string;

    set q(value: string) {
      this.#q = value;
    }

    get q(): string {
      return this.#q;
    }

    /**
     * Situação a ser filtrada.
     */
    #situation: VacancySituationDto;

    set situation(value: VacancySituationDto) {
      this.#situation = value;
    }

    get situation(): VacancySituationDto {
      return this.#situation;
    }

    /**
     * Locais da vaga a serem considerados.
     */
    #locations: string;

    set locations(value: string) {
      this.#locations = value;
    }

    get locations(): string {
      return this.#locations;
    }

    /**
     * Responsaveis de vaga a serem considerados.
     */
    #responsibles: string;

    set responsibles(value: string) {
      this.#responsibles = value;
    }

    get responsibles(): string {
      return this.#responsibles;
    }

    /**
     * Data mínima para a criação da vaga.
     */
    #minCreateDate: Date;

    set minCreateDate(value: Date) {
      this.#minCreateDate = value;
    }

    get minCreateDate(): Date {
      return this.#minCreateDate;
    }

    /**
     * Data máxima para a criação da vaga.
     */
    #maxCreateDate: Date;

    set maxCreateDate(value: Date) {
      this.#maxCreateDate = value;
    }

    get maxCreateDate(): Date {
      return this.#maxCreateDate;
    }

    /**
     * Data mínima para a conclusão da vaga.
     */
    #minConclusionDate: Date;

    set minConclusionDate(value: Date) {
      this.#minConclusionDate = value;
    }

    get minConclusionDate(): Date {
      return this.#minConclusionDate;
    }

    /**
     * Data máxima para a conclusão da vaga.
     */
    #maxConclusionDate: Date;

    set maxConclusionDate(value: Date) {
      this.#maxConclusionDate = value;
    }

    get maxConclusionDate(): Date {
      return this.#maxConclusionDate;
    }

    /**
     * Solicitantes das vagas a serem considerados.
     */
    #requesters: string;

    set requesters(value: string) {
      this.#requesters = value;
    }

    get requesters(): string {
      return this.#requesters;
    }

    /**
     * Cargos das vagas a serem considerados.
     */
    #positions: string;

    set positions(value: string) {
      this.#positions = value;
    }

    get positions(): string {
      return this.#positions;
    }

    /**
     * Progresso mínimo das vagas.
     */
    #minProgress: number;

    set minProgress(value: number) {
      this.#minProgress = value;
    }

    get minProgress(): number {
      return this.#minProgress;
    }

    /**
     * Progresso máximo das vagas.
     */
    #maxProgress: number;

    set maxProgress(value: number) {
      this.#maxProgress = value;
    }

    get maxProgress(): number {
      return this.#maxProgress;
    }

    /**
     * Data de referência.
     */
    #referenceDate: Date;

    set referenceDate(value: Date) {
      this.#referenceDate = value;
    }

    get referenceDate(): Date {
      return this.#referenceDate;
    }

    /**
     * Índice da página a ser retornada. Padrão 0.
     */
    #page: number;

    set page(value: number) {
      this.#page = value;
    }

    get page(): number {
      return this.#page;
    }

    /**
     * Quantidade de modelos que devem ser retornados por página. Padrão 20.
     */
    #size: number;

    set size(value: number) {
      this.#size = value;
    }

    get size(): number {
      return this.#size;
    }

    /**
     * Flag indicando que será filtrado por solicitante, considerando hierarquia 
     * (liderados diretos e indiretos). Nesse caso, mesmo se o usuário for gestor 
     * (possuir permissão para visualizar todas as vagas), será considerada a hierarquia.
     */
    #considerHierarchy: boolean;

    set considerHierarchy(value: boolean) {
      this.#considerHierarchy = value;
    }

    get considerHierarchy(): boolean {
      return this.#considerHierarchy;
    }

    /**
     * Ticket dos filtros do Analytics (ID dos filtros aplicados no Analytics)
     */
    #ticket: string;

    set ticket(value: string) {
      this.#ticket = value;
    }

    get ticket(): string {
      return this.#ticket;
    }

    /**
     * Id do contrato ativo no analytics.
     */
    #activeEmployeeId: string;

    set activeEmployeeId(value: string) {
      this.#activeEmployeeId = value;
    }

    get activeEmployeeId(): string {
      return this.#activeEmployeeId;
    }

    /**
     * Flag que identifica que se a chamada vem do Analytics
     */
    #fromAnalytics: boolean;

    set fromAnalytics(value: boolean) {
      this.#fromAnalytics = value;
    }

    get fromAnalytics(): boolean {
      return this.#fromAnalytics;
    }

}