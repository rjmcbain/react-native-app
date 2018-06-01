// Import libraries for making a component
import React from "react";
import { Text, View } from "react-native";

// Make a component
const Header = props => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#EA4049",
    alignItems: "center",
    height: 70,
    paddingTop: 15,
    shadowColor: "#222",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: "relative"
  },
  textStyle: {
    marginBottom: 10,
    fontSize: 40,
    color: "#eedec4"
  }
};

// Make the component available to toher parts of the app
export default Header;
