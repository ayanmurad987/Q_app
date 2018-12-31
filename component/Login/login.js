import React from 'react';
import { StyleSheet, Text, View,Button,Alert } from 'react-native';
import {Facebook} from 'expo';


export default class LoginScreen extends React.Component {

   logIn = async ()=>{
    try {
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync("320230382154719"
        , {
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`)
        const data = await response.json();
        Alert.alert('Logged in!', `Hi ${data.name}!`);
        console.log(data)

      }
      else if(type === 'success'){
        let response = await fetch(`https://graph.facebook.com/me?access_token=${token}`)
        


      }
      else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }
  render() {
    return (
      <View style={styles.container}>
       <Text>Ayan</Text>
       <Button
  onPress={this.logIn}
  title="Login with facebook"
  color="#841584"
/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
