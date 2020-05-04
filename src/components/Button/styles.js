import styled from "styled-components/native";

export const ButtonStyled = styled.TouchableOpacity`
  width: ${({ width }) => (width ? width : 100)}%;
  height: 50px;
  border-radius: 50px;
  align-items: center;
  background-color: ${({ canceled }) => (canceled ? "#8e8e93" : "transparent")};
  justify-content: center;
  flex-grow: 1;
`;

export const TextButtonStyled = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${({ textColor }) => textColor};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
