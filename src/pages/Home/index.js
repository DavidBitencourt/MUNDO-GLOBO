import { useNavigation } from "@react-navigation/native";
import React from "react";
import logo from "../../assets/images/globo.png";
import Button from "../../components/Button";
import {
  BoxButtonStyled,
  ContainerButtonsStyled,
  ContainerLogoStyled,
  ContainerStyled,
  LabelStyled,
  LogoStyled,
  TitleStyled,
} from "./styles";
export default function Home() {
  const navigation = useNavigation();

  return (
    <ContainerStyled>
      <TitleStyled>Mundo Globo</TitleStyled>
      <LabelStyled>A sua Globo,</LabelStyled>
      <LabelStyled>onde você estiver.</LabelStyled>
      <ContainerLogoStyled>
        <LogoStyled
          source={logo}
          style={{
            top: 150,
            left: 250,
          }}
        />
      </ContainerLogoStyled>
      <ContainerButtonsStyled>
        <BoxButtonStyled
          accessible={true}
          accessibilityLabel="ENTRAR COM MINHA CONTA"
          accessibilityHint="Avançar para a tela de login"
        >
          <Button
            text="ENTRAR COM MINHA CONTA"
            textColor="#ffffff"
            backgroundColor="#8708FE"
            handler={() => {
              navigation.navigate("Login");
            }}
          />
        </BoxButtonStyled>
        <BoxButtonStyled
          accessible={true}
          accessibilityLabel="CRIAR MINHA CONTA"
          accessibilityHint="Avançar para a tela de cadastro"
        >
          <Button
            text="CRIAR MINHA CONTA"
            textColor="#ffffff"
            backgroundColor="#8708FE"
            handler={() => {
              navigation.navigate("RegisterUser");
            }}
          />
        </BoxButtonStyled>
      </ContainerButtonsStyled>
    </ContainerStyled>
  );
}
