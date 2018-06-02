import React from "react";
import { AppRegistry, View } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

const App = () => (
  <View>
    <Header headerText={"Spinnr."} />
    <AlbumList />
  </View>
);

AppRegistry.registerComponent("albums", () => App);
