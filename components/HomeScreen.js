import React, { Component } from "react";
import { Switch } from 'react-native'
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
import Header from './Header';
// import console = require("console");
class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: <Header />
  };
  state = {
    UserData: [],
    flag: -1
  };

  componentDidMount() {
    this.setState({ UserData: getMovies() });
  }
  handlePressUserProfile = (id) => {
    this.props.navigation.navigate('Detail', { id: id, name: this.state.UserData[id].username });
  }
  handlePressCamera = () => {
    Alert.alert("Camera", "You Press on Camera");
  };
  handlePressAdd = () => {
    Alert.alert("Add", "You Press on Add");
  };
  handlePressComment = () => {
    Alert.alert("Comment", "You Press on comment");
  };
  handlePressHome = () => {
    Alert.alert("Home", "You Press on Home");
  };
  handlePressMessage = () => {
    Alert.alert("Message", "You Press on Message");
  };
  handlePressPostLike = (id) => {
    this.state.flag == -1 ?

      this.setState({
        flag: 1
      })
      :
      this.setState({
        flag: -1
      });
    console.log("Flag Status", this.state.flag);
    Like(id, this.state.flag);
  };
  handlePressProfile = () => {
    Alert.alert("Profile", "You Press on Profile");
  };
  handlePressSearch = () => {
    Alert.alert("Search", "You Press on Search Feed");
  };
  handlePressShare = () => {
    Alert.alert("Share", "You Press on Share");
  };
  handlePressTag = () => {
    Alert.alert("Tag", "You Press on Tag");
  };
  handlePresslive = () => {
    Alert.alert("Live", "You Press on Live");
  };
  render() {
    console.log("user", this.state.UserData);
    return (
      <View style={styles.container}>

        <FlatList
          style={{ flex: 0.9 }}
          data={this.state.UserData}
          keyExtractor={(user, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    padding: 5,
                    paddingHorizontal: 15,
                    borderWidth: 1,
                    borderColor: "lightgray",
                    justifyContent: "space-between",
                    borderBottomColor: "lightgray"
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    <View>
                      <TouchableOpacity onPress={this.handlePressMessage}>
                        <Image
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: 100
                          }}
                          source={require("../image/image.png")}
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={{ padding: 8 }}>
                      <TouchableOpacity onPress={() => this.handlePressUserProfile(index)}>
                        <Text style={{ fontSize: 15 }}>{item.username}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View>
                    <TouchableOpacity onPress={this.handlePressDots}>
                      <Image
                        style={{ marginTop: 5, width: 7, height: 20 }}
                        source={require("../image/dots.png")}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={{}}>
                  <Image
                    style={{ height: 250, width: "100%" }}
                    resizeMode="cover"
                    source={require("../image/check.jpeg")}
                  />
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    padding: 5,
                    paddingHorizontal: 15,
                    borderWidth: 1,
                    borderColor: "lightgray",
                    justifyContent: "space-between",
                    borderBottomColor: "lightgray"
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center"
                    }}
                  >
                    <View style={{ marginHorizontal: 10 }}>
                      <TouchableOpacity onPress={() => this.handlePressPostLike(item._id)}>
                        {item.liked == false ? <Image
                          style={{ width: 30, height: 30 }}
                          source={require("../image/heart.png")}
                        /> : <Image
                            style={{ width: 30, height: 30 }}
                            source={require("../image/heart_red.png")}
                          />


                        }

                      </TouchableOpacity>
                    </View>
                    <View>
                      <TouchableOpacity onPress={this.handlePressComment}>
                        <Image
                          style={{ width: 26, height: 26 }}
                          source={require("../image/comment.png")}
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                      <TouchableOpacity onPress={this.handlePressShare}>
                        <Image
                          style={{ width: 26, height: 26 }}
                          source={require("../image/Message.png")}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View>
                    <TouchableOpacity onPress={this.handlePressTag}>
                      <Image
                        style={{ width: 22, height: 25 }}
                        source={require("../image/tagfeed.png")}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    padding: 5,
                    paddingHorizontal: 15,
                    borderBottomColor: "lightgray"
                  }}
                >
                  <View>
                    <Text style={{ fontWeight: "bold" }}>
                      {item.likes} likes
                    </Text>
                  </View>
                  <View>
                    <Text>
                      <Text style={{ fontWeight: "bold" }}>
                        {item.comments.name}
                      </Text>
                      {item.comments.comment}
                    </Text>
                  </View>
                </View>
                <View style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  paddingHorizontal: 15
                }}>
                  <View>
                    <Image
                      style={{ width: 25, height: 25, borderRadius: 100 }}
                      source={require("../image/image.png")}
                    />
                  </View>
                  <View>
                    <TextInput
                      style={{
                        fontSize: 15,
                        marginTop: 2,
                        marginHorizontal: 15
                      }}
                      // onChangeText={phone => this.setState({ phone })}
                      // onChangeText={value => this.setState({ value })}
                      // value={this.state.phone}
                      placeholder="Add comment here....."
                    />
                  </View>

                </View>
              </View>
            );
          }}
        />

        <View
          style={{
            flex: 0.05,
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "#fff",
            borderWidth: 1,
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "space-around",
            borderColor: "lightgray",
            padding: 6
          }}
        >
          <View>
            <TouchableOpacity onPress={this.handlePressHome}>
              <Image
                style={{ width: 25, height: 25 }}
                source={require("../image/home.png")}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={this.handlePressSearch}>
              <Image
                style={{ width: 25, height: 25 }}
                source={require("../image/search.png")}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={this.handlePressAdd}>
              <Image
                style={{ width: 25, height: 25 }}
                source={require("../image/add.png")}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={this.handlePressPostLike}>
              <Image
                style={{ width: 25, height: 25 }}
                source={require("../image/heart.png")}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={this.handlePressProfile}>
              <Image
                style={{ width: 25, height: 25 }}
                source={require("../image/tagss.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      // <View style={styles.container}>
      //   {/* <Text>App is Running</Text> */}
      //   <View
      //     style={{
      //       flex: 1,
      //       flexDirection: "row",
      //       justifyContent: "space-between",
      //       backgroundColor: "#fafafa",
      //       height: 60
      //     }}
      //   >
      //     <View style={styles.firstbar}>
      //       <Text
      //         style={{
      //           fontSize: 20
      //         }}
      //         onPress={this.handlePressDropdown}
      //       >
      //         MustefaTahir
      //         <Image
      //           style={{
      //             width: 10,
      //             height: 10,
      //             borderRadius: 100
      //           }}
      //           source={require("./image/dropdown.png")}
      //         />
      //       </Text>
      //     </View>
      //     <View style={styles.firstbar}>
      //       <Image
      //         style={{
      //           width: 25,
      //           height: 25,
      //           borderRadius: 100
      //         }}
      //         source={require("./image/menu.png")}
      //       />
      //     </View>
      //   </View>
      //   <View
      //     style={{
      //       flex: 4,
      //       padding: 15,
      //       marginTop: 30,
      //       flexDirection: "row",
      //       justifyContent: "center",
      //       alignItems: "center",
      //       backgroundColor: "#fff",
      //       borderWidth: 1,
      //       borderColor: "lightgray"
      //     }}
      //   >
      //     <Text style={{ fontSize: 17, color: "gray" }}>
      //       <Text style={{ fontSize: 20, color: "black" }}>170</Text> profile
      //       visit in this days
      //     </Text>
      //   </View>

      //   <View
      //     style={{
      //       flex: 5,
      //       flexDirection: "row",
      //       justifyContent: "space-around",
      //       paddingVertical: 10,
      //       padding: 10,
      //       marginVertical: 10,
      //       marginHorizontal: 10
      //     }}
      //   >
      //     <View>
      //       <Image
      //         style={{ width: 80, height: 80, borderRadius: 100 }}
      //         source={require("./image/image.png")}
      //       />
      //     </View>
      //     <View
      //       style={{
      //         flex: 1,
      //         flexDirection: "column",
      //         justifyContent: "space-around",
      //         marginHorizontal: 10,
      //         padding: 20
      //       }}
      //     >
      //       <View
      //         style={{
      //           flexDirection: "row",
      //           justifyContent: "space-around"
      //         }}
      //       >
      //         <View>
      //           <Text style={styles.secBarText}>678</Text>
      //         </View>
      //         <View>
      //           <Text style={styles.secBarText}>5962</Text>
      //         </View>
      //         <View>
      //           <Text style={styles.secBarText}>1230</Text>
      //         </View>
      //       </View>
      //       <View
      //         style={{
      //           flexDirection: "row",
      //           justifyContent: "space-around",
      //           paddingLeft: 10,
      //           marginTop: 50
      //         }}
      //       >
      //         <View>
      //           <Text style={styles.secBarText}>Posts</Text>
      //         </View>
      //         <View>
      //           <Text style={styles.secBarText}>Followers</Text>
      //         </View>
      //         <View>
      //           <Text style={styles.secBarText}>Following</Text>
      //         </View>
      //       </View>
      //     </View>

      //     {/* ??? */}
      //   </View>
      //   <View
      //     style={{
      //       flex: 8,
      //       flexDirection: "column",
      //       marginTop: 55,
      //       marginHorizontal: 10
      //     }}
      //   >
      //     <View
      //       style={{
      //         marginTop: 10
      //       }}
      //     >
      //       <Text style={{ fontWeight: "bold" }}>Salman Hafeez</Text>
      //     </View>
      //     <View
      //       style={{
      //         marginTop: 10
      //       }}
      //     >
      //       <Text style={{ color: "gray" }}>Personal Blog</Text>
      //     </View>
      //     <View
      //       style={{
      //         marginTop: 10
      //       }}
      //     >
      //       <Text>Bios</Text>
      //     </View>
      //     <View
      //       style={{
      //         marginTop: 10
      //       }}
      //     >
      //       <Text>Link Account</Text>
      //     </View>
      //   </View>
      //   <View
      //     style={{
      //       flex: 4,
      //       flexDirection: "row",
      //       marginTop: 120,
      //       marginBottom: 20,
      //       marginHorizontal: 20,
      //       justifyContent: "space-between"
      //     }}
      //   >
      //     <View>
      //       <Text style={styles.button}>Edit Profile</Text>
      //     </View>
      //     <View>
      //       <Text style={styles.button}>Promotions</Text>
      //     </View>
      //     <View>
      //       <Text style={styles.button}>Email</Text>
      //     </View>
      //   </View>

      //   <View
      //     style={{
      //       flex: 1,
      //       marginTop: 20,
      //       flexDirection: "row",
      //       justifyContent: "space-around",
      //       backgroundColor: "#fff",
      //       borderWidth: 1,
      //       borderColor: "lightgray",
      //       padding: 18
      //     }}
      //   >
      //     <View>
      //       <Image
      //         style={{
      //           marginTop: -12,
      //           width: 25,
      //           height: 25
      //         }}
      //         source={require("./image/grid.png")}
      //       />
      //     </View>
      //     <View>
      //       <Image
      //         style={{ marginTop: -12, width: 25, height: 25 }}
      //         source={require("./image/tagss.png")}
      //       />
      //     </View>
      //   </View>
      //   <ScrollView style={{ height: "40%" }}>
      //     <View
      //       style={{
      //         flexDirection: "column",
      //         justifyContent: "space-around"
      //       }}
      //     >
      //       <View
      //         style={{
      //           flexDirection: "row",
      //           justifyContent: "space-around"
      //         }}
      //       >
      //         <View>
      //           <Image
      //             style={{ width: 117, height: 100 }}
      //             source={require("./image/check.jpeg")}
      //           />
      //         </View>
      //         <View>
      //           <Image
      //             style={{ width: 117, height: 100 }}
      //             source={require("./image/check.jpeg")}
      //           />
      //         </View>
      //         <View>
      //           <Image
      //             style={{ width: 117, height: 100 }}
      //             source={require("./image/check.jpeg")}
      //           />
      //         </View>
      //       </View>
      //       <View
      //         style={{
      //           flexDirection: "row",
      //           marginTop: 3,
      //           justifyContent: "space-around"
      //         }}
      //       >
      //         <View>
      //           <Image
      //             style={{ width: 117, height: 100 }}
      //             source={require("./image/check.jpeg")}
      //           />
      //         </View>
      //         <View>
      //           <Image
      //             style={{ width: 117, height: 100 }}
      //             source={require("./image/check.jpeg")}
      //           />
      //         </View>
      //         <View>
      //           <Image
      //             style={{ width: 117, height: 100 }}
      //             source={require("./image/check.jpeg")}
      //           />
      //         </View>
      //       </View>
      //       <View
      //         style={{
      //           marginTop: 3,
      //           flexDirection: "row",
      //           justifyContent: "space-around"
      //         }}
      //       >
      //         <View>
      //           <Image
      //             style={{ width: 117, height: 100 }}
      //             source={require("./image/check.jpeg")}
      //           />
      //         </View>
      //         <View>
      //           <Image
      //             style={{ width: 117, height: 100 }}
      //             source={require("./image/check.jpeg")}
      //           />
      //         </View>
      //         <View>
      //           <Image
      //             style={{ width: 117, height: 100 }}
      //             source={require("./image/check.jpeg")}
      //           />
      //         </View>
      //       </View>
      //       <View
      //         style={{
      //           marginTop: 3,
      //           flexDirection: "row",
      //           justifyContent: "space-around"
      //         }}
      //       >
      //         <View>
      //           <Image
      //             style={{ width: 117, height: 100 }}
      //             source={require("./image/check.jpeg")}
      //           />
      //         </View>
      //         <View>
      //           <Image
      //             style={{ width: 117, height: 100 }}
      //             source={require("./image/check.jpeg")}
      //           />
      //         </View>
      //         <View>
      //           <Image
      //             style={{ width: 117, height: 100 }}
      //             source={require("./image/check.jpeg")}
      //           />
      //         </View>
      //       </View>
      //       <View
      //         style={{
      //           marginTop: 3,
      //           flexDirection: "row",
      //           justifyContent: "space-around"
      //         }}
      //       >
      //         <View>
      //           <Image
      //             style={{ width: 117, height: 100 }}
      //             source={require("./image/check.jpeg")}
      //           />
      //         </View>
      //         <View>
      //           <Image
      //             style={{ width: 117, height: 100 }}
      //             source={require("./image/check.jpeg")}
      //           />
      //         </View>
      //         <View>
      //           <Image
      //             style={{ width: 117, height: 100 }}
      //             source={require("./image/check.jpeg")}
      //           />
      //         </View>
      //       </View>
      //       <View
      //         style={{
      //           marginTop: 3,
      //           flexDirection: "row",
      //           justifyContent: "space-around"
      //         }}
      //       >
      //         <View>
      //           <Image
      //             style={{ width: 117, height: 100 }}
      //             source={require("./image/check.jpeg")}
      //           />
      //         </View>
      //         <View>
      //           <Image
      //             style={{ width: 117, height: 100 }}
      //             source={require("./image/check.jpeg")}
      //           />
      //         </View>
      //         <View>
      //           <Image
      //             style={{ width: 117, height: 100 }}
      //             source={require("./image/check.jpeg")}
      //           />
      //         </View>
      //       </View>
      //     </View>
      //   </ScrollView>
      //   <View
      //     style={{
      //       flexDirection: "row",
      //       justifyContent: "center",
      //       backgroundColor: "#fff",
      //       borderWidth: 1,
      //       position: "absolute",
      //       left: 0,
      //       right: 0,
      //       bottom: 0,
      //       justifyContent: "space-around",
      //       borderColor: "lightgray",
      //       padding: 6
      //     }}
      //   >
      //     <View>
      //       <Image
      //         style={{ width: 25, height: 25 }}
      //         source={require("./image/home.png")}
      //       />
      //     </View>
      //     <View>
      //       <Image
      //         style={{ width: 25, height: 25 }}
      //         source={require("./image/search.png")}
      //       />
      //     </View>
      //     <View>
      //       <Image
      //         style={{ width: 25, height: 25 }}
      //         source={require("./image/add.png")}
      //       />
      //     </View>
      //     <View>
      //       <Image
      //         style={{ width: 25, height: 25 }}
      //         source={require("./image/heart.png")}
      //       />
      //     </View>
      //     <View>
      //       <Image
      //         style={{ width: 25, height: 25 }}
      //         source={require("./image/tagss.png")}
      //       />
      //     </View>
      //   </View>
      // </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    flexDirection: "column",
    backgroundColor: "#fafafa"
  },
  firstbar: {
    backgroundColor: "#fafafa",
    marginHorizontal: 10
  },
  secBarText: {
    textAlign: "center",
    fontWeight: "bold"
  },
  button: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "lightgray",
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 3
  }
});

export default HomeScreen;
