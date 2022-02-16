import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Custombutton from "../../Components/Custombutton";
import Custominput from "../../Components/Custominput";
import { useNavigation } from "@react-navigation/native";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const navigation = useNavigation();

  const onChangePasswordPressed = () => {
    console.warn("hi");
    navigation.navigate("Home");
  };
  return (
    <View style={Styles.root}>
      <Text style={Styles.title}>Change your password</Text>
      <Custominput
        placeholder={"Chosse new password"}
        value={password}
        setValue={setPassword}
      />
      <Custominput
        placeholder={"Confirm your password"}
        value={password2}
        setValue={setPassword2}
      />

      <Custombutton
        text="Change Password"
        onPress={onChangePasswordPressed}
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

export default NewPassword;
