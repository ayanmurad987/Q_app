import React from "react";
import { View, Text , Button } from "react-native";

export default class ProfileScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('name', 'NO-ID');
    console.log(itemId)
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>ProfileScreen</Text>
        <Button 
        title="Dashboard"
        color="#841584"
        onPress={() => this.props.navigation.navigate("Dashboard")} />
      </View>
    );
  }
}