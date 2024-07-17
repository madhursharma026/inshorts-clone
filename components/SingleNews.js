import {
  Text,
  View,
  Image,
  Linking,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import ImageViewer from "./ImageViewer";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SingleNews = ({ item }) => {
  const navigation = useNavigation(); // Access navigation here
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImageUri, setSelectedImageUri] = useState("");

  const handleImagePress = (imageURI) => {
    setSelectedImageUri(imageURI);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ImageBackground blurRadius={40} source={{ uri: item.urlToImage }}>
        <TouchableOpacity onPress={() => handleImagePress(item.urlToImage)}>
          <Image source={{ uri: item.urlToImage }} style={styles.image} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.description}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content}>{item.description}</Text>
        <Text>
          Short by <Text style={styles.author}>{item.author ?? "unknown"}</Text>
        </Text>
      </View>
      <ImageViewer
        visible={isModalVisible}
        imageUri={selectedImageUri}
        onClose={handleCloseModal}
      />
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("LinkViewer", { LinkURL: item.url })
          }
        >
          <Text style={styles.readMoreContent}>
            {item?.content?.slice(0, 80)}...
          </Text>
          <Text style={styles.readMoreText}>Read More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SingleNews;

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
    transform: [{ scaleY: -1 }],
  },
  image: {
    marginTop: 80,
    width: windowWidth,
    resizeMode: "contain",
    height: windowHeight - 400,
  },
  description: {
    flex: 1,
    padding: 15,
    backgroundColor: "white",
  },
  title: {
    fontSize: 18,
    paddingBottom: 10,
  },
  footer: {
    bottom: 0,
    height: 80,
    padding: 15,
    width: windowWidth,
    position: "absolute",
    justifyContent: "center",
    backgroundColor: "#4d4a4a",
  },
  content: {
    fontSize: 15,
    paddingBottom: 10,
    fontWeight: "300",
  },
  author: {
    fontWeight: "bold",
  },
  readMoreContent: {
    fontSize: 15,
    color: "white",
  },
  readMoreText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
});
