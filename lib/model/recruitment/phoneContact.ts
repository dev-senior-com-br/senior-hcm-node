/**
 * Recrutamento e Seleção
 * Serviço do Gestão de Recrutamento e Seleção.
 *
 * OpenAPI spec version: develop-SNAPSHOT
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface PhoneContact { 
    /**
     * Número.
     */
    number?: string;
    /**
     * Operadora (Vivo, Oi).
     */
    carrier?: string;
    /**
     * DDI.
     */
    countryCode?: number;
    /**
     * DDD.
     */
    localCode?: number;
    /**
     * Identificador único da entidade.
     */
    id?: string;
}
