import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Navigation from './navigation/appNavigator'

import * as firebase from 'firebase'
import {config,setting} from './authentication/firebase'



 export default class HomeScreen extends React.Component {
   constructor(){
     super()
     this.state={

     }

     if(!firebase.apps.length){firebase.initializeApp(config);
      const db =firebase.firestore();
      db.settings(setting);
    }
   }
  render() {
    return (
      <View style={{ flex: 1}}>
        <Navigation/>
        
      </View>
    );
  }
}


