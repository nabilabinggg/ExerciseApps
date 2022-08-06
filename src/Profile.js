import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  const [usernameUser, setUsernameUser] = useState('');

  const displayUser = () => {
    AsyncStorage.getItem("user_username").then((value) => {
      setUsernameUser(value);
    });
  };

  useEffect(() => {
    if ("session_id") {
      displayUser();
    } else {
      logout();
    }
  }, []);

  const logout = async () => {
    await AsyncStorage.clear();
    navigation.replace("SignIn")
  };

  return (
    <View style={[styles.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.block]}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text
              style={{
                marginBottom: 20,
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
              }}
            >
              Hi, {usernameUser} !
            </Text>
          </View>

          <View style={[styles.box]}>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text style={{ fontSize: 23, fontWeight: "bold", marginBottom:20 }}>
                Tentang Kami
              </Text>
            </View>
            <Text 
              style={{
                marginBottom:20
              }}>
              Aplikasi ini dibuat dengan tujuan sebagai panduan agar masyarakat
              dapat dengan mudah berolahraga di rumah dengan gerakan yang tepat.
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginRight: 40,
                marginBottom:20
              }}
            >
              <Ionicons
                name="information-circle-outline"
                style={{ fontSize: 20, marginRight: 10 }}
              ></Ionicons>
              <Text>
                Video-video yang terdapat dalam aplikasi ini adalah milik Emi
                Wong dan diambil dari youtube channel Emi Wong.
              </Text>
            </View>
            <View>
              <Text style={{ marginBottom: 10 }}>Social Media Emi Wong :</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: 20,
                  }}
                >
                  <TouchableOpacity
                    onPress={() =>
                      Linking.openURL("https://www.instagram.com/emiwong_/")
                    }
                  >
                    <Ionicons
                      name="logo-instagram"
                      style={{ fontSize: 25, marginRight: 10 }}
                    ></Ionicons>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() =>
                      Linking.openURL("https://www.youtube.com/c/EmiWong")
                    }
                  >
                    <Ionicons
                      name="logo-youtube"
                      style={{ fontSize: 25, marginRight: 10 }}
                    ></Ionicons>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <TouchableOpacity onPress={logout} style={styles.button}>
            <Text style={styles.textbutton}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5A80E8",
  },
  logo: {
    width: "65%",
  },
  block: {
    margin: 30,
    display: "flex",
    flexDirection: "column",
  },
  textbutton: {
    fontWeight: "bold",
    color: "white",
  },
  button: {
    borderRadius: 40,
    padding: 10,
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "tomato",
  },
  box: {
    backgroundColor: "#fff",
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
});