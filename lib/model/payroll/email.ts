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
import { EmailType } from './emailType';


export interface Email { 
    /**
     * Relacionamento com pessoa
     */
    person?: string;
    emailtype: EmailType;
    /**
     * Id do email
     */
    id?: string;
    /**
     * Endereço de email
     */
    email: string;
}
