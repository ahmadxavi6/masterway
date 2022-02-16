import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Custombutton from "../../Components/Custombutton";
import Custominput from "../../Components/Custominput";
import { useNavigation } from "@react-navigation/native";

const ResetPassword = () => {
  const [code, setCode] = useState("");
  const navigation = useNavigation();

  const onConfirmPressed = () => {
    console.warn("hi");
    navigation.navigate("NewPassword");
  };
  const onSendPressed = () => {
    console.warn("hi");
  };
  return (
    <View style={Styles.root}>
      <Text style={Styles.title}>Confirm your email</Text>
      <Custominput placeholder={"Code"} value={code} setValue={setCode} />

      <Custombutton
        text="Confirm"
        onPress={onConfirmPressed}
        type="SECONDARY"
      ></Custombutton>
      <Custombutton
        text="Send Again"
        onPress={onSendPressed}
        type="PRIMARY"
      ></Custombutton>
    </View>
  );
};
const Styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051c60",
    margin: 10,
  },
});

export default ResetPassword;
