import React from "react"
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native"
import { connect } from "react-redux"
import * as actions from "../../store/actions"
import axios from "axios"

class UserFeed extends React.Component {
  constructor() {
    super()

    this.state = {
      jsonResponse: [],
      isLoading: true
    }
  }

  componentDidMount() {
    // axios.get("https://randomuser.me/api/?results=30").then(res => {
    //   console.log(JSON.stringify(res.data.results))
    //   const response = res.data
    //   this.setState({ jsonResponse: response })
    // })
    this.setState({ jsonResponse: this.props.users.reverse() })
  }


  render() {
    const styles = StyleSheet.create({
      container: {
        display: "flex",
        height: this.props.height,
        width: "100%",
        alignItems: "center"
      },
      headerView: {
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        width: "100%"
      },
      header: {
        marginTop: 10,
        fontSize: 40,
        fontFamily: "AmaticSCRegular",
        color: "#3b3a30",
        textAlign: "center"
      },
      subheader: {
        marginTop: 5,
        fontSize: 20,
        fontFamily: "JosefinSansRegular",
        color: "#3b3a30"
      },
      listImage: {
        height: 100,
        width: 100,
        borderRadius: 50,
        margin: "3%"
      },
      listItem: {
        display: "flex",
        position: "relative",
        flexDirection: "row",
        alignItems: "center",
        height: 150,
        justifyContent: "center",

        marginBottom: "2%",
        backgroundColor: "white",
        borderTopWidth: 1,
        borderTopColor: "lightgray",
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2
      },
      listBlurb: {
        paddingRight: "5%",
        paddingLeft: "2%",
        flexWrap: "wrap",
        fontFamily: "JosefinSansRegular",
        lineHeight: 18,
        fontSize: 15
      },
      reply: {
        position: "absolute",
        bottom: 0,
        right: 9,
        flexWrap: "wrap"
      },
      flatList: {
        width: "100%",

      }
    })

    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.header}>User Feed</Text>
        </View>
        <FlatList
          style={styles.flatList}
          data={this.state.jsonResponse}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text
                style={{
                  position: "absolute",
                  top: "2%",
                  fontFamily: "AmaticSCBold"
                }}>
                {item.timePosted}
              </Text>
              <View
                style={{
                  borderRightWidth: 1,
                  borderRightColor: "gray",
                  display: "flex",
                  alignItems: "center",
                  position: "relative"
                }}>
                <Image
                  ImageResizeMode="cover"
                  source={{ uri: item.picture.large }}
                  style={styles.listImage}
                  blurRadius={10}
                />
                <View
                  style={{
                    position: "absolute",
                    bottom: 0,
                    backgroundColor: "white",
                    borderWidth: 1,
                    borderColor: "lightGray",
                    borderRadius: 15,
                    width: "60%",
                    paddingTop: "3%",
                    paddingBottom: "3%"
                  }}>
                  <Text
                    style={{
                      fontFamily: "JosefinSansRegular",
                      textAlign: "center"
                    }}>
                    {item.name.first}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  positin: "relative",
                  flex: 1,
                  height: 125
                }}>
                <Text style={styles.listBlurb}>{item.blurb}</Text>
                <TouchableOpacity style={styles.reply}>
                  <Text
                    style={{
                      fontFamily: "AmaticSCBold",
                      lineHeight: 18,
                      fontSize: 15
                    }}>
                    Reply to this in messages ->
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return { users: state.feedReducer }
}

export default connect(
  mapStateToProps,
  actions
)(UserFeed)
