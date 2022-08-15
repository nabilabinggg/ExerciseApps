import React, { useState, useCallback, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import axios from "axios";
import { JumpingTransition } from "react-native-reanimated";

const VideoPlay = ({ route }) => {
  const { itemId } = route.params;
  const [playing, setPlaying] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://salty-everglades-72802.herokuapp.com/api/videos/${itemId}`)
      .then((res) => {
        setVideos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  return (
    <View style={[styles.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 40
        }}
      >
        <YoutubePlayer
          height={230}
          width="100%"
          play={true}
          videoId={videos.youtubeId}
          onChangeState={onStateChange}
        />
        <Text style={{color:"white", fontSize: 18, fontWeight:"bold"}}>{videos.name}</Text>
        <View style={{borderBottomColor: "white", borderBottomWidth: 1, marginVertical: 10, opacity:0.5}}></View>
        <Text style={{color:"white", fontSize: 13, letterSpacing: 1}}>{videos.step}</Text>
      </View>
      </ScrollView>
    </View>
  );
};
export default VideoPlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5A80E8"
  },
});
