export interface ResponseApiAcoes {
  id: number;
  name: string;
  ticker: string;
  minimumValue: number;
  profitability: number;
}
export interface ResponseApiPrev {
  id: number;
  name: string;
  type: string;
  minimumValue: number;
  tax: number;
  redemptionTerm: number;
  profitability: number;
}
