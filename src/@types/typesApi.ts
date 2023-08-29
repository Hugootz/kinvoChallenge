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
export interface ResponseApiFundos {
  id: number;
  name: string;
  type: string;
  minimumValue: number;
  rating: number;
  profitability: number;
  status: number;
}
export interface ButtonStyle {
  detailsStyle: { backgroundColor: string };
  filter: { color: string };
}
export interface ButtonVariant {
  enabled: ButtonStyle;
  disabled: ButtonStyle;
}
export const colorChange = {
  enabled: {
    backgroundColor: "#000000",
    color: "#ffffffff",
  },
  disabled: {
    backgroundColor: "#ffffffff",
    color: "#000000",
  },
};
