import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function BMIHome() {
  return (
    <View style={[styles.box]}>
      <View style={[styles.isi]}>
        <Text
          style={{
            width: "50%",
            justifyContent: "center",
            color: "black",
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Hitung BMI
        </Text>
        <View style={[styles.bar]}>
         <Ionicons name = "speedometer-outline" style={{fontSize: 48}}></Ionicons>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    box: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
      marginBottom: 20,
      height: 100,
      width: "100%",
      borderRadius: 10,
      overflow: "hidden",
    },
    isi: {
      display: "flex",
      flex: 2,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    },
    bar: {
      width: "50%",
      justifyContent: "center",
      alignItems: "center",
    },
  });
  