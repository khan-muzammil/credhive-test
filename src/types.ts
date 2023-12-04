export interface CompanyInfo {
  companyName: string;
  address: string;
  registrationDate: Date;
  numberOfEmployees: number;
  raisedCapital: number;
  turnover: number;
  netProfit: number;
  contactNumber: string;
  contactEmail: string;
  companyWebsite: string;
  loanAmount: number;
  loanInterest: number;
  accountStatus: "active" | "pending" | "closed";
  logo: string;
}

export type FilterType = {
  loanRange: { min: number; max: number };
  accountStatus: string;
  dateRange: { start: string; end: string };
};
