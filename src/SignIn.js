import React, { useState } from "react";
import {useFocusEffect} from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  Alert,
} from "react-native";
import Logo from "../assets/logo.png";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SignIn = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userUsername, setUserUsername] = useState("");

  const { height } = useWindowDimensions();

  const submit = async () => {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const data = {
      username,
      password,
    };
    setUserUsername(data.username);
    console.log(userUsername);
    await AsyncStorage.setItem("user_username", data.username);
    axios
      .post(
        "https://salty-everglades-72802.herokuapp.com/api/user/login",
        data,
        {
          headers: headers,
        }
      )
      .then((res) => {
        Alert.alert("Login berhasil");
        if (res.data) {
          AsyncStorage.setItem("session_id", "session_id" + Math.random());
          navigation.replace("Home");
        }
      })
      .catch((err) => {
        console.log("err: ", err);
        Alert.alert("Login gagal!", "Username/password salah");
      });
  };

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setUsername('');
        setPassword('');
      };
    }, [])
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <Text style={styles.text}>Selamat Datang Kembali!</Text>
        <View style={{ width: "100%", marginTop: 20 }}>
          <TextInput
            style={styles.textinput}
            placeholder="Username"
            value={username}
            autoCapitalize="none"
            onChangeText={(value) => setUsername(value)}
          />
          <TextInput
            style={styles.textinput}
            secureTextEntry={true}
            autoCapitalize="none"
            value={password}
            placeholder="Password"
            onChangeText={(value) => setPassword(value)}
          />
          <TouchableOpacity onPress={() => submit()} style={styles.button}>
            <Text style={[styles.textbutton]}>Masuk</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: "grey",
              marginTop: 20,
            }}
          >
            Belum memiliki akun? Register
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  logo: {
    marginTop: 40,
    width: "65%",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  textinput: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "tomato",
    borderWidth: 1,
    borderRadius: 40,
    marginVertical: 10,
    paddingVertical: 6,
    paddingHorizontal: 15,
  },
  button: {
    fontSize: 16,
    width: "100%",
    borderRadius: 40,
    padding: 10,
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "tomato",
  },
  textbutton: {
    fontWeight: "bold",
    color: "white",
  },
});
export default SignIn;
