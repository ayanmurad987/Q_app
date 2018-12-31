import React from "react";
import { View, Text, Button, TextInput ,Alert,Touchable} from "react-native";

import {ImagePicker,Permissions} from 'expo'
import * as firebase from 'firebase';
import 'firebase/firestore';
import {config , setting} from '../authentication/firebase';

firebase.initializeApp(config);

const db =firebase.firestore();
db.settings(setting);

const ID ='S50Q3PGKONDINTVVUN4CS0TAFFMZ01HFVPPO2UMK25PBY30I'
const secret ='XYCVGLSLSEPRP50EVFU142AWS1XIAHO5I4TNXOYLCKBRK4CT'
const base ='https://api.foursquare.com/v2/venues/search'
const ll ='24.874486899999997,67.1853436'

export default class Companyscreen extends React.Component {

  constructor(){
    super()
    this.state={
      adress:[]
    }
  }

  adresses = (query)=>{
    fetch(`${base}?ll=${ll}&client_id=${ID}&client_secret=${secret}&v=20181225&query=${query}&limit=5`)
    .then(function(res) {
    return res.json();
    })
    .then((res)=> {
            this.setState({adress :res.response.venues})
            console.log(res.response.venues)
         
            
    })
    .catch(()=> {
    // Code for handling errors\\
    console.log('error in fatching=>')
    });
    }
    

  addData =()=>{
    const userData = this.props.navigation.getParam('userData');
    const {conpanyName, year,timing,image} = this.state

    db.collection('user').doc(userData.id).set({
      name:userData.name,
      conpanyName,
      year,
      timing,
      image

    })
  
  }
  async componentDidMount() {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    await Permissions.askAsync(Permissions.CAMERA);
  }



_pickImage = async () => {
  let pickerResult = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    aspect: [4, 3],
  });

  this._handleImagePicked(pickerResult);
};

_handleImagePicked = async pickerResult => {
  try {
    this.setState({ uploading: true });

    if (!pickerResult.cancelled) {
      uploadUrl = await uploadImageAsync(pickerResult.uri);
      console.log('image  ===>>>',uploadUrl)
      this.setState({ image: uploadUrl });
    }
  } catch (e) {
    console.log(e);
    alert('Upload failed, sorry :(');
  } finally {
    this.setState({ uploading: false });
  }
};






  render() {

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Add Company Info </Text>

        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({conpanyName:text})}
        placeholder='company name'
      />

<TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({year:text})}
        placeholder='scince'
      />

      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({timing:text})}
        placeholder='timing'
      />


<TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.adresses(text)}
        placeholder='===adrees-----'
      />



        
      
      <Button
      title='upload image'
      onPress={this._pickImage}

      />
        <Button 
        title="Submit"
        color="#841584"
        onPress={this.addData} />
        




      </View>
    );
  }
}


async function uploadImageAsync(uri) {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(xhr.response);
    };
    xhr.onerror = function(e) {
      console.log(e);
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });
  console.log('this is blob =>>', blob)

  const ref = firebase.storage().ref().child("images/"+Math.random().toString().substring(2,6))
  const snapshot = await ref.put(blob);

const url= snapshot.ref.getDownloadURL();
console.log('this url ==>>', url)
  // blob.close();


  return await snapshot.ref.getDownloadURL();
}

const Suggestions = (props) => {
  const options = props.result.map((r,i) => (
    <Text
    onClick={i=>{console.log('index # =>',)}}
    key={r.id}
    
    >
    {/* {console.log(i)} */}
      {r.name}
    </Text>
  ))
  return <ul>{options}</ul>
}