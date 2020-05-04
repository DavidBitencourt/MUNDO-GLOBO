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

export const NameUser = styled.Text`
  font-size: 20px;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  margin-left: 30px;
`;

export const TitleStyled = styled.Text`
  font-size: 20px;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  margin-left: 30px;
`;

export const ContainerImageStyled = styled.View`
  width: 56px;
  height: 56px;
  background-color: blue;
  border-radius: 50px;
`;

export const ImageStyled = styled.Image`
  width: ${({ width }) => width}%;
  height: ${({ height }) => height}%;
  border-radius: 50px;
`;

export const ContainerProfileStyled = styled.View`
  width: 100%;
  height: 85%;
  display: flex;
  align-items: center;
  padding-top: 20px;
`;

export const TitleProfileStyled = styled.Text`
  font-size: 20px;
  color: #000000;
  font-weight: bold;
  text-align: center;
`;

export const OptionsProfileStyled = styled.View`
  width: 85%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  margin: 15px;
`;

export const ButtonContainerStyled = styled.TouchableOpacity`
  width: 60%;
  height: 100%;
  background-color: #8e8e93;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const LabelStyled = styled.Text`
  font-size: 20px;
  color: #000000;
  font-weight: 400;
  text-align: center;
`;

export const LogoStyled = styled.Image`
  width: 360px;
  height: 360px;
`;

export const ContainerServiceStyled = styled.View`
  width: 85%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  border-top-width: 2px;
  border-color: #8e8e93;
`;

export const DescriptionServiceStyled = styled.View`
  width: 90%;
  height: 100%;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
