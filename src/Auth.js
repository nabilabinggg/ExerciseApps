import React, { useEffect } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Auth = ({ navigation }) => {
  useEffect(() => {
    const _validationSession = async () => {
      const isLogin = await AsyncStorage.getItem("session_id");
      navigation.replace(isLogin ? "Home" : "SignIn");
    };
    _validationSession();
  },[]);

  return (
    <ActivityIndicator
      animating={true}
      color="tomato"
      size="large"
      style={{
        alignItems: "center",
        justifyContent: "center",
        opacity: 1.0,
        height: 200,
      }}
    />
  )
};

export default Auth;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    }
})
