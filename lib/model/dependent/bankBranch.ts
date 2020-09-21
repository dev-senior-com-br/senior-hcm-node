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
import { Bank } from './bank';


export interface BankBranch { 
    bank?: Bank;
    /**
     * Número da agência
     */
    code?: number;
    /**
     * Nome da agência
     */
    name?: string;
    /**
     * Id da entidade
     */
    id?: string;
}
