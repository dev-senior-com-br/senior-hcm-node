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
import { Person } from './person';


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
    person?: Person;
    /**
     * Nome do arquivo
     */
    name: string;
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
