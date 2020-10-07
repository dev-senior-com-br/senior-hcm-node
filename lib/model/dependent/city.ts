/**
 * Dependentes
 * HCM - Gestão de dependentes
 *
 * OpenAPI spec version: ${version}
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { State } from './state';


export interface City { 
    stateId?: State;
    /**
     * Nome da cidade
     */
    name?: string;
    /**
     * Id da cidade
     */
    id?: string;
}
