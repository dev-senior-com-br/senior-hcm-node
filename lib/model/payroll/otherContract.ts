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
import { Employee } from './employee';
import { OtherContractType } from './otherContractType';


export interface OtherContract { 
    otherEmployee?: Employee;
    /**
     * Id do outro contrato
     */
    id?: string;
    employee: Employee;
    otherContractType?: OtherContractType;
    /**
     * Utiliza teto de INSS?
     */
    inssCeiling?: boolean;
}
