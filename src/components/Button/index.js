import { LinearGradient } from "expo-linear-gradient";
import PropTypes from "prop-types";
import React from "react";
import { ButtonStyled, TextButtonStyled } from "./styles";
export default function Button({
  text,
  textColor,
  backgroundColor,
  handler,
  disabled,
  width,
}) {
  Button.defaultProps = {
    text: "",
    textColor: "",
    backgroundColor: "",
    handler: () => {},
    disabled: false,
    width: null,
  };

  Button.propTypes = {
    text: PropTypes.string,
    textColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    handler: PropTypes.func,
    disabled: PropTypes.bool,
    width: PropTypes.number,
  };

  return (
    <LinearGradient
      colors={disabled ? ["#f31d1d", "#f31d1d"] : ["#f31d1d", "#3827b4"]}
      style={{
        width: "85%",
        height: 50,
        padding: 0,
        borderRadius: 25,
        alignItems: "center",
      }}
      start={[0, 0]}
      end={[1, 1]}
    >
      <ButtonStyled
        backgroundColor={backgroundColor}
        onPress={() => handler()}
        canceled={disabled}
        width={width}
      >
        <TextButtonStyled disabled={disabled} textColor={textColor}>
          {text}
        </TextButtonStyled>
      </ButtonStyled>
    </LinearGradient>
  );
}
