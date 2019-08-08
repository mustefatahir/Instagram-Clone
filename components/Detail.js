import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { getMovies } from "../services/fakeMovieService";
import User_Header from './User_Header';
// import console = require("console");

class Detail extends Component {
  static navigationOptions = ({navigation})=>{
    return {title:navigation.getParam("name","Name")}
  };
  state = {
    UserData:[],
    id:"",
    User:{}
  };
  componentDidMount=()=>{
    const {navigation}=this.props;
    const id=navigation.getParam("id","NO-Id");
    const name=navigation.getParam("name","Name");
    
    console.log("ID",id,name);
    

    
    this.setState({
      UserData:getMovies(),
      id:id
      // User:this.state.UserData[id]
    })
    
  }
  // handlePressDropdown = () => {};
  render() {
    console.log("OBJ",this.state.id,this.state.UserData);
    // const {navigation}=this.props;
    // const id=navigation.getParam("id","NO-Id");
    // console.log("ID",id);
    // const data=this.state.UserData;
    // console.log("DATA",this.state.UserData);
    // console.log(data[id]);
    // const user=data[id];
    
    // console.log("User",user);

    const data=this.state.UserData[this.state.id];
    console.log("data User",data)
    return data? (
      
      <View style={styles.container}>
        {/* <Text>App is Running</Text> */}

    

    <View
      style={{
        flex: 5,
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 10,
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 10
      }}
    >
      <View>
        <Image
          style={{ width: 90, height: 90, borderRadius: 100 }}
          source={require("../image/image.png")}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-around",
          marginHorizontal: 10,
          padding: 20
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around"
            
          }}
        >
          <View>
            <Text style={styles.secBarText}>{data.posts}</Text>
          </View>
          <View>
            <Text style={styles.secBarText}>{data.folowers}</Text>
          </View>
          <View>
            <Text style={styles.secBarText}>{data.following}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingLeft: 10,
            marginTop: 50
          }}
        >
          <View>
            <Text style={styles.secBarText}>Posts</Text>
          </View>
          <View>
            <Text style={styles.secBarText}>Followers</Text>
          </View>
          <View>
            <Text style={styles.secBarText}>Following</Text>
          </View>
        </View>
      </View>

      {/* ??? */}
    </View>
    <View
      style={{
        flex: 8,
        flexDirection: "column",
        marginTop: 55,
        marginHorizontal: 10
      }}
    >
      <View
        style={{
          marginTop: 10
        }}
      >
        <Text style={{ fontWeight: "bold" }}>{data.profile_name}</Text>
      </View>
      <View
        style={{
          marginTop: 10
        }}
      >
        <Text style={{ color: "gray" }}>Personal Blog</Text>
      </View>
      <View
        style={{
          marginTop: 10
        }}
      >
        <Text>{data.bios}</Text>
      </View>
      <View
        style={{
          marginTop: 10
        }}
      >
        <Text>Link Account</Text>
      </View>
    </View>
    <View
      style={{
        flex: 4,
        flexDirection: "row",
        marginTop: 120,
        marginBottom: 20,
        marginHorizontal: 20,
        justifyContent: "space-between"
      }}
    >
      <View>
        <Text style={styles.button}>Following</Text>
      </View>
      <View>
        <Text style={styles.button}>Message</Text>
      </View>
      <View>
        <Text style={styles.button}>contact</Text>
      </View>
    </View>

    <View
      style={{
        flex: 1,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "lightgray",
        padding: 18
      }}
    >
      <View>
        <Image
          style={{
            marginTop: -12,
            width: 25,
            height: 25
          }}
          source={require("../image/grid.png")}
        />
      </View>
      <View>
        <Image
          style={{ marginTop: -12, width: 25, height: 25 }}
          source={require("../image/tagss.png")}
        />
      </View>
    </View>
    <ScrollView style={{ height: "40%" }}>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-around"
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <View>
            <Image
              style={{ width: 117, height: 100 }}
              source={require("../image/check.jpeg")}
            />
          </View>
          <View>
            <Image
              style={{ width: 117, height: 100 }}
              source={require("../image/check.jpeg")}
            />
          </View>
          <View>
            <Image
              style={{ width: 117, height: 100 }}
              source={require("../image/check.jpeg")}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 3,
            justifyContent: "space-around"
          }}
        >
          <View>
            <Image
              style={{ width: 117, height: 100 }}
              source={require("../image/check.jpeg")}
            />
          </View>
          <View>
            <Image
              style={{ width: 117, height: 100 }}
              source={require("../image/check.jpeg")}
            />
          </View>
          <View>
            <Image
              style={{ width: 117, height: 100 }}
              source={require("../image/check.jpeg")}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 3,
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <View>
            <Image
              style={{ width: 117, height: 100 }}
              source={require("../image/check.jpeg")}
            />
          </View>
          <View>
            <Image
              style={{ width: 117, height: 100 }}
              source={require("../image/check.jpeg")}
            />
          </View>
          <View>
            <Image
              style={{ width: 117, height: 100 }}
              source={require("../image/check.jpeg")}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 3,
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <View>
            <Image
              style={{ width: 117, height: 100 }}
              source={require("../image/check.jpeg")}
            />
          </View>
          <View>
            <Image
              style={{ width: 117, height: 100 }}
              source={require("../image/check.jpeg")}
            />
          </View>
          <View>
            <Image
              style={{ width: 117, height: 100 }}
              source={require("../image/check.jpeg")}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 3,
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <View>
            <Image
              style={{ width: 117, height: 100 }}
              source={require("../image/check.jpeg")}
            />
          </View>
          <View>
            <Image
              style={{ width: 117, height: 100 }}
              source={require("../image/check.jpeg")}
            />
          </View>
          <View>
            <Image
              style={{ width: 117, height: 100 }}
              source={require("../image/check.jpeg")}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 3,
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <View>
            <Image
              style={{ width: 117, height: 100 }}
              source={require("../image/check.jpeg")}
            />
          </View>
          <View>
            <Image
              style={{ width: 117, height: 100 }}
              source={require("../image/check.jpeg")}
            />
          </View>
          <View>
            <Image
              style={{ width: 117, height: 100 }}
              source={require("../image/check.jpeg")}
            />
          </View>
        </View>
      </View>
    </ScrollView>
    <View
      style={{
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
        <Image
          style={{ width: 25, height: 25 }}
          source={require("../image/home.png")}
        />
      </View>
      <View>
        <Image
          style={{ width: 25, height: 25 }}
          source={require("../image/search.png")}
        />
      </View>
      <View>
        <Image
          style={{ width: 25, height: 25 }}
          source={require("../image/add.png")}
        />
      </View>
      <View>
        <Image
          style={{ width: 25, height: 25 }}
          source={require("../image/heart.png")}
        />
      </View>
      <View>
        <Image
          style={{ width: 25, height: 25 }}
          source={require("../image/tagss.png")}
        />
      </View>
    </View>
    </View>
       
    ):(
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    backgroundColor: "#fafafa",
    flex: 1
  },
  firstbar: {
    backgroundColor: "#fafafa",
    marginHorizontal: 10
  },
  secBarText: {
    textAlign: "center",
    fontWeight: "bold",
    margin:5
  },
  button: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "lightgray",
    paddingHorizontal: 25,
    paddingVertical: 3,
    borderRadius: 3
  }
});

export default Detail;