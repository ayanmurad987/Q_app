import { createStackNavigator, createAppContainer } from "react-navigation";
import * as Screens from '../screens'

const AppNavigator = createStackNavigator({
  Home: Screens.HomeScreen,
  Login:Screens.Login,
  Profile:Screens.Profile,
  Dashboard:Screens.Dashboard,
  Company:Screens.Companyscreen

});

const Navigation =createAppContainer(AppNavigator);
export default Navigation;

// fetch('https://api.foursquare.com/v2/venues/explore?client_id=VBQVJXDZ0SKXOPTECLDAZP023FGA3HOT1DHJNU1HGGB13H0H&client_secret=YRPFJDK5N3X5ASKHV4ZHLW2INJRYZO1WVHYXFGV450SHBF3X&v=20180323&limit=1&ll= 24.874486899999997,67.1853436&query=cafe')
// .then(function(res) {
// return res.json();
// })
// .then(function(res) {
// this.setState=({searchText: res.response.groups[0].items[0].venue.name})
// alert( res.response.groups[0].items[0].venue.name)
// })
// .catch(function() {
// // Code for handling errors\\
// alert('error')
// });