import React, { Component } from 'react'
import { Text, View } from "react-native";

import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './components/HomeScreen';
import Detail from './components/Detail';
import User_Header from './components/User_Header';
const temp=createStackNavigator({
  Home:HomeScreen,
  Detail:Detail,
  Header:User_Header

}
,{
initialRouteName:"Home"
}
)

const AppContainer=createAppContainer(temp)
export default class App extends Component {
  render() {
    return (
   <AppContainer/>
  
      )
  }
}
