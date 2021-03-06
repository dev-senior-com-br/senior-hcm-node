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
import { City } from './city';


export interface Administrativeregion { 
    /**
     * Código da região
     */
    code: number;
    city: City;
    /**
     * Nome da região administrativa
     */
    name: string;
    /**
     * Id da região administrativa
     */
    id?: string;
}
