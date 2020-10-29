export interface ListVacanciesDTO {
  reason?: string;
  q?: string[];
  situation: string[];
  locations?: string[];
  responsibles?: string[];
  minCreateDate?: Date;
  maxCreateDate?: Date;
  minConclusionDate?: Date;
  maxConclusionDate?: Date;
  requesters?: string[];
  positions?: string[];
  minProgress?: number;
  maxProgress?: number;
  referenceDate?: Date;
  page?: number;
  size?: number;
  considerHierarchy?: boolean;
  ticket?: string;
  activeEmployeeId?: string;
  fromAnalytics?: boolean;
}

export interface VacancyDetailsDTO {
  id: string;
  activeEmployeeId?: string;
  fromRecruitment?: boolean;
}

export interface VacancyDetailsSummaryDTO {
  vacancyId: string;
}

export interface SearchPersonsDTO {
  q?: string;
  referenceDate: Date;
}