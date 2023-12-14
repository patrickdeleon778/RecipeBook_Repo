import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginAndRegiScreen from './screens/LoginAndRegiScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import NavScreenHolder from './navigation/NavScreenHolder';
import RecipeScreen from './screens/RecipeScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import CreateRecipeScreen from './screens/CreateRecipeScreen';
import ContactScreen from './screens/ContactScreen';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <LoginScreen/>
    // <AboutUsScreen/>
    // <EditProfileScreen/>
    // <CreateRecipeScreen/>
    <ContactScreen/>
    // <NavScreenHolder/>
    // <RecipeScreen/>
    // <RegisterScreen/>
    // <LoginAndRegiScreen/>
  );
 
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
})

