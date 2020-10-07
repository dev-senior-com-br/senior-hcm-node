/**
 * Dependentes
 * HCM - Gestão de dependentes
 *
 * OpenAPI spec version: ${version}
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { IndexType } from './indexType';
import { InformationType } from './informationType';


export interface FinancialIndex { 
    indexType?: IndexType;
    /**
     * Código do índice
     */
    code?: number;
    /**
     * Quantidade de decimais
     */
    numberOfDecimals?: number;
    /**
     * Nome do índice
     */
    name?: string;
    /**
     * Id do índice
     */
    id?: string;
    /**
     * Quantidade de dígitos
     */
    numberOfDigits?: number;
    informationType?: InformationType;
}
