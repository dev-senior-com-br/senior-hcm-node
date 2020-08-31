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
import { Employee } from './employee';
import { EmploymentRelationship } from './employmentRelationship';


export interface HistoricalEmploymentRelationship { 
    employmentRelationship?: EmploymentRelationship;
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