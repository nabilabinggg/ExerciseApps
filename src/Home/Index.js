import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import BMIHome from "./BMI";
import VidHome from "./TimelineVideo";
import Ionicons from "react-native-vector-icons/Ionicons";
import Logo from "../../assets/logo.png";

export default function Home({ navigation }) {
  const { height } = useWindowDimensions();
  return (
    <View style={[styles.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.block]}>
          <View
            style={{
              height: 250,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={Logo}
              style={[styles.logo, { height: height * 0.3 }]}
              resizeMode="contain"
            />
          </View>
          <View style={{ marginTop: 30 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Indeks Massa Tubuh")}
            >
              <BMIHome />
            </TouchableOpacity>
          </View>
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
                Video
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("ComponentVid")}
              >
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: "#fff",
                      textAlign: "center",
                      marginTop: 4,
                    }}
                  >
                    Lihat Lainnya
                  </Text>
                  <Ionicons
                    name="chevron-forward-outline"
                    style={{ color: "#FFFF", marginTop: 6 }}
                  ></Ionicons>
                </View>
              </TouchableOpacity>
            </View>
            <VidHome />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

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
});
