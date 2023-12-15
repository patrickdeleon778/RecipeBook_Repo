import React, { useState } from "react";
import axios from 'axios';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import customColors from "../config/customColors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import AnonReg from "../components/customFonts/AnonReg";


const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleRegister = async () => {
    // Email validation check
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
  
    // Password match check
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    try {
      // Axios POST request
      const response = await axios.post('http://192.168.0.18:5000/user/register', {
        username: name,
        email,
        password
      });
  
      // Handle successful registration
      navigation.navigate('Login');
      console.log('Registration successful', response.data);
      // You can navigate to the login screen or main app screen here
    } catch (error) {
      // Updated error handling
      console.error('Error during registration: ', error.response?.data);
      const errorMessage = error.response?.data?.message || 'Unknown error';
      alert('Registration failed: ' + errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <Image
          style={styles.logo}
          source={require("../assets/images/dishLogo.png")}
        />
      </View>
      <View style={styles.bottomHalf}>
        <View style={styles.bottomHalfContent}>
          <AnonReg style={styles.registerText}>Register</AnonReg>

          <View style={{ marginTop: 20 }}>
            <View style={styles.inputContainer}>
            <MaterialCommunityIcons style={styles.icon} name="account" size={30} color={customColors.light} />
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                placeholder="Name"
                placeholderTextColor={customColors.light}
                value={name}
                onChangeText={setName}
              />
            </View>
          </View>

          <View style={{ marginTop: 15 }}>
            <View style={styles.inputContainer}>
            <MaterialCommunityIcons style={styles.icon} name="at" size={30} color={customColors.light} />
              <TextInput
                style={styles.input}
                autoCapitalize="none"
                placeholder="Email"
                placeholderTextColor={customColors.light}
                value={email}
                onChangeText={setEmail}

              />
            </View>
          </View>

          <View style={{ marginTop: 15 }}>
            <View style={styles.inputContainer}>
            <MaterialCommunityIcons style={styles.icon} name="lock" size={30} color={customColors.light} />
              <TextInput
                style={styles.input}
                secureTextEntry
                autoCapitalize="none"
                placeholder="Password"
                placeholderTextColor={customColors.light}
                value={password}
                onChangeText={setPassword}
              />
            </View>
          </View>

          <View style={{ marginTop: 15 }}>
            <View style={styles.inputContainer}>
            <MaterialCommunityIcons style={styles.icon} name="lock" size={30} color={customColors.light} />
              <TextInput
                style={styles.input}
                secureTextEntry
                autoCapitalize="none"
                placeholder="Re-enter Password"
                placeholderTextColor={customColors.light}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor: customColors.white,
                },
              ]}
              onPress={handleRegister}
            >
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: customColors.white,
  },
  topHalf: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomHalf: {
    flex: 0.6,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: customColors.primary,
  },
  bottomHalfContent: {
    flex: 1,
    marginHorizontal: 40,
    marginVertical: 30,
  },
  registerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: customColors.white,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: customColors.light,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    fontSize: 20,
    height: 30,
    color: customColors.light,
    paddingLeft: 5,
    paddingRight: 40,
    paddingBottom: 5,
    fontFamily: "Anon",
  },
  icon: {
    paddingBottom: 5,
  },
  logo: {
    borderRadius: 200,
    width: 250,
    height: 250,
    marginTop: 50,
  },
  button: {
    width: "50%", // Set the width to 50%
    height: 35,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    // padding: 10, // Adjust padding to make the button smaller
    margin: 20, // Adjust margin to make the button smaller
    alignSelf: "center", // Center the button horizontally
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: customColors.primary,
    fontFamily: "Anon",
  },
});

export default RegisterScreen;
