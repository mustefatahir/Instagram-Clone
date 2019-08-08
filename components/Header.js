
import React, { Component } from "react";
import { Switch} from 'react-native'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  FlatList,
  Alert
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { getMovies, Like } from "../services/fakeMovieService";
class Header extends Component {
    state = {  }
    render() { 
        return ( 
            
 <View
 style={{
   flexDirection: "row",
   padding: 5,
   flex: 1,
   paddingTop:15,
   borderTopWidth: 1,
   borderColor: "lightgray",
   justifyContent: "space-between",
   borderBottomColor: "lightgray"
 }}
>
 <View style={{ flexDirection: "row" }}>
   <TouchableOpacity onPress={this.handlePressCamera}>
     <Image
       style={{ width: 30, height: 30 }}
       source={require("../image/camera.png")}
     />
   </TouchableOpacity>
   <Image
     style={{ marginHorizontal: 10, width: 90, height: 30 }}
     source={require("../image/insta.png")}
   />
 </View>
 <View style={{ flexDirection: "row" }}>
   <TouchableOpacity onPress={this.handlePresslive}>
     <Image
       style={{ width: 26, height: 26, marginHorizontal: 10 }}
       source={require("../image/tv.png")}
     />
   </TouchableOpacity>
   <TouchableOpacity onPress={this.handlePressMessage}>
     <Image
       style={{ width: 26, height: 26 }}
       source={require("../image/Message.png")}
     />
   </TouchableOpacity>
 </View>
</View>

         );
    }
}
 
export default Header;















