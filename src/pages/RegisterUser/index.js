import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import logo from "../../assets/images/globo.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import {
  BoxButtonStyled,
  ContainerLogoStyled,
  ContainerStyled,
  LogoStyled,
  TitleStyled,
} from "./styles";
export default function RegisterUser() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <ContainerStyled>
      <ContainerLogoStyled>
        <LogoStyled
          source={logo}
          style={{
            top: 35,
          }}
        />
      </ContainerLogoStyled>
      <LinearGradient
        colors={["#29323c", "#191919"]}
        style={{
          width: "100%",
          height: "80%",
          paddingTop: 15,
          margin: 0,
          borderRadius: 28,
          alignItems: "center",
          justifyContent: "center",
          top: 140,
        }}
        start={[1, 0.4]}
        end={[1, 1]}
      >
        <TitleStyled>cadastro</TitleStyled>
        <Input
          label={"Nome completo"}
          onChange={(text) => setName(text)}
          value={name}
        />
        <Input
          label={"E-mail"}
          onChange={(text) => setEmail(text)}
          value={email}
        />
        <Input
          label={"Com qual gênero você se identica"}
          onChange={(text) => setName(text)}
          value={name}
        />
        <BoxButtonStyled>
          <Button
            text="ENTRAR"
            textColor="#ffffff"
            backgroundColor="#8708FE"
            handler={() => {
              navigation.navigate("RegisterPassword");
            }}
          />
        </BoxButtonStyled>
      </LinearGradient>
    </ContainerStyled>
  );
}
