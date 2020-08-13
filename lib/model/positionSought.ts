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


export interface PositionSought { 
    /**
     * Descrição da área pretendida.
     */
    area?: string;
    /**
     * Data de criação.
     */
    createdAt?: Date;
    /**
     * Identificador único do currículo.
     */
    resumeId?: string;
    /**
     * ID do registro no sistema legado. Esse atributo não é persistido na base, é utilizado apenas como identificador na integração do registro da g5 para G7.
     */
    g5Id?: string;
    /**
     * Identificador único da entidade.
     */
    id?: string;
    /**
     * Descrição do cargo pretendido.
     */
    position?: string;
    /**
     * Data da última alteração.
     */
    updatedAt?: Date;
}
