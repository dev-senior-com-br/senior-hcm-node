/**
 * Dependentes
 * HCM - Gestão de dependentes
 *
 * OpenAPI spec version: 6.4.0
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Address } from './address';
import { BankAccount } from './bankAccount';
import { BaseCalculationType } from './baseCalculationType';
import { City } from './city';
import { Dependent } from './dependent';
import { FixedJudicialValue } from './fixedJudicialValue';
import { MethodPaymentType } from './methodPaymentType';
import { Phone } from './phone';
import { VariableJudicialValue } from './variableJudicialValue';


export interface JudicialPension { 
    bankAccount?: BankAccount;
    address?: Address;
    baseCalculationType?: BaseCalculationType;
    variableJudicialValue?: VariableJudicialValue;
    /**
     * Data de encerramento
     */
    endDate?: string;
    /**
     * Cota salário família
     */
    familySalaryQuota?: number;
    methodPaymentType?: MethodPaymentType;
    /**
     * Sequência do cadastro
     */
    sequence?: number;
    /**
     * Telefones de contato
     */
    phone?: Array<Phone>;
    fixedJudicialValue?: FixedJudicialValue;
    /**
     * Id da entidade
     */
    id?: string;
    judicialDistrict?: City;
    dependent?: Dependent;
    /**
     * Data de inicio
     */
    startDate?: string;
    /**
     * Conta contábil
     */
    bookAccount?: string;
}
