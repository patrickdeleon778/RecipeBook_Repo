import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ContactUs from './Components/ContactUs';
import ContactScreen from "./screens/ContactScreen";

export default function App() {
  return (
    <View style={styles.container}>
<ContactScreen/>

    </View>
     
     



    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
