import React, { Component} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";
import PopUp from "./Popup";

class BMI extends Component {
  state = {
    height: "",
    weight: "",
    bmi: "",
    BmiResult: "",
    visible: false,
  };
  handleHeight = (text) => {
    this.setState({ height: text });
  };
  handleWeight = (text) => {
    this.setState({ weight: text });
  };
  calculate = (height, weight) => {
    //calculation
    var result =
      (parseFloat(weight) * 10000) / (parseFloat(height) * parseFloat(height));
    result = result.toFixed(2);
    //display result
    this.setState({ bmi: result });
    if (result < 18.5) {
      this.setState({ BmiResult: "Kekurangan Berat Badan" });
    } else if (result >= 18.5 && result < 25) {
      this.setState({ BmiResult: "Normal (Ideal)" });
    } else if (result >= 25 && result < 30) {
      this.setState({ BmiResult: "Kelebihan Berat Badan" });
    } else if (result >= 30) {
      this.setState({ BmiResult: "Kegemukan (Obesitas)" });
    } else {
      alert("Masukkan Tinggi dan Berat Badan Anda!");
      this.setState({ BmiResult: "" });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.block}>
          <View>
          <PopUp/>
          <View
            style={{
              height: 100,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontSize: 35,
                fontWeight: "bold",
              }}
            >
              Kalkulator IMT
            </Text>
          </View>
          </View>

          <Text style={styles.label}>Tinggi Badan</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Tinggi Badan (Cm)"
            autoCapitalize="none"
            onChangeText={this.handleHeight}
          />
          <Text style={styles.label}>Berat Badan</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Berat Badan (Kg)"
            autoCapitalize="none"
            onChangeText={this.handleWeight}
          />

          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => this.calculate(this.state.height, this.state.weight)}
          >
            <Text style={styles.submitButtonText}> Hitung </Text>
          </TouchableOpacity>
          <Text style={styles.output}>{this.state.bmi}</Text>
          <Text style={styles.resultText}>{this.state.BmiResult}</Text>
        </View>
      </View>
    );
  }
}
export default BMI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5A80E8",
    paddingVertical: 30,
  },
  input: {
    margin: 15,
    height: 40,
    padding: 10,
    backgroundColor: "#FFFF",
    borderRadius: 10,
  },
  submitButton: {
    backgroundColor: "tomato",
    padding: 10,
    margin: 15,
    height: 45,
    borderRadius: 30,
  },
  submitButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },
  output: {
    marginTop: 15,
    textAlign: "center",
    fontSize: 20,
    color: "#FFFF",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFF",
  },
  resultText: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 20,
    color: "#FFFF",
  },
  label: {
    marginLeft: 15,
    color: "#FFFF",
  },
  block: {
    marginHorizontal: 30,
  },
});
