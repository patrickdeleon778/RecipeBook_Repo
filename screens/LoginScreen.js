import React, { useState } from "react";
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
import axios from 'axios';



const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.0.18:5000/user/login', {
        email,
        password
      });
  
      console.log('Login successful', response.data);
      // Handle login success, e.g., navigate to the main app screen
      // Save the token if your app requires it
    } catch (error) {
      console.error('Error during login: ', error.response?.data || error);
      alert('Login failed: ' + (error.response?.data?.message || 'Unknown error'));
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
          <AnonReg style={styles.welcomeText}>Welcome</AnonReg>
          <Text>
            <AnonReg style={styles.noAccountText}>Don't have an account? </AnonReg>
            <Text style={styles.registerText}>Register now</Text>
          </Text>

          <View style={{ marginTop: 50 }}>
            <AnonReg style={{ fontSize: 20, color: customColors.medium }}>
              Email
            </AnonReg>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
              />
              <Feather
                name="check"
                size={30}
                color="green"
                style={styles.icon}
              />
            </View>
          </View>

          <View style={{ marginTop: 30 }}>
            <AnonReg style={{ fontSize: 20, color: customColors.medium }}>
              Password
            </AnonReg>

            <View style={styles.inputContainer}>
              <TextInput style={styles.input}
  secureTextEntry
  autoCapitalize="none"
  value={password}
  onChangeText={setPassword}
  placeholder="Password" />
              <Feather name="eye" size={30} color="green" style={styles.icon} />
            </View>
          </View>

          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <FontAwesome
              name="check-circle"
              size={24}
              color={customColors.primary}
            />
            <AnonReg
              style={{
                marginLeft: 10,
                fontSize: 12,
                marginTop: 4,
                color: "grey",
              }}
            >
              Remember me
            </AnonReg>
          </View>

          <View style={{ marginTop: 20 }}>
          <TouchableOpacity
  style={[styles.button, { backgroundColor: customColors.primary }]}
  onPress={handleLogin}
>
  <Text style={styles.buttonText}>Login</Text>
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
    backgroundColor: customColors.primary,
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
    backgroundColor: customColors.white,
  },
  bottomHalfContent: {
    flex: 1,
    marginHorizontal: 40,
    marginVertical: 60,
  },
  welcomeText: {
    fontSize: 40,
    fontWeight: "bold",
    color: customColors.primary,
  },
  noAccountText: {
    fontSize: 14,
    color: customColors.primary,
    marginTop: 5,
  },
  registerText: {
    fontSize: 14,
    color: customColors.danger,
    fontStyle: "italic",
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: customColors.medium,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    fontSize: 20,
    height: 30,
    color: customColors.medium,
    paddingLeft: 10,
    paddingRight: 40,
    paddingBottom: 5,
  },
  icon: {
    position: "absolute",
    right: 10,
    paddingBottom: 10,
  },
  logo: {
    borderRadius: 200,
    width: 250,
    height: 250,
    marginTop: 50,
  },
  button: {
    width: "50%",
    height: 35,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: customColors.white,
    fontFamily: "Anon",
  },
});

export default LoginScreen;
