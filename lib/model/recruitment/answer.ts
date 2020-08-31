/**
 * Recrutamento e Seleção
 * Serviço do Gestão de Recrutamento e Seleção.
 *
 * OpenAPI spec version: 15.11.0
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Question } from './question';


export interface Answer { 
    /**
     * Resposta original em português.
     */
    portuguesAnswer?: string;
    question?: Question;
    /**
     * Resposta traduzida para o inglês.
     */
    englishAnswer?: string;
    /**
     * Identificador único da entidade.
     */
    id?: string;
}
