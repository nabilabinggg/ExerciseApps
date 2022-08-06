import React from "react";
import {
  View,
  ScrollView,
  StyleSheet
} from "react-native";
import UpperPage from "../Video/Upper/Index";
import LowerPage from "./Lower/Index";
import DancePage from "./Dance/Index";

export default function CatalogVideo() {
  return (
    <View style={[styles.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.block]}>
          <DancePage/>
          <UpperPage/>
          <LowerPage/>
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
  },
  boxvideo: {
    backgroundColor: "#fff",
    marginRight: 20,
    height: 100,
    width: 150,
    borderRadius: 10,
    overflow: "hidden",
  },
});
