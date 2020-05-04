import { StyleSheet } from "react-native";
import styled from "styled-components/native";
export const ContainerStyled = styled.View`
  width: 100%;
  height: 100%;
  background-color: #191919;
  padding: 25px;
  display: flex;
  align-items: center;
`;

export const ContainerLogoStyled = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
`;

export const LogoStyled = styled.Image`
  width: 320px;
  height: 320px;
`;

export const ContainerLoginStyled = styled.View`
  width: 100%;
  height: 100%;
  background-color: aqua;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleStyled = styled.Text`
  font-size: 30px;
  color: #ffffff;
  font-weight: bold;
`;

export const BoxButtonStyled = styled.View`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: "100%",
    height: 55,
    backgroundColor: "white",
    fontSize: 18,
    borderRadius: 14,
    color: "black",
    color: "black",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
  inputAndroid: {
    width: "100%",
    height: 55,
    borderRadius: 14,
    backgroundColor: "white",
    fontSize: 18,
    color: "black",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
  placeholder: {
    color: "#8E8E93",
    fontSize: 18,
    fontWeight: "bold",
  },
});
