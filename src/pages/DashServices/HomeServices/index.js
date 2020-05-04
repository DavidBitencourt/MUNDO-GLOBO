import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import gShowImg from "../../../assets/images/gshow.png";
import g1Img from "../../../assets/images/serviceG1.png";
import globoPlayImg from "../../../assets/images/serviceGloboPlay.png";
import WebView from "../../../components/WebView";
import {
  ButtonServiceStyled,
  ContainerServiceStyled,
  ContainerStyled,
  FlatListStyled,
  HeaderUserStyled,
  ImageStyled,
  TitleStyled,
} from "./styles";
export default function HomeServices() {
  const navigation = useNavigation();
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl("");
  }, []);
  const services = [
    {
      id: 1,
      title: "G1",
      url: "https://g1.globo.com/",
      img: g1Img,
    },
    {
      id: 2,
      title: "globoPlay",
      url: "https://globoplay.globo.com/",
      img: globoPlayImg,
    },
    {
      id: 3,
      title: "Gshow",
      url: "https://gshow.globo.com/",
      img: gShowImg,
    },
  ];
  return (
    <>
      {url ? (
        <WebView url={url} />
      ) : (
        <ContainerStyled>
          <HeaderUserStyled>
            <TitleStyled>Mundo Globo</TitleStyled>
          </HeaderUserStyled>
          <FlatListStyled
            data={services}
            keyExtractor={(service) => service.title}
            showsVerticalScrollIndicator={false}
            horizontal
            renderItem={({ item: service, index }) => (
              <ContainerServiceStyled key={index}>
                <ButtonServiceStyled
                  onPress={() => {
                    setUrl(service.url);
                  }}
                >
                  <ImageStyled source={service.img} width={100} height={100} />
                </ButtonServiceStyled>
              </ContainerServiceStyled>
            )}
          />
        </ContainerStyled>
      )}
    </>
  );
}
