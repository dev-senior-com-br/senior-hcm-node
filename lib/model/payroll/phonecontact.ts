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
import { PhoneContactType } from './phoneContactType';


export interface Phonecontact { 
    /**
     * Número do telefone
     */
    number: string;
    /**
     * Ramal do telefone
     */
    extention?: string;
    contacttype: PhoneContactType;
    /**
     * Código do país (DDI)
     */
    countrycode?: number;
    /**
     * Código da localidade (DDD)
     */
    localcode?: number;
    /**
     * Id do telefone
     */
    id?: string;
}
