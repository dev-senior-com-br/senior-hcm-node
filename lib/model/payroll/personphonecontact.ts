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
import { Phonecontact } from './phonecontact';


export interface Personphonecontact { 
    /**
     * Relacionamento com pessoa
     */
    person: string;
    /**
     * Id do vínculo
     */
    id?: string;
    phonecontact: Phonecontact;
}
