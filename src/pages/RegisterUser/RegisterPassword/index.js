import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Alert } from "react-native";
import logo from "../../../assets/images/globo.png";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import {
  BoxButtonStyled,
  ContainerLogoStyled,
  ContainerStyled,
  LogoStyled,
  TitleStyled,
} from "./styles";
export default function RegisterPassword() {
  const navigation = useNavigation();
  const route = useRoute();
  const name = route.params.name;
  const email = route.params.email;
  const gender = route.params.gender;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerUser = async () => {
    if (password && confirmPassword && password === confirmPassword) {
      await Alert.alert("Cadastrado realizado com sucesso!");
      navigation.navigate("Login");
    } else {
      Alert.alert("Digite uma senha e confirme!");
    }
  };

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
          label={"Senha"}
          onChange={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <Input
          label={"Confirme a sua senha"}
          onChange={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          secureTextEntry
        />
        <BoxButtonStyled>
          <Button
            text="ENTRAR"
            textColor="#ffffff"
            backgroundColor="#8708FE"
            handler={() => {
              registerUser();
            }}
          />
        </BoxButtonStyled>
      </LinearGradient>
    </ContainerStyled>
  );
}
