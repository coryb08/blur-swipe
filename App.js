import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  StatusBar,
  ScrollView
} from "react-native";
import { AppRegistry } from "react-native";
import { composeWithDevTools } from "redux-devtools-extension";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from 'redux'
import rootReducer from "./src/store/reducers";
// import { store } from './src/store'
// import { persistStore, persistReducer } from 'redux-persist'
import ReduxThunk from "redux-thunk";
import Router from "./router.js";
import { Font, AppLoading } from "expo";
// import storage from 'redux-persist/lib/storage'
const { ConnectedRouter, Scenes } = Router;
import { store } from "./src/store/store.js";
// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['events']
// }
// const persistedReducer = persistReducer(persistConfig, rootReducer)
// let store = createStore(
//   persistedReducer,
//   composeWithDevTools(applyMiddleware(ReduxThunk))
// )

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
    console.disableYellowBox = true;
    console.log = function() {};
  }
  async componentWillMount() {
    console.log("hello");
    console.disableYellowBox = true;
    StatusBar.setHidden(true);
    await Font.loadAsync({
      AmaticSCRegular: require("./assets/fonts/AmaticSC-Regular.ttf"),
      AmaticSCBold: require("./assets/fonts/AmaticSC-Bold.ttf"),
      DancingScriptRegular: require("./assets/fonts/DancingScript-Regular.ttf"),
      JosefinSansRegular: require("./assets/fonts/JosefinSans-Regular.ttf"),
      AndikaRegular: require("./assets/fonts/Andika-Regular.ttf")
    });
    this.setState({ loading: false });
  }
  render() {
    return !this.state.loading ? (
      <Provider store={store}>
        <ConnectedRouter scenes={Scenes} />
      </Provider>
    ) : null;
  }
}
