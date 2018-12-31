import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

export default class DashboardScreen extends React.Component {

  static navigationOptions = {
    headerTitle: <Text>you</Text>,
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="yellow"
      />
    ),
  };


    

  render() {
    const userData = this.props.navigation.getParam('userData');
    console.log(userData)
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center"
      ,flexDirection:"row"
      }}>


        <Button
        style={{flex:1}}
        title ='User'
        color = 'red'
        onPress={()=>this.props.navigation.navigate('Company',{userData})}

        />
        <Button
        style={{flex:1}}
        title ='company'
        color = 'blue'
        onPress={()=>this.props.navigation.navigate('Company',{userData})}
        />


      </View>
    );
  }
}