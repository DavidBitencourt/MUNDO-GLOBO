import PropTypes from "prop-types";
import React from "react";
import { OutlinedTextField } from "react-native-material-textfield";
import { BoxInputStyled } from "./styles";

export default function Input({
  label,
  keyboardType,
  onChange,
  value,
  secureTextEntry,
}) {
  Input.defaultProps = {
    value: "",
    label: "",
    errorMessage: "",
    handler: () => {},
    secureTextEntry: false,
  };

  Input.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    errorMessage: PropTypes.string,
    handler: PropTypes.func,
    secureTextEntry: PropTypes.bool,
  };

  return (
    <BoxInputStyled>
      <OutlinedTextField
        label={label}
        keyboardType={keyboardType ? keyboardType : "default"}
        onChangeText={(text) => {
          onChange(text);
        }}
        fontSize={18}
        labelFontSize={17}
        activeLineWidth={0}
        disabledLineWidth={0}
        lineWidth={0}
        style={{
          paddingLeft: 10,
          paddingTop: 5,
          borderRadius: 50,
          width: "100%",
          height: 40,
          color: "#000000",
          alignItems: "center",
          justifyContent: "center",
        }}
        tintColor={"#8E8E93"}
        baseColor={"#8E8E93"}
        labelTextStyle={{
          color: "#8E8E93",
          fontWeight: "bold",
        }}
        labelOffset={{ y0: -5, y1: -26, x1: 10, x0: 10 }}
        value={value}
        secureTextEntry={secureTextEntry}
      />
    </BoxInputStyled>
  );
}
