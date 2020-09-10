/**
 * Recrutamento e Seleção
 * Serviço do Gestão de Recrutamento e Seleção.
 *
 * OpenAPI spec version: 16.0.1
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface Department { 
    /**
     * Data de Expiração.
     */
    experitionDate?: Date;
    /**
     * Codigo do departamento
     */
    code?: string;
    /**
     * Nome.
     */
    name?: string;
    /**
     * Identificador único da entidade.
     */
    id?: string;
    /**
     * Endereço do departamento
     */
    place?: string;
    /**
     * Posicao do departamento.
     */
    position?: string;
    /**
     * Data de Criação.
     */
    createDate?: Date;
}
