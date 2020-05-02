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
  TextLinkStyled,
  TextStyled,
  TitleStyled,
} from "./styles";
export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          paddingTop: 25,
          margin: 0,
          borderRadius: 28,
          alignItems: "center",
          justifyContent: "center",
          top: 140,
        }}
        start={[1, 0.4]}
        end={[1, 1]}
      >
        <TitleStyled>login</TitleStyled>
        <Input
          label={"E-mail"}
          onChange={(text) => setEmail(text)}
          value={email}
        />
        <Input
          label={"Senha"}
          onChange={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <TextStyled>
          Esqueceu a senha? <TextLinkStyled> Clique aqui.</TextLinkStyled>
        </TextStyled>
        <BoxButtonStyled>
          <Button
            text="ENTRAR"
            textColor="#ffffff"
            backgroundColor="#8708FE"
            handler={() => {
              navigation.navigate("UploadImageUser");
            }}
          />
        </BoxButtonStyled>
      </LinearGradient>
    </ContainerStyled>
  );
}
