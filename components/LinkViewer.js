import React from "react";
import { WebView } from "react-native-webview";
import { View, StyleSheet, ActivityIndicator, StatusBar } from "react-native";

const LinkViewer = ({ route }) => {
  const { LinkURL } = route.params;
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: LinkURL,
        }}
        startInLoadingState={true}
        renderLoading={() => <ActivityIndicator size="large" color="#0000ff" />}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.error("WebView error: ", nativeEvent);
        }}
        onHttpError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.error("HTTP error: ", nativeEvent);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight + 10 || 0,
  },
});

export default LinkViewer;
