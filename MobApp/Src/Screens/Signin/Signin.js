import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import Logo from "../../../assets/logo2.png";
import Custominput from "../../Components/Custominput";
import Custombutton from "../../Components/Custombutton";
import { useNavigation } from "@react-navigation/native";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { height } = useWindowDimensions();
  const onSignInPressed = () => {
    console.warn("Sign in");
    navigation.navigate("Home");
  };
  const navigation = useNavigation();
  const onForgotPasswordPressed = () => {
    console.warn("hi in");
    navigation.navigate("ForgotPassword");
  };
  return (
    <View style={Styles.root}>
      <Image
        source={Logo}
        resizeMode="contain"
        style={(Styles.logo, { height: height * 0.3 })}
      ></Image>
      <Custominput placeholder={"Email"} value={email} setValue={setEmail} />
      <Custominput
        placeholder={"Password"}
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <Custombutton
        text="Sign In"
        type="PRIMARY"
        onPress={onSignInPressed}
      ></Custombutton>
      <Custombutton
        text="Forgot Password?"
        onPress={onForgotPasswordPressed}
        type="TERTIARY"
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
});
export default Signin;
