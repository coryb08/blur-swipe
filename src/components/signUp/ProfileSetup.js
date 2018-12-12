import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default class ProfileSetup extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Let's setup your profile</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    width: "100%",
    alignItems: "center"
  },
  header: {
    marginTop: 50,
    fontSize: 40,
    fontFamily: "AmaticSCRegular",
    color: "#3b3a30"
  },
  subheader: {
    marginTop: 5,
    fontSize: 20,
    fontFamily: "JosefinSansRegular",
    color: "#3b3a30"
  }
})
