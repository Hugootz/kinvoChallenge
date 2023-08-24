import styled from "styled-components/native";

export const Container = styled.View`
  padding: 10px;
`;
export const Details = styled.View`
  width: 350px;
  height: 180px;
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
export const Type = styled.Text``;
export const WrapperDetails = styled.View`
  align-items: flex-end;
  right: 8px;
  top: 30px;
`;
export const MinimumValue = styled.Text``;
export const Tax = styled.Text``;
export const RedemptionTerm = styled.Text``;
export const Profitability = styled.Text``;
