/**
 * Recrutamento e Seleção
 * Serviço do Gestão de Recrutamento e Seleção.
 *
 * OpenAPI spec version: 15.11.0
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Company } from './company';


export interface CostCenter { 
    /**
     * Identificador da Empresa.
     */
    companyId?: string;
    /**
     * Código do centro de custo.
     */
    code?: string;
    /**
     * Nome do centro de custo.
     */
    name?: string;
    company?: Company;
    /**
     * Identificador do centro de custo.
     */
    id?: string;
}
