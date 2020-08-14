/**
 * Folha de Pagamento
 * HCM - Folha de pagamento
 *
 * OpenAPI spec version: 9.0.3
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { GenerateStabilityType } from './generateStabilityType';
import { LoseVacationRightType } from './loseVacationRightType';
import { StabilityType } from './stabilityType';
import { TimeTrackingType } from './timeTrackingType';


export interface Timetrackingsituation { 
    /**
     * Indica se o afastamento considera absenteísmo
     */
    isforabsent?: boolean;
    stabilityType?: StabilityType;
    /**
     * Código da situação
     */
    code?: number;
    loseVacationRight?: LoseVacationRightType;
    /**
     * Perde férias
     */
    loseVacation?: boolean;
    /**
     * Situação para os dias justificados
     */
    situationDaysJustified?: number;
    /**
     * Dias estabilidade
     */
    stabilityDay?: number;
    generateStability?: GenerateStabilityType;
    /**
     * Máximo dias estabilidade
     */
    maximumStabilityDays?: number;
    trackingtype?: TimeTrackingType;
    /**
     * Nome do afastamento
     */
    name?: string;
    /**
     * Exame de retorno
     */
    returnExamination?: boolean;
    /**
     * Id da situação do afastamento
     */
    id?: string;
    /**
     * Controla prorrogação
     */
    extensionControl?: string;
}