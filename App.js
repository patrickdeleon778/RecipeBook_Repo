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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName={isUserLoggedIn ? "Home" : "Login"}>
      <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AboutUs" component={AboutUsScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="CreateRecipe" component={CreateRecipeScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Recipe" component={RecipeScreen} />
        <Stack.Screen name="LoginAndRegi" component={LoginAndRegiScreen} />
    </Stack.Navigator>
    </NavigationContainer>
    
   
  );
 
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
})

