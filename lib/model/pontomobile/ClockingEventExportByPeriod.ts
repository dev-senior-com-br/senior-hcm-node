export interface ClockingEventExportByPeriodIn {
  period: {
    initialDate: string;
    finalDate: string;
    initialTime?: string;
    finalTime?: string;
  };
  fileType: string;
  exportGeolocation?: boolean;
}

export interface ClockingEventExportByPeriodOut {
  locationURI: string;
}
