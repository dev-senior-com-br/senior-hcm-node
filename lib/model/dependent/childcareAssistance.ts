/**
 * Dependentes
 * HCM - Gestão de dependentes
 *
 * OpenAPI spec version: 6.3.0
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Dependent } from './dependent';


export interface ChildcareAssistance { 
    /**
     * Meses
     */
    months?: number;
    /**
     * Id do auxílio creche
     */
    id?: string;
    dependent?: Dependent;
    /**
     * Se tem auxílio creche
     */
    childcareAssistance?: boolean;
}
