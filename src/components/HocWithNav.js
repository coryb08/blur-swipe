import React from "react"
import { StyleSheet, TouchableOpacity, Text, View } from "react-native"
import Nav from "./Nav"

export default function HocWithNav(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <View style={styles.container}>

          <WrappedComponent
            height="93%"
            key="wrappedComponent"
            {...this.props}
          />
          <Nav height="7%" />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#c0ded9",
    height: "100%",
    width: "100%",
    flexDirection: "column"
  },
  signupImg: {
    height: 35,
    width: 35
  }
})
