/**
 * Recrutamento e Seleção
 * Serviço do Gestão de Recrutamento e Seleção.
 *
 * OpenAPI spec version: 16.0.2
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { CostCenter } from './costCenter';


export interface Company { 
    /**
     * Nome da Empresa Matriz.
     */
    headQuarterName?: string;
    /**
     * Código da empresa.
     */
    code?: number;
    costCenter?: CostCenter;
    /**
     * Nome da Empresa.
     */
    companyName?: string;
    /**
     * Identificador da Empresa Matriz.
     */
    headQuarterId?: string;
    /**
     * Código da empresa matriz.
     */
    headQuarterCode?: number;
    /**
     * Identificador único da empresa.
     */
    id?: string;
}
