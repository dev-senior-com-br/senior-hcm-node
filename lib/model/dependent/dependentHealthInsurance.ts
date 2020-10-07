/**
 * Dependentes
 * HCM - Gestão de dependentes
 *
 * OpenAPI spec version: 6.2.1
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Dependent } from './dependent';


export interface DependentHealthInsurance { 
    /**
     * Data da exclusão
     */
    endDate?: string;
    /**
     * Matrícula
     */
    registration?: number;
    /**
     * Id da entidade
     */
    id?: string;
    dependent?: Dependent;
    /**
     * Data da inclusão
     */
    startDate?: string;
}
