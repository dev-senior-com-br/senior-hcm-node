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
import { VacationRightType } from './vacationRightType';


export interface Syndicate { 
    /**
     * Código do sindicato
     */
    code: number;
    /**
     * Nome do sindicato
     */
    name: string;
    /**
     * Meses do período aquisitivo de férias
     */
    vacationMonths: number;
    /**
     * Id do sindicato
     */
    id?: string;
    vacationRightType?: VacationRightType;
}
