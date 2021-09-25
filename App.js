import * as React from "react";
import { View, Text } from "react-native";
import Home from "./screens/Home";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Home />
    </View>
  );
}
