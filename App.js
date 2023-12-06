import React from "react";
import { NavigationContainer } from 'react-native-gesture-handler';
import ContactScreen from './screens/ContactScreen';
import { StyleSheet} from "react-native";


const App = () => {
  return (
<NavigationContainer>
      <ContactScreen/>
    </NavigationContainer>
     
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
