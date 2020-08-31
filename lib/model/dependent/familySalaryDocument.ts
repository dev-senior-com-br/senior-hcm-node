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
import { Dependent } from './dependent';
import { Othercompany } from './othercompany';
import { SchoolGradeType } from './schoolGradeType';


export interface FamilySalaryDocument { 
    /**
     * Percentual em novembro
     */
    percentageInNovember?: number;
    /**
     * Frequência em novembro
     */
    frequencyInNovember?: string;
    school?: Othercompany;
    /**
     * Ano de referência
     */
    referenceYear?: number;
    /**
     * É bolsista?
     */
    scholarship?: boolean;
    /**
     * Frequência em maio
     */
    frequencyInMay?: string;
    /**
     * Id da entidade
     */
    id?: string;
    schoolGrade?: SchoolGradeType;
    /**
     * Percentual em maio
     */
    percentageInMay?: number;
    dependent?: Dependent;
    /**
     * Vacinação
     */
    vaccination?: string;
}