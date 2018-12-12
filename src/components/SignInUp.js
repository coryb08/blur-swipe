import React from "react"
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  TouchableOpacity
} from "react-native"
import fb from "../../assets/Good-Stuff-No-Nonsense-Social-Icons/PNG/128x128px/facebook.png"
import email from "../../assets/Good-Stuff-No-Nonsense-Social-Icons/PNG/128x128px/envelope.png"

import { connect } from "react-redux"
import * as actions from "../store/actions"
import { Font, AppLoading } from "expo"
import { Actions } from "react-native-router-flux"

class SignInUp extends React.Component {
  render() {
    return [
      <Text key={Math.random()} style={styles.header}>
        Have an account?
      </Text>,
      <View key={Math.random()} style={styles.signInContainer}>
        <TextInput
          selectionColor="#dddcd5"
          placeholder="username"
          style={styles.usernamePassword}
        />
        <TextInput
          selectionColor="#dddcd5"
          placeholder="password"
          secureTextEntry={true}
          style={styles.usernamePassword}
        />
        <TouchableOpacity
          onPress={Actions.UserFeed}
          style={styles.signinButton}>
          <Text style={styles.signinText}>Sign In</Text>
        </TouchableOpacity>
      </View>,
      <View key={Math.random()} style={styles.signUpContainer}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
          onPress={() => Actions.FacebookSignUp()}>
          <Image style={styles.signupImg} source={fb} />
          <Text style={[styles.signupText]}>sign up with facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 30
          }}
          onPress={() => Actions.EmailSignUp()}>
          <Image style={styles.signupImg} source={email} />
          <Text style={[styles.signupText, { marginLeft: 10 }]}>
            sign up with email
          </Text>
        </TouchableOpacity>
      </View>
    ]
  }
}

const mapStateToProps = state => ({
  state
})

export default connect(
  mapStateToProps,
  actions
)(SignInUp)

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
})
