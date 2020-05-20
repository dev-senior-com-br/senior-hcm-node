export class VacanciesIn {

    /**
     * Motivo da abertura da vaga
     */
    reason: string;

    /**
     *Lista de palavras-chave a serem filtradas.
     */
    q: string[];

    /**
     * Situação a ser filtrada.
     */
    situation: string[];

    /**
     * Locais da vaga a serem considerados.
     */
    locations: string[];

    /**
     * Responsaveis de vaga a serem considerados.
     */
    responsibles: string[];

    /**
     * Data mínima para a criação da vaga.
     */
    minCreateDate: Date;
    /**
     * Data máxima para a criação da vaga.
    */
    maxCreateDate: Date;

    /**
     *Data mínima para a conclusão da vaga.
     */
    minConclusionDate: Date;

    /**
     *Data máxima para a conclusão da vaga.
     */
    maxConclusionDate: Date;

    /**
     *Solicitantes das vagas a serem considerados.
     */
    requesters: string[];

    /**
     *Cargos das vagas a serem considerados.
     */
    positions: string[];

    /**
     *Progresso mínimo das vagas.
     */
    minProgress: number;

    /**
     * Progresso máximo das vagas.
     */
    maxProgress: number;
        
    /**
     * Data de referência.
     */
    referenceDate: Date;

    /**
     *Índice da página a ser retornada. Padrão 0.
     */
    page: number;

    /**
     * Quantidade de modelos que devem ser retornados por página. Padrão 20.
     */
    size: number;

    /**
     *Flag indicando que será filtrado por solicitante, considerando hierarquia (liderados diretos e indiretos). Nesse caso, mesmo se o usuário for gestor (possuir permissão para visualizar todas as vagas), será considerada a hierarquia.
     */
    considerHierarchy: boolean;

    /**
     *Ticket dos filtros do Analytics (ID dos filtros aplicados no Analytics)
     */
    ticket: string;

    /**
     *Id do contrato ativo no analytics.
     */
    activeEmployeeId: string;

    /**
     *Flag que identifica que se a chamada vem do Analytics
     */
    fromAnalytics: boolean;
}