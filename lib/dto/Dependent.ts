import { Pagination } from '@seniorsistemas/senior-core';

export interface DependentQueryDTO {
  dependentId: string;
}

export interface DependentListQueryDTO {
  employeeId: string;
  page: Pagination;
}