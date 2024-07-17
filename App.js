import React from "react";
import Context from "./API/Context";
import LinkViewer from "./components/LinkViewer";
import InshortsTabs from "./components/InshortsTabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={InshortsTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LinkViewer"
          component={LinkViewer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
};
