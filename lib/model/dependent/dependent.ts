/**
 * Dependentes
 * HCM - Gestão de dependentes
 *
 *
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Attachment } from './attachment';
import { City } from './city';
import { ESocialDependentType } from './eSocialDependentType';
import { Educationdegree } from './educationdegree';
import { Employee } from './employee';
import { GenderType } from './genderType';
import { KinshipDegreeType } from './kinshipDegreeType';
import { MaritalStatusType } from './maritalStatusType';


export interface Dependent { 
    /**
     * Representa se o dependente é elegível a pensão alimentícia
     */
    iseligibletoalimony: boolean;
    /**
     * Nome da mãe
     */
    mothersname: string;
    /**
     * Data de nascimento
     */
    birthdate?: string;
    gender?: GenderType;
    /**
     * Limite de idade para pensão familiar
     */
    agelimitfamilysalary: number;
    /**
     * Data da invalidez
     */
    disabilityDate?: string;
    educationdegree: Educationdegree;
    /**
     * Data de óbito
     */
    deathdate: string;
    employee: Employee;
    type: KinshipDegreeType;
    attachment?: Attachment;
    /**
     * CPF
     */
    cpf: string;
    /**
     * Id do dependente
     */
    id?: string;
    /**
     * Número do registro
     */
    registerNumber: string;
    /**
     * Certidão de óbito
     */
    deathcertificate: string;
    /**
     * Declaração de nascimento
     */
    livebirthdeclaration: string;
    /**
     * Representa se o dependente é contabilizado no IRRF
     */
    isaccountedforirrf: boolean;
    /**
     * Representa se o dependente é elegível para subsídio familiar (Salário família)
     */
    iseligibletofamilyallowence: boolean;
    eSocialDependentType: ESocialDependentType;
    placeofbirth?: City;
    /**
     * Número da folha
     */
    sheetNumber: string;
    /**
     * RG
     */
    rg: string;
    maritalstatus: MaritalStatusType;
    /**
     * Número do livro
     */
    bookNumber: string;
    /**
     * Limite de idade para IR
     */
    agelimitir: number;
    /**
     * Certidão de nascimento
     */
    birthcertificate: string;
    /**
     * Nome completo
     */
    fullname: string;
    /**
     * Nome do cartório
     */
    nameNotary: string;
}
