import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Custombutton from "../../Components/Custombutton";
import Custominput from "../../Components/Custominput";
import { useNavigation } from "@react-navigation/native";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  const onForgotPasswordPressed = () => {
    console.warn("hi");
    navigation.navigate("ResetPassword");
  };

  return (
    <View style={Styles.root}>
      <Text style={Styles.title}>Reset your password</Text>
      <Custominput placeholder={"Email"} value={email} setValue={setEmail} />

      <Custombutton
        text="Send Reset Password Email"
        onPress={onForgotPasswordPressed}
        type="SECONDARY"
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

export default ForgotPassword;
