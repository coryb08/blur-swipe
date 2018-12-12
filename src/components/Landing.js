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
import { Font, AppLoading } from "expo"

export default class Landing extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return [<Text style={styles.header}>Signed In Landing Page</Text>]
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: 100,
    fontSize: 50,
    fontFamily: "AmaticSCRegular"
  }
})
