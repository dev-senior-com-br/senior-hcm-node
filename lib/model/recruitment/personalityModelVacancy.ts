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
import { PersonalityQuiz } from './personalityQuiz';
import { Vacancy } from './vacancy';


export interface PersonalityModelVacancy { 
    /**
     * Escrupulosidade.
     */
    conscientiousness?: number;
    /**
     * Abertura.
     */
    openness?: number;
    /**
     * Alcance emocional.
     */
    neuroticism?: number;
    /**
     * Extroversão.
     */
    extraversion?: number;
    personalityQuiz?: PersonalityQuiz;
    /**
     * Identificador único da entidade.
     */
    id?: string;
    vacancy?: Vacancy;
    /**
     * Amabilidade.
     */
    agreeableness?: number;
}
