/**
 * Folha de Pagamento
 * HCM - Folha de pagamento
 *
 *
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Currency } from './currency';


export interface Country { 
    /**
     * Nome do país
     */
    name?: string;
    currency?: Currency;
    /**
     * Id do país
     */
    id?: string;
    /**
     * Abreviação do nome do país
     */
    abbreviation?: string;
}
