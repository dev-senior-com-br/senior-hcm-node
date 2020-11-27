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
import { CurrencyType } from './currencyType';
import { Wageclass } from './wageclass';


export interface Wagelevel { 
    /**
     * Salário inicial
     */
    initialsalaryCrypto: string;
    /**
     * Sequência
     */
    sequence: number;
    wageclass?: Wageclass;
    /**
     * Nome do nível salarial
     */
    name: string;
    currency: CurrencyType;
    /**
     * Id do nível salarial
     */
    id?: string;
}
