import styled from "styled-components/native";

export const Container = styled.View`
  padding: 10px;
`;
export const Details = styled.View`
  width: 350px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 7px;
`;
export const AgroupTitle = styled.View`
  padding-top: 10px;
  padding-left: 10px;
`;
export const Name = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.purple_title};
`;
export const Type = styled.Text`
  color: ${({ theme }) => theme.colors.gray_dark};
`;

export const WrapperName = styled.View`
  left: 8px;
  top: 25px;
`;
export const ValorMinimo = styled.Text`
  padding-bottom: 10px;
  color: ${({ theme }) => theme.colors.gray_dark};
  font-weight: bold;
`;
export const Taxa = styled.Text`
  padding-bottom: 10px;
  color: ${({ theme }) => theme.colors.gray_dark};
  font-weight: bold;
`;
export const Resgate = styled.Text`
  padding-bottom: 10px;
  color: ${({ theme }) => theme.colors.gray_dark};
  font-weight: bold;
`;
export const Rentabilidade = styled.Text`
  padding-bottom: 10px;
  color: ${({ theme }) => theme.colors.gray_dark};
  font-weight: bold;
`;

export const WrapperDetails = styled.View`
  align-items: flex-end;
  right: 8px;
  bottom: 98px;
`;
export const MinimumValue = styled.Text`
  color: ${({ theme }) => theme.colors.gray_dark};
  font-weight: bold;
  padding-bottom: 10px;
`;

export const Tax = styled.Text`
  color: ${({ theme }) => theme.colors.gray_dark};
  font-weight: bold;
  padding-bottom: 10px;
`;

export const RedemptionTerm = styled.Text`
  color: ${({ theme }) => theme.colors.gray_dark};
  font-weight: bold;
  padding-bottom: 10px;
`;

export const Profitability = styled.Text`
  color: ${({ theme }) => theme.colors.gray_dark};
  font-weight: bold;
  padding-bottom: 10px;
`;
