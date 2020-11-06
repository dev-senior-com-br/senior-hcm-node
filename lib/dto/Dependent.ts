import { Pagination } from '@seniorsistemas/senior-core';

export interface DependentQueryDTO {
  /**
   * Id do dependente
   */
  dependentId: string;
}

export interface DependentListQueryDTO {
  /**
   * Id do colaborador
   */
  employeeId: string;
  /**
   * Paginação da busca
   */
  page: Pagination;
}