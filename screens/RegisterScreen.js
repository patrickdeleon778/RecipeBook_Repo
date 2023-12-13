import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://192.168.0.18:5000/user/register', {
        username,
        email,
        password
      });
      // Handle successful registration
      alert('Registration successful! Please log in.'); // Replace with a more sophisticated approach
      // Optionally, navigate to login screen
    } catch (error) {
      console.error('Error during registration: ', error);
      alert('Registration failed. Please try again.'); // Replace with a more sophisticated approach
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Register" onPress={handleRegister} />
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

export default RegisterScreen;