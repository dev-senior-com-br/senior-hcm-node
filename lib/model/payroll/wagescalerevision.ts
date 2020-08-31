/**
 * Folha de Pagamento
 * HCM - Folha de pagamento
 *
 * OpenAPI spec version: 9.0.3
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Wagescale } from './wagescale';


export interface Wagescalerevision { 
    /**
     * Data do fim da revisão de escala salarial
     */
    enddate?: string;
    /**
     * Id da revisão de escala salarial
     */
    id?: string;
    /**
     * Data de inicio da revisão de escala salarial
     */
    startdate?: string;
    wagescale?: Wagescale;
}