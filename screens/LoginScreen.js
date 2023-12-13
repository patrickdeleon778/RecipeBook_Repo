import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.0.18:5000/user/login', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      navigation.navigate('Home'); // Replace 'Home' with your home screen name
    } catch (error) {
      console.error(error);
    }
  };
  const handleRegisterNavigation = () => {
    navigation.navigate('Register'); // Make sure 'Register' matches your RegisterScreen name in the navigator
  };
  const handleGuestLogin = () => {
    navigation.navigate('RecipeList'); // Navigate to RecipeListScreen as a guest
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={handleRegisterNavigation} />
      
      <Button title="Enter without account" onPress={handleGuestLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  // Add more styles as needed
});

export default LoginScreen;