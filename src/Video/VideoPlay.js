import React, { useState, useCallback, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import axios from "axios";

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
      <View
        style={{
          paddingHorizontal: 20
        }}
      >
        <YoutubePlayer
          height={230}
          width="100%"
          play={true}
          videoId={videos.youtubeId}
          onChangeState={onStateChange}
        />
        <Text style={{color:"white", fontSize:16, fontWeight:"bold"}}>{videos.name}</Text>
      </View>
    </View>
  );
};
export default VideoPlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5A80E8",
    justifyContent:"center"
  },
});
