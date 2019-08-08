
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
// import console = require("console");
class User_Header extends Component {
    state = {  }
    render() { 
        console.log("navigation",this.props.navigation)
        return ( 



<View style={styles.container}>

<View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fafafa",
        height: 60
      }}
    >
      <View style={styles.firstbar}>
        <Text
          style={{
            fontSize: 20
          }}
          onPress={this.handlePressDropdown}
        >
{data.username}         <Image
            style={{
              width: 10,
              height: 10,
              borderRadius: 100
            }}
            source={require("../image/dropdown.png")}
          />
        </Text>
      </View>
      <View style={styles.firstbar}>
        <Image
          style={{
            width: 25,
            height: 25,
            borderRadius: 100
          }}
          source={require("../image/menu.png")}
        />
      </View>
    </View>
    </View>
         );
    }
}
const styles = StyleSheet.create({
    container: {
      marginTop: 5,
      backgroundColor: "#fafafa",
      flex: 1
    }
});
export default User_Header;















