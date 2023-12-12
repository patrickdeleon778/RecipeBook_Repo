import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://your-backend-url/user/login', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      navigation.navigate('Home'); // Replace 'Home' with your home screen name
    } catch (error) {
      console.error(error);
    }
  };
  const handleGuestLogin = () => {
    // Navigate to your home screen or main app screen
    // Disable or hide features like saving recipes
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
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