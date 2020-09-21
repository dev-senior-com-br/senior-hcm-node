/**
 * Dependentes
 * HCM - Gestão de dependentes
 *
 * OpenAPI spec version: 6.2.0
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Dependent } from './dependent';


export interface FamilySalary { 
    /**
     * Id do salário familia
     */
    id?: string;
    /**
     * Idade limite do salário familia
     */
    ageLimitSalaryFamily?: number;
    /**
     * Aviso impresso
     */
    printedNotice?: boolean;
    /**
     * Data de entrega da certidão
     */
    certificateSubmission?: string;
    dependent?: Dependent;
}
