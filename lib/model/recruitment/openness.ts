/**
 * Recrutamento e Seleção
 * Serviço do Gestão de Recrutamento e Seleção.
 *
 * OpenAPI spec version: 16.0.2
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { BigFive } from './bigFive';


export interface Openness { 
    /**
     * Faceta de Liberalismo
     */
    liberalism?: number;
    /**
     * Faceta de Aventura
     */
    adventurousness?: number;
    /**
     * Faceta de Curiosidade intelectual
     */
    intellect?: number;
    /**
     * Valor desta dimensão
     */
    dimensionValue?: number;
    /**
     * Faceta de Interesses artísticos
     */
    artisticInterests?: number;
    /**
     * Faceta de Consciência emocional
     */
    emotionality?: number;
    /**
     * Identificador único da entidade.
     */
    id?: string;
    /**
     * Faceta de Imaginação
     */
    imagination?: number;
    bigFive?: BigFive;
}
