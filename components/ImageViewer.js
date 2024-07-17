import {
  Text,
  View,
  Modal,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const ImageViewer = ({ visible, imageUri, onClose }) => {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
          <Image source={{ uri: imageUri }} style={styles.image} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 5,
    left: 5,
    padding: 10,
  },
  closeButtonText: {
    fontSize: 30,
    color: "white",
  },
  image: {
    width: "100%",
    height: "80%",
    resizeMode: "contain",
  },
});

export default ImageViewer;
