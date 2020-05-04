import styled from "styled-components/native";

export const ContainerStyled = styled.View`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
`;

export const HeaderUserStyled = styled.View`
  width: 100%;
  height: 15%;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const TitleStyled = styled.Text`
  font-size: 30px;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  margin-left: 30px;
`;

export const FlatListStyled = styled.FlatList`
  width: 100%;
  height: 50%;
  margin-top: 10px;
`;

export const ContainerServiceStyled = styled.View`
  height: 100%;
  padding: 10px;
`;

export const ButtonServiceStyled = styled.TouchableOpacity`
  width: 90px;
  height: 90px;
  margin: 15px;
  border-radius: 35px;
`;

export const ImageStyled = styled.Image`
  width: ${({ width }) => width}%;
  height: ${({ height }) => height}%;
  border-radius: 35px;
`;

export const LabelStyled = styled.Text`
  font-size: 25px;
  color: #ffffff;
  font-weight: 100;
`;

export const ContainerLogoStyled = styled.View`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoStyled = styled.Image`
  width: 360px;
  height: 360px;
`;

export const ContainerButtonsStyled = styled.View`
  width: 100%;
  height: 65%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const BoxButtonStyled = styled.View`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
