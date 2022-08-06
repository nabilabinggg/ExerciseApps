import * as React from "react";
import { Text, View, Image, TouchableOpacity, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import IMT from "../../assets/imt.png";

const ModalInfo = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 300,
            height: 540,
            backgroundColor: "white",
            paddingHorizontal: 25,
            paddingVertical: 5,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View>
            <View style={{ left: 245 }}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <Ionicons name="close" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={{ justifyContent: "center" }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, marginBottom: 5 }}
              >
                Indeks Massa Tubuh
              </Text>
              <Text style={{ fontSize: 12, marginBottom: 5 }}>
                Indeks Massa Tubuh (IMT) adalah salah satu cara untuk mengetahui
                rentang berat badan ideal Anda dan memprediksi seberapa besar
                risiko gangguan kesehatan Anda.
              </Text>
              <Text style={{ fontSize: 12 }}>Cara menggunakan kalkulator:</Text>
              <Text style={{ fontSize: 12 }}>
                1. Masukkan Tinggi Badan Anda
              </Text>
              <Text style={{ fontSize: 12 }}>2. Masukkan Berat Badan Anda</Text>
              <Text style={{ fontSize: 12 }}>3. Tekan Tombol Hitung</Text>
              <Image
                source={IMT}
                style={{
                  marginVertical: 10,
                  height: 250,
                  width: 250,
                }}
                resizeMode="cover"
              />
              <Text style={{ fontSize: 10 }}>
                Sumber :
                http://p2ptm.kemkes.go.id/infographic-p2ptm/obesitas/klasifikasi-obesitas-setelah-pengukuran-imt
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const TextInputWithModal = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <View style={{ left: 300 }}>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Ionicons name="information-circle" size={24} color="white" />
      </TouchableOpacity>
      <ModalInfo
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

export default function PopUp() {
  return (
    <View>
      <TextInputWithModal />
    </View>
  );
}
