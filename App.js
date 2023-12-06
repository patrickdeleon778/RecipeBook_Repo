import React from "react";
import { NavigationContainer } from 'react-native-gesture-handler';
import ContactScreen from './screens/ContactScreen';
import { StyleSheet} from "react-native";


const App = () => {
  return (

      <ContactScreen/>
   
     
  );
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
