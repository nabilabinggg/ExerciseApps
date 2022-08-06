import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";

const DancePage = () => {
  const navigation = useNavigation();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios
      .get(`https://salty-everglades-72802.herokuapp.com/api/videos`)
      .then((response) => {
        const videos = response.data;
        setVideos(videos);
      });
  }, []);

  return (
    <View style={{ marginBottom: 20 }}>
      <View
        style={{
          marginBottom: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 17, fontWeight: "bold", color: "#fff" }}>
          Dance Workout
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ComponentVid", {
              screen: "Dance Workout",
              params: { itemId: videos._id },
            })
          }
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

      <View style={[styles.blockvid]}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {videos
            .filter((videos) => videos.categories.cat_id == 1)
            .map((video) => (
              <TouchableOpacity
                key={video._id}
                onPress={() =>
                  navigation.navigate("ComponentVid", {
                    screen: "Pemutar Video",
                    params: { itemId: video._id },
                  })
                }
              >
                <View style={[styles.boxvideo]} key={video._id}>
                  <Image
                    source={{ uri: video.youtubeThumbnail }}
                    style={{
                      height: 80,
                      width: 160,
                    }}
                    resizeMode="cover"
                  ></Image>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontSize: 12,
                      position: "absolute",
                      bottom: 5,
                      left: 10,
                      right: 10,
                      fontWeight: "bold",
                      color: "#000",
                    }}
                  >
                    {video.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </View>
  );
};
export default DancePage;

const styles = StyleSheet.create({
  block: {
    marginHorizontal: 30,
    display: "flex",
    flexDirection: "column",
  },
  blockvid: {
    display: "flex",
    flexDirection: "column",
  },
  boxvideo: {
    backgroundColor: "#fff",
    marginRight: 20,
    height: 120,
    width: 160,
    borderRadius: 10,
    overflow: "hidden",
  },
});
