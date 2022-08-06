import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import Logo from "../assets/logo.png";
import axios from "axios";

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { height } = useWindowDimensions();
  const submit = () => {
    const data = {
      username,
      email,
      password,
    };
    axios
      .post(
        "https://salty-everglades-72802.herokuapp.com/api/user/register",
        data
      )
      .then((res) => {
        console.log("res: ", res);
        Alert.alert("Registrasi Berhasil!", "Silahkan lakukan Login kembali!");
        navigation.replace("SignIn");
      })
      .catch((err) => {
        console.log("err: ", err);
        Alert.alert(
          "Registrasi Gagal!",
          "Email sudah digunakan/Email invalid!"
        );
      });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <Text style={styles.text}>Selamat Datang!</Text>
        <View style={{ width: "100%", marginTop: 20 }}>
          <TextInput
            value={username}
            style={styles.input}
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            value={email}
            style={styles.input}
            placeholder="Email"
            autoCapitalize="none"
            label="Email"
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            value={password}
            style={styles.input}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={submit} style={styles.button}>
            <Text
              style={{
                fontWeight: "700",
                color: "white",
                fontSize: 16,
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              color: "grey",
              marginTop: 20,
            }}
          >
            Telah memiliki akun? Masuk
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
  privacy: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#FF5733",
  },
  input: {
    backgroundColor: "white",
    borderColor: "tomato",
    borderWidth: 1,
    borderRadius: 40,
    marginVertical: 10,
    paddingVertical: 6,
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: "tomato",
    width: "100%",
    height: 45,
    borderRadius: 40,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignUp;
