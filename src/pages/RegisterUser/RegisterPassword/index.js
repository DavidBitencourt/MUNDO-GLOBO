import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { Alert, AsyncStorage } from "react-native";
import { v4 } from "react-native-uuid";
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
  const [usersStorage, setUsersStorage] = useState([]);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let getUsersStorage;

  const getUsers = async () => {
    getUsersStorage = await AsyncStorage.getItem("users");
    getUsersStorage && setUsersStorage(JSON.parse(getUsersStorage));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const registerUser = async () => {
    if (name && email && gender && password && confirmPassword) {
      const id = v4();
      let newUser = { id, name, email, password, uri: "" };
      usersStorage.push(newUser);
      await AsyncStorage.setItem("users", JSON.stringify(usersStorage));
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
          accessible={true}
          accessibilityLabel="Senha"
          accessibilityHint="Insira aqui a sua senha"
        />
        <Input
          label={"Confirme a sua senha"}
          onChange={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          secureTextEntry
          accessible={true}
          accessibilityLabel="Confirme a sua senha"
          accessibilityHint="Insira aqui a mesma senha para confirmar"
        />
        <BoxButtonStyled>
          <Button
            text="CADASTRAR"
            textColor="#ffffff"
            backgroundColor="#8708FE"
            handler={() => {
              registerUser();
            }}
            accessible={true}
            accessibilityLabel="Cadastrar"
            accessibilityHint="Finalizar cadastro e navegar para tela de login"
          />
        </BoxButtonStyled>
      </LinearGradient>
    </ContainerStyled>
  );
}
