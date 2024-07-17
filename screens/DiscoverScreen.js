import React, { useContext } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { categories, sources } from "../API/api";
import { NewsContext } from "../API/Context";

const DiscoverScreen = () => {
  const windowWidth = Dimensions.get("window").width;
  const SLIDE_WIDTH = Math.round(windowWidth / 3.5);

  const { setCategory, setSource } = useContext(NewsContext);

  return (
    <ScrollView>
      <View style={styles.discover}>
        <Text style={{ ...styles.subtitle, color: "white" }}>Categories</Text>
        <Carousel
          layout={"default"}
          data={categories}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() => setCategory(item.notification)}
                style={styles.category}
              >
                <Image
                  source={{ uri: item.pic }}
                  style={styles.categoryImage}
                />
                <Text style={{ ...styles.notification, color: "white" }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
          sliderWidth={windowWidth}
          itemWidth={SLIDE_WIDTH}
          activeSlideAlignment={"start"}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
        />
        <Text style={{ ...styles.subtitle, color: "white" }}>
          Notifications
        </Text>
        {sources.map((s) => (
          <View style={styles.notificationContainer}>
            <Text style={styles.notificationText}>
              {s?.notification?.slice(0, 120)}...
            </Text>
            <Image
              source={{
                uri: s.pic,
              }}
              style={styles.notificationLogo}
            />
          </View>
        ))}
        <Carousel
          layout={"default"}
          data={categories}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() => setCategory(item.notification)}
                style={styles.category}
              >
                <Image
                  source={{ uri: item.pic }}
                  style={styles.categoryImage}
                />
                <Text style={{ ...styles.notification, color: "white" }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
          sliderWidth={windowWidth}
          itemWidth={SLIDE_WIDTH}
          activeSlideAlignment={"start"}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
        />
        <Text style={{ ...styles.subtitle, color: "white" }}>
          Notifications
        </Text>
        {sources.map((s) => (
          <View style={styles.notificationContainer}>
            <Text style={styles.notificationText}>
              {s?.notification?.slice(0, 120)}...
            </Text>
            <Image
              source={{
                uri: s.pic,
              }}
              style={styles.notificationLogo}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  discover: {
    padding: 10,
    alignItems: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 8,
    marginHorizontal: 5,
    alignSelf: "flex-start",
    borderRadius: 10,
  },
  category: {
    height: 130,
    margin: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  categoryImage: {
    height: "60%",
    width: "100%",
    resizeMode: "contain",
  },
  notification: {
    fontSize: 14,
    textTransform: "capitalize",
  },
  sources: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingVertical: 15,
  },
  sourceContainer: {
    height: 150,
    width: "40%",
    borderRadius: 10,
    margin: 15,
    backgroundColor: "#cc313d",
  },
  sourceImage: {
    height: "100%",
    borderRadius: 10,
    resizeMode: "cover",
  },
  notificationContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 40,
    marginTop: 10,
  },
  notificationLogo: {
    width: 60,
    height: 60,
    marginLeft: 10,
  },
  notificationText: {
    fontSize: 14,
    color: "white",
  },
});
