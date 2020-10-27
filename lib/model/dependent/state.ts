/**
 * Dependentes
 * HCM - Gestão de dependentes
 *
 *
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Country } from './country';


export interface State { 
    /**
     * Nome do estado
     */
    name?: string;
    /**
     * Id do estado
     */
    id?: string;
    /**
     * Abreviação do nome do estado
     */
    abbreviation?: string;
    countryId?: Country;
}
