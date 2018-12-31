import React from "react";
import { View, Text, Button } from "react-native";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button 
        title="Login"
        color="#841584"
        onPress={() => this.props.navigation.navigate("Company")} />
      </View>
    );
  }
}