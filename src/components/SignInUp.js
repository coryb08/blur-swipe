import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  TouchableOpacity
} from "react-native";
import fb from "../../assets/Good-Stuff-No-Nonsense-Social-Icons/PNG/128x128px/facebook.png";
import email from "../../assets/Good-Stuff-No-Nonsense-Social-Icons/PNG/128x128px/envelope.png";

import { connect } from "react-redux";
import * as actions from "../store/actions";
import { Font, AppLoading } from "expo";
import { Actions } from "react-native-router-flux";

class SignInUp extends React.Component {
  fbLogin = async () => {
    try {
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions
      } = await Expo.Facebook.logInWithReadPermissionsAsync("603740950082469", {
        permissions: ["public_profile"]
      });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );
        console.log("response", response);
        Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
      } else {
        console.log("hello");
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };
  render() {
    return [
      <Text
        key={Math.floor(Math.random() * 100).toString()}
        style={styles.header}
      >
        Have an account?
      </Text>,
      <View
        key={Math.floor(Math.random() * 100).toString()}
        style={styles.signInContainer}
      >
        <TextInput
          key={Math.floor(Math.random() * 100).toString()}
          selectionColor="#dddcd5"
          placeholder="username"
          style={styles.usernamePassword}
        />
        <TextInput
          key={Math.floor(Math.random() * 100).toString()}
          selectionColor="#dddcd5"
          placeholder="password"
          secureTextEntry={true}
          style={styles.usernamePassword}
        />
        <TouchableOpacity
          key={Math.floor(Math.random() * 100).toString()}
          onPress={Actions.UserFeed}
          style={styles.signinButton}
        >
          <Text
            key={Math.floor(Math.random() * 100).toString()}
            style={styles.signinText}
          >
            Sign In
          </Text>
        </TouchableOpacity>
      </View>,
      <View
        key={Math.floor(Math.random() * 100).toString()}
        key={Math.random()}
        style={styles.signUpContainer}
      >
        <TouchableOpacity
          key={Math.floor(Math.random() * 100).toString()}
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
          onPress={this.fbLogin}
        >
          <Image
            key={Math.floor(Math.random() * 100).toString()}
            style={styles.signupImg}
            source={fb}
          />
          <Text
            key={Math.floor(Math.random() * 100).toString()}
            style={[styles.signupText]}
          >
            sign up with facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          key={Math.floor(Math.random() * 100).toString()}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 30
          }}
          onPress={() => Actions.EmailSignUp()}
        >
          <Image
            key={Math.floor(Math.random() * 100).toString()}
            style={styles.signupImg}
            source={email}
          />
          <Text
            key={Math.floor(Math.random() * 100).toString()}
            style={[styles.signupText, { marginLeft: 10 }]}
          >
            sign up with email
          </Text>
        </TouchableOpacity>
      </View>
    ];
  }
}

const mapStateToProps = state => ({
  state
});

export default connect(
  mapStateToProps,
  actions
)(SignInUp);

const styles = StyleSheet.create({
  boldText: {
    fontFamily: "JosefinSansRegular",
    color: "#3b3a30",
    letterSpacing: 1
  },
  header: {
    marginTop: 100,
    fontSize: 50,
    fontFamily: "AmaticSCRegular"
  },
  signInContainer: {
    backgroundColor: "#eaece5",
    display: "flex",
    flexDirection: "column",
    height: "30%",
    width: "80%",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 6,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.5,

    elevation: 5
  },
  usernamePassword: {
    width: "80%",
    fontSize: 30,
    backgroundColor: "#eaece5",
    fontFamily: "AmaticSCRegular"
  },
  signinText: {
    fontFamily: "AmaticSCBold",
    color: "#3b3a30",
    fontSize: 30,
    letterSpacing: 1
  },
  signinButton: {
    borderRadius: 6,
    borderBottomColor: "#c6c5b9",
    borderBottomWidth: 1,
    height: "21%"
  },
  signUpContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "20%",
    width: "80%",
    flexDirection: "column",
    borderRadius: 3,
    alignSelf: "center",
    marginTop: 100
  },
  fbsignup: {
    borderRadius: 3,
    display: "flex",
    width: "71%",
    justifyContent: "center",
    alignItems: "center"
  },
  signupImg: {
    height: 35,
    width: 35
  },
  signupText: {
    fontFamily: "AmaticSCRegular",
    color: "#3b3a30",
    fontSize: 30,

    letterSpacing: 1
  }
});
