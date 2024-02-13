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
import { UserProvider } from './context/UserContext';
import { RecipeProvider } from './context/RecipeContext'; // Import RecipeProvider

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <RecipeProvider> {/* Wrap with RecipeProvider */}
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="NavScreenHolder" component={NavScreenHolder} />
            <Stack.Screen name="AboutUs" component={AboutUsScreen} />
            <Stack.Screen name="EditProfile" component={EditProfileScreen} />
            <Stack.Screen name="CreateRecipe" component={CreateRecipeScreen} />
            <Stack.Screen name="Contact" component={ContactScreen} />
            <Stack.Screen name="Recipe" component={RecipeScreen} />
            <Stack.Screen name="LoginAndRegi" component={LoginAndRegiScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </RecipeProvider> {/* Wrap with RecipeProvider */}
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  }
})