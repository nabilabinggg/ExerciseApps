import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import Dance from "../../assets/dance.jpg";
import Upper from "../../assets/upperbody.jpeg";
import Lower from "../../assets/lowerbody.jpeg";
import { useNavigation } from "@react-navigation/native";

function VidHome() {
  const navigation = useNavigation();

  return (
    <View style={[styles.blockvid]}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ComponentVid", { screen: "Dance Workout" })
          }
        >
          <View style={[styles.boxvideo]}>
            <Image
              source={Dance}
              style={{
                height: 160,
                width: 300,
              }}
              resizeMode="cover"
            ></Image>
            <Text
              style={{
                fontSize: 16,
                position: "absolute",
                bottom: 10,
                left: 10,
                fontWeight: "bold",
                color: "#000",
              }}
            >
              Dance Workout
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ComponentVid", { screen: "Upper Body Workout" })
          }
        >
          <View style={[styles.boxvideo]}>
            <Image
              source={Upper}
              style={{
                height: 160,
                width: 300,
              }}
              resizeMode="cover"
            ></Image>
            <Text
              style={{
                fontSize: 16,
                position: "absolute",
                bottom: 10,
                left: 10,
                fontWeight: "bold",
                color: "#000",
              }}
            >
              Upper Body Workout
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ComponentVid", { screen: "Lower Body Workout" })
          }
        >
          <View style={[styles.boxvideo]}>
            <Image
              source={Lower}
              style={{
                height: 160,
                width: 300,
              }}
              resizeMode="cover"
            ></Image>
            <Text
              style={{
                fontSize: 16,
                position: "absolute",
                bottom: 10,
                left: 10,
                fontWeight: "bold",
                color: "#000",
              }}
            >
              Lower Body Workout
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
export default VidHome;

const styles = StyleSheet.create({
  blockvid: {
    margin: 10,
    display: "flex",
    flexDirection: "row",
  },
  boxvideo: {
    backgroundColor: "#fff",
    marginRight: 20,
    height: 200,
    width: 300,
    borderRadius: 10,
    overflow: "hidden",
  },
});
