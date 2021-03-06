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
import { PersonalityModelCandidate } from './personalityModelCandidate';


export interface Values { 
    /**
     * Auto-crescimento.
     */
    selfEnhancement?: number;
    /**
     * Conservação.
     */
    conservation?: number;
    /**
     * Abertura à mudança.
     */
    opennessToChange?: number;
    personalityModelCandidate?: PersonalityModelCandidate;
    /**
     * Auto-transcendência.
     */
    selfTranscendence?: number;
    /**
     * Hedonismo.
     */
    hedonism?: number;
    /**
     * Identificador único da entidade.
     */
    id?: string;
}
