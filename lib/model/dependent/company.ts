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


export interface Company { 
    /**
     * Código da empresa.
     */
    code?: number;
    /**
     * Relacionamento com a sede da empresa
     */
    headquarter?: string;
    /**
     * Nome da empresa.
     */
    companyname: string;
    /**
     * Id da entidade.
     */
    id?: string;
    /**
     * Cnpj da empresa.
     */
    cnpj: string;
}
