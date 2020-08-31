/**
 * Dependentes
 * HCM - Gestão de dependentes
 *
 * OpenAPI spec version: 6.0.0
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface Attachment { 
    /**
     * Identificador do anexo
     */
    sourceId?: string;
    /**
     * Data de criação
     */
    createdat?: string;
    /**
     * Tipo do anexo
     */
    sourceType?: string;
    /**
     * Caminho permanente do arquivo
     */
    permanentUrl?: string;
    /**
     * Pessoa
     */
    person?: string;
    /**
     * Nome do arquivo
     */
    name?: string;
    /**
     * Identificador
     */
    id?: string;
    /**
     * Versão do arquivo temporário
     */
    version?: string;
    /**
     * Data de alteração
     */
    updatedat?: string;
    /**
     * Status
     */
    status?: number;
}