import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import logo from "../../assets/images/globo.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import {
  BoxButtonStyled,
  ContainerLogoStyled,
  ContainerStyled,
  LogoStyled,
  pickerSelectStyles,
  TitleStyled,
} from "./styles";
export default function RegisterUser() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const genders = [
    { label: "Masculino", value: "male" },
    { label: "Feminino", value: "female" },
    { label: "Outro", value: "other" },
  ];

  const verifyData = async () => {
    if (name && email && gender) {
      let obj = {
        name,
        email,
        gender,
      };
      navigation.navigate("RegisterPassword", obj);
    } else {
      Alert.alert("Verifique se todos os dados foram preenchidos.");
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
          label={"Nome completo"}
          onChange={(text) => setName(text)}
          value={name}
          accessible={true}
          accessibilityLabel="Nome completo"
          accessibilityHint="Insira aqui o seu nome"
        />
        <Input
          label={"E-mail"}
          onChange={(text) => setEmail(text)}
          value={email}
          accessible={true}
          accessibilityLabel="E-mail"
          accessibilityHint="Insira aqui o seu e-mail"
        />
        <View
          style={{
            width: "85%",
            height: 50,
            marginTop: 35,
            borderRadius: 14,
          }}
          accessible={true}
          accessibilityLabel="Qual gênero você se identifica"
          accessibilityHint="Escolha uma das opções"
        >
          <RNPickerSelect
            onValueChange={(value) => {
              setGender(value);
            }}
            items={genders}
            value={gender}
            placeholder={{
              label: "Qual gênero você se identifica",
              value: null,
            }}
            InputAccessoryView={() => null}
            style={pickerSelectStyles}
          />
        </View>
        <BoxButtonStyled
          accessible={true}
          accessibilityLabel="Qual gênero você se identifica"
          accessibilityHint="Avançar para continuar cadastro"
        >
          <Button
            text="CONTINUAR"
            textColor="#ffffff"
            backgroundColor="#8708FE"
            handler={() => {
              verifyData();
            }}
          />
        </BoxButtonStyled>
      </LinearGradient>
    </ContainerStyled>
  );
}
