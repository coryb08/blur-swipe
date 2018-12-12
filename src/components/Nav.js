import React from "react"
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image
} from "react-native"
import asana from "../../assets/Good-Stuff-No-Nonsense-Social-Icons/PNG/128x128px/asana.png"
import chat from "../../assets/Good-Stuff-No-Nonsense-Social-Icons/PNG/128x128px/chat.png"
import odnoklassniki from "../../assets/Good-Stuff-No-Nonsense-Social-Icons/PNG/128x128px/odnoklassniki.png"

const transparent = "transparent"

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const styles = StyleSheet.create({
      leftRightIcon: {
        height: 30,
        width: 30
      },
      feedIcon: {
        height: 40,
        width: 40
      },
      container: {
        backgroundColor: "lightgray",
        borderTopColor: "darkgray",
        borderTopWidth: 1,
        height: this.props.height,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: "4%",
        paddingRight: "4%",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11
      }
    })
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Image style={styles.leftRightIcon} source={chat} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.feedIcon} source={asana} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.leftRightIcon} source={odnoklassniki} />
        </TouchableOpacity>
      </View>
    )
  }
}
