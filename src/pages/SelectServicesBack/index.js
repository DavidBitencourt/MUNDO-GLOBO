import { useNavigation } from "@react-navigation/native";
import React from "react";
import imgServicesBack from "../../assets/images/imgServicesBack.png";
import Button from "../../components/Button";
import {
  BoxButtonStyled,
  ContainerLogoStyled,
  ContainerStyled,
  LogoStyled,
  TitleStyled,
} from "./styles";
export default function SelectServicesBack() {
  const navigation = useNavigation();

  return (
    <ContainerStyled>
      <ContainerLogoStyled>
        <LogoStyled source={imgServicesBack} />
      </ContainerLogoStyled>
      <TitleStyled>falta pouco...</TitleStyled>
      <TitleStyled>escolha os conteúdos que você mais gosta (:</TitleStyled>
      <BoxButtonStyled>
        <Button
          text="CONTINUAR"
          textColor="#ffffff"
          backgroundColor="#8708FE"
          handler={() => {
            navigation.navigate("Login");
          }}
        />
      </BoxButtonStyled>
    </ContainerStyled>
  );
}
