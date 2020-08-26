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
import { Agreeableness } from './agreeableness';
import { Conscientiousness } from './conscientiousness';
import { Extraversion } from './extraversion';
import { Neuroticism } from './neuroticism';
import { Openness } from './openness';
import { PersonalityModelCandidate } from './personalityModelCandidate';


export interface BigFive { 
    conscientiousness?: Conscientiousness;
    personalityModelCandidate?: PersonalityModelCandidate;
    openness?: Openness;
    neuroticism?: Neuroticism;
    extraversion?: Extraversion;
    /**
     * Identificador único da entidade.
     */
    id?: string;
    agreeableness?: Agreeableness;
}
