import { observable } from "mobx";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  @observable a = 1;
  @observable b = 2;

  render() {
    return (
      <View style={styles.container}>
        <Text>
          {this.a} + {this.b}
        </Text>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
