import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import gShowImg from "../../../assets/images/gshow.png";
import g1Img from "../../../assets/images/serviceG1.png";
import globoPlayImg from "../../../assets/images/serviceGloboPlay.png";
import Button from "../../../components/Button";
import {
  ButtonContainerStyled,
  ContainerImageStyled,
  ContainerProfileStyled,
  ContainerServiceStyled,
  ContainerStyled,
  DescriptionServiceStyled,
  HeaderUserStyled,
  ImageStyled,
  LabelStyled,
  NameUser,
  OptionsProfileStyled,
  TitleProfileStyled,
} from "./styles";
export default function Settings() {
  const navigation = useNavigation();
  const [url, setUrl] = useState("");
  const [freeDisabled, setFreeDisabled] = useState(false);
  const [paidDisabled, setPaidDisabled] = useState(true);
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
      img: globoPlayImg,
    },
  ];
  //Enviamos um e-mail com instruções para a criação de uma nova senha
  return (
    <ContainerStyled>
      <HeaderUserStyled>
        <ContainerImageStyled>
          <ImageStyled
            source={url ? url : services[0].img}
            width={100}
            height={100}
          />
        </ContainerImageStyled>
        <NameUser>David Bitencourt</NameUser>
      </HeaderUserStyled>
      <ContainerProfileStyled>
        <TitleProfileStyled>Seu conteúdo Globo</TitleProfileStyled>
        <OptionsProfileStyled>
          <ButtonContainerStyled>
            <Button
              text="Grátis (2)"
              textColor="#ffffff"
              backgroundColor="#8708FE"
              handler={() => {
                setFreeDisabled(false);
                setPaidDisabled(true);
              }}
              width={100}
              disabled={freeDisabled}
            />
            <Button
              text="Pago (1)"
              textColor="#ffffff"
              backgroundColor="#8708FE"
              handler={() => {
                setFreeDisabled(true);
                setPaidDisabled(false);
              }}
              width={100}
              disabled={paidDisabled}
            />
          </ButtonContainerStyled>
        </OptionsProfileStyled>
        {freeDisabled ? (
          <>
            <LabelStyled>Gerenciar assinaturas pagas</LabelStyled>
            <ContainerServiceStyled>
              <ContainerImageStyled>
                <ImageStyled source={globoPlayImg} width={100} height={100} />
              </ContainerImageStyled>
              <DescriptionServiceStyled>
                <LabelStyled>Globo Play</LabelStyled>
                <Fontisto name="player-settings" size={40} color="#000000" />
              </DescriptionServiceStyled>
            </ContainerServiceStyled>
          </>
        ) : (
          <>
            <LabelStyled>Gerenciar serviços gratuitos</LabelStyled>
            <ContainerServiceStyled>
              <ContainerImageStyled>
                <ImageStyled source={g1Img} width={100} height={100} />
              </ContainerImageStyled>
              <DescriptionServiceStyled>
                <LabelStyled>G1</LabelStyled>
                <Fontisto name="player-settings" size={40} color="#000000" />
              </DescriptionServiceStyled>
            </ContainerServiceStyled>
            <ContainerServiceStyled>
              <ContainerImageStyled>
                <ImageStyled source={gShowImg} width={100} height={100} />
              </ContainerImageStyled>
              <DescriptionServiceStyled>
                <LabelStyled>GShow</LabelStyled>
                <Fontisto name="player-settings" size={40} color="#000000" />
              </DescriptionServiceStyled>
            </ContainerServiceStyled>
          </>
        )}
      </ContainerProfileStyled>
    </ContainerStyled>
  );
}
