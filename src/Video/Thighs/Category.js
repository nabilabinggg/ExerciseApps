import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

export default function ThighsCategory({ navigation }) {
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
    <View style={[styles.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.block]}>
          {videos.filter(videos => videos.categories.cat_id == 3).map(video => (
            <TouchableOpacity key={video._id} onPress={() => navigation.navigate("ComponentVid", { screen: "Pemutar Video", params: { itemId: video._id } })}>
              <View style={{ marginBottom: 30 }}>
              <Image
                  source={{uri : video.youtubeThumbnail}}
                  style={[styles.boxvideo]}
                  resizeMode="contain"
                ></Image>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "#ffff",
                  }}
                >
                  {video.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
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
  block: {
    margin: 30,
    display: "flex",
    flexDirection: "column",
  },
  blockvid: {
    display: "flex",
    flexDirection: "column",
    height: 200
  },
  boxvideo: {
    marginRight: 20,
    marginBottom: 10,
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
  },
});
