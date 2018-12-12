import React, { Component } from "react"
import { connect } from "react-redux"
import {
  Actions,
  Router,
  Scene,
  ActionConst,
  Stack
} from "react-native-router-flux"
import * as actions from "./src/store/actions"
import SignInUp from "./src/components/SignInUp"
import Landing from "./src/components/Landing"
import EmailSignUp from "./src/components/signUp/EmailSignUp"
import ProfileSetup from "./src/components/signUp/ProfileSetup"
import FacebookSignUp from "./src/components/signUp/FacebookSignUp"
import UserFeed from "./src/components/feed/UserFeed"

import { Platform } from "react-native"
import HocWithoutNav from "./src/components/HocWithoutNav"
import HocWithNav from "./src/components/HocWithNav"

// import WithoutHeadingHOC from "master_a_million/src/hocs/WithoutHeadingHOC"
const reset = { type: "reset" }

class AppRouter extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = () => {}

  render() {
    return (
      <Router>
        <Stack hideNavBar={true} key="root">
          <Scene
            key="home"
            hideBackImage={true}
            component={HocWithoutNav(SignInUp)}
            initial
          />
          <Scene
            key="Landing"
            previous={() => Actions.home()}
            component={HocWithNav(Landing)}
          />
          <Scene
            key="EmailSignUp"
            previous={() => Actions.home()}
            component={HocWithoutNav(EmailSignUp)}
          />
          <Scene
            key="FacebookSignUp"
            previous={() => Actions.home()}
            hideBackImage={false}
            component={HocWithoutNav(FacebookSignUp)}
          />
          <Scene
            key="ProfileOptions"
            previous={() => Actions.EmailSignUp()}
            component={HocWithoutNav(ProfileSetup)}
          />
          <Scene
            key="UserFeed"
            previous={() => Actions.home()}
            component={HocWithNav(UserFeed)}
          />
        </Stack>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  isConnectedStore: state.events.isConnected
})

const ConnectedRouter = connect(
  mapStateToProps,
  actions
)(AppRouter)

export default {
  ConnectedRouter: ConnectedRouter
}
