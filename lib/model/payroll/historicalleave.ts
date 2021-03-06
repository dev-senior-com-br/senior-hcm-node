/**
 * Folha de Pagamento
 * HCM - Folha de pagamento
 *
 *
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Attachment } from './attachment';
import { Attendant } from './attendant';
import { ClassOrganType } from './classOrganType';
import { Disease } from './disease';
import { Employee } from './employee';
import { MovimentationRaisType } from './movimentationRaisType';
import { State } from './state';
import { SubgroupDisease } from './subgroupDisease';
import { Timetrackingsituation } from './timetrackingsituation';
import { WorkAccidentType } from './workAccidentType';


export interface Historicalleave { 
    /**
     * Anexo
     */
    attachments?: Array<Attachment>;
    classOrganType?: ClassOrganType;
    /**
     * Término do afastamento(Sem timezone)
     */
    endDate?: Date;
    timetrackingsituation: Timetrackingsituation;
    employee: Employee;
    /**
     * Início do afastamento(Com timezone)
     */
    startdate: Date;
    /**
     * Confirmação da gravidez
     */
    pregnancyConfirmation?: string;
    /**
     * Data prevista de término do afastamento
     */
    estimatedenddate?: string;
    attendant?: Attendant;
    /**
     * Decisão da perícia
     */
    medicalDecisionDate?: string;
    /**
     * Exame de retorno
     */
    returnExamination?: boolean;
    /**
     * Id do histórico
     */
    id?: string;
    workAccidentType?: WorkAccidentType;
    subgroupDisease?: SubgroupDisease;
    initialSituation?: Timetrackingsituation;
    attendantState?: State;
    disease?: Disease;
    /**
     * Risco nexo
     */
    nexusHazard?: boolean;
    /**
     * Registro do conselho profissional
     */
    recordCouncil?: string;
    /**
     * Observação do afastamento
     */
    observation?: string;
    /**
     * Id externo
     */
    externalId?: string;
    /**
     * É integração? (campo calculado)
     */
    isIntegration?: boolean;
    /**
     * Nome do atendente
     */
    attendantName?: string;
    /**
     * Data do parto
     */
    birthDate?: string;
    /**
     * Dias justificados
     */
    justifiedDays?: number;
    /**
     * Término do afastamento(Com timezone)
     */
    enddate?: Date;
    /**
     * Início do nexo
     */
    nexusStartDate?: string;
    /**
     * Início do afastamento(Sem timezone)
     */
    startDate: Date;
    movimentationRaisType?: MovimentationRaisType;
}
