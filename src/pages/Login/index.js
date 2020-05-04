import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { Alert, AsyncStorage } from "react-native";
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
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    let usersStorage = await AsyncStorage.getItem("users");
    usersStorage = JSON.parse(usersStorage);
    setUsers(usersStorage);
  };

  useEffect(() => {
    AsyncStorage.removeItem("session");
    getUsers();
  }, []);

  const login = async () => {
    if (users) {
      let user = await users.find((user) => {
        return user.email === email && user.password === password;
      });
      if (user) {
        if (user.uri) {
          await AsyncStorage.setItem("session", JSON.stringify(user));
          navigation.navigate("DashServices");
        } else {
          navigation.navigate("UploadImageUser", { user });
        }
      } else {
        Alert.alert("Usuário ou senha inválido.");
      }
    } else {
      Alert.alert("Para começar, faça o seu cadastro!");
      navigation.navigate("Home");
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
          accessible={true}
          accessibilityLabel="E-mail"
          accessibilityHint="Insira aqui o seu e-mail"
        />
        <Input
          label={"Senha"}
          onChange={(text) => setPassword(text)}
          value={password}
          secureTextEntry
          accessible={true}
          accessibilityLabel="Senha"
          accessibilityHint="Insira aqui a sua senha"
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
              login();
            }}
            accessible={true}
            accessibilityLabel="Entrar"
            accessibilityHint="Efetuar login"
          />
        </BoxButtonStyled>
      </LinearGradient>
    </ContainerStyled>
  );
}
