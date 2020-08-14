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
import { Costcenter } from './costcenter';
import { Employee } from './employee';
import { Movimentationreason } from './movimentationreason';


export interface HistoricalCostCenter { 
    /**
     * Lote do histórico de posto de trabalho
     */
    lotWorkstation?: string;
    /**
     * Data do histórico
     */
    dateWhen?: string;
    /**
     * Data de término
     */
    endDate?: string;
    costCenterId?: Costcenter;
    movimentationReasonId?: Movimentationreason;
    /**
     * Id do histórico
     */
    id?: string;
    /**
     * É integração? (campo calculado)
     */
    isIntegration?: boolean;
    employee?: Employee;
}