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
              source={{uri: 'https://img.youtube.com/vi/qTNQDWp5uAM/maxresdefault.jpg'}}
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
            navigation.navigate("ComponentVid", { screen: "Chest Workout" })
          }
        >
          <View style={[styles.boxvideo]}>
            <Image
              source={{uri: 'https://img.youtube.com/vi/4JnkcAUq4Ss/maxresdefault.jpg'}}
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
              Chest Workout
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ComponentVid", { screen: "Thighs Workout" })
          }
        >
          <View style={[styles.boxvideo]}>
            <Image
              source={{uri: 'https://img.youtube.com/vi/zLBFQ_mFl2E/maxresdefault.jpg'}}
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
              Thighs Workout
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ComponentVid", { screen: "Arms Workout" })
          }
        >
          <View style={[styles.boxvideo]}>
            <Image
              source={{uri: 'https://img.youtube.com/vi/uNILu4KSHQM/maxresdefault.jpg'}}
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
              Arms Workout
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ComponentVid", { screen: "Abs Workout" })
          }
        >
          <View style={[styles.boxvideo]}>
            <Image
              source={{uri: 'https://img.youtube.com/vi/QKCkO9fy9O4/maxresdefault.jpg'}}
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
              Abs Workout
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
