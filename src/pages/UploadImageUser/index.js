import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import React, { useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import uploadImg from "../../assets/images/uploadImg.png";
import Button from "../../components/Button";
import {
  BoxButtonStyled,
  ContainerImgStyled,
  ContainerLogoStyled,
  ContainerStyled,
  LogoStyled,
  TextImgStyled,
  TextNameUserStyled,
} from "./styles";
export default function UploadImageUser() {
  const navigation = useNavigation();
  const [img, setImg] = useState({
    image: "",
  });

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
        return;
      }
    }
    uploadFileImg();
  };

  const uploadFileImg = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    if (!result.cancelled) {
      setImg({ image: result.uri });
    }
  };

  return (
    <ContainerStyled>
      <ContainerLogoStyled>
        <LogoStyled source={uploadImg} />
      </ContainerLogoStyled>
      <ContainerImgStyled>
        {img.image ? (
          <TouchableOpacity
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 50,
            }}
            onPress={() => getPermissionAsync()}
          >
            <Image
              source={{
                uri: img.image,
              }}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 46,
              }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              width: 100,
              height: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => getPermissionAsync()}
          >
            <FontAwesome5 name="user-alt" size={70} color="#000000" />
            <TextImgStyled>selecionar foto de perfil</TextImgStyled>
          </TouchableOpacity>
        )}
      </ContainerImgStyled>
      <TextNameUserStyled>David Bitencourt</TextNameUserStyled>
      <BoxButtonStyled>
        <Button
          text="CONTINUAR"
          textColor="#ffffff"
          backgroundColor="#8708FE"
          handler={() => {
            navigation.navigate("SelectServicesBack");
          }}
        />
      </BoxButtonStyled>
    </ContainerStyled>
  );
}
