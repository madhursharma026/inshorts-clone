import { useContext, useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import DiscoverScreen from "../screens/DiscoverScreen";
import NewsScreen from "../screens/NewsScreen";
import TopNavigation from "./TopNavigation";
import { NewsContext } from "../API/Context";

export default function InshortsTabs({ navigation }) {
  const layout = useWindowDimensions();
  const { index, setIndex } = useContext(NewsContext);
  const [routes] = useState([
    { key: "first", title: "Discover" },
    { key: "second", title: "News" },
  ]);
  const renderScene = SceneMap({
    first: DiscoverScreen,
    second: NewsScreen,
  });
  return (
    <View style={{ ...styles.container, backgroundColor: "#282C35" }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
