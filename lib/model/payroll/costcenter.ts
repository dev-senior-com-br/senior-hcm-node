/**
 * Folha de Pagamento
 * HCM - Folha de pagamento
 *
 * OpenAPI spec version: 9.0.3
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Apportionment } from './apportionment';
import { Company } from './company';


export interface Costcenter { 
    /**
     * Código Texto C.Custo p/ Exportação
     */
    descriptionCode?: string;
    /**
     * Código do centro de custo
     */
    code?: string;
    budgetCompanyBranch?: Company;
    /**
     * Nome do centro de custo
     */
    name?: string;
    apportionment?: Apportionment;
    /**
     * Empresa do centro de custo
     */
    company?: string;
    /**
     * Id do centro de custo
     */
    id?: string;
    /**
     * Data de criação do centro de custo
     */
    creationDate?: string;
    gpsCompanyBranch?: Company;
    /**
     * Filial contábil
     */
    accountingBranch?: number;
    /**
     * Data de extinção do centro de custo
     */
    expirationDate?: string;
}
