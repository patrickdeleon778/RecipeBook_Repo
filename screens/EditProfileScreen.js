import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, TextInput, Alert, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import customColors from "../config/customColors";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/routers";
import AnonReg from "../components/customFonts/AnonReg";
import { Ionicons } from "@expo/vector-icons";
import axios from 'axios';

const EditProfileScreen = () => {
  const [image, setImage] = useState(null);
  const [newName, setNewName] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const navigation = useNavigation();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const handleUpdate = async () => {
    if (newPassword !== confirmNewPassword) {
      Alert.alert('Error', 'New passwords do not match');
      return;
    }

    if (newPassword && currentPassword === '') {
      Alert.alert('Error', 'Please enter the current password');
      return;
    }

    try {
      const userId = "your_user_id_here"; // Debes obtener este ID de tu estado global o almacenamiento persistente

      const updateData = {
        userId,
        newName, // Solo envía newName si se ha cambiado el nombre
        currentPassword, // Solo envía las contraseñas si se está cambiando la contraseña
        newPassword,
      };

      // Filtra los campos no utilizados
      Object.keys(updateData).forEach(key => updateData[key] === '' && delete updateData[key]);

      const response = await axios.post('https://recipeappbackend.azurewebsites.net/user/update', updateData);

      if (response.data) {
        Alert.alert('Success', response.data.message);
        // Actualizar el estado global del usuario si es necesario
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        Alert.alert('Error', error.response.data.message);
      } else {
        Alert.alert('Error', 'Failed to update profile');
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <TouchableOpacity
          style={styles.menuIcon}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Ionicons name={"menu"} size={40} color="black" />
        </TouchableOpacity>
        <Image source={image ? { uri: image } : require("../assets/images/dishLogo.png")} style={styles.logo} />
      </View>
      <View style={styles.bottomHalf}>
        <View style={styles.bottomHalfContent}>
          <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
            <AnonReg style={{ color: customColors.white }}>
              Upload Image
            </AnonReg>
          </TouchableOpacity>

          {/* Inputs para editar el perfil */}
          <Text style={styles.label}>Change name:</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            value={newName}
            onChangeText={setNewName}
            placeholder="Enter new name"
            placeholderTextColor={customColors.primary}
          />
          <TouchableOpacity style={styles.button} onPress={handleNameChange}>
            <Text style={styles.buttonText}>Confirm name change</Text>
          </TouchableOpacity>

          <Text style={styles.label}>Change password:</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            secureTextEntry
            value={currentPassword}
            onChangeText={setCurrentPassword}
            placeholder="Enter current password"
            placeholderTextColor={customColors.primary}
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            secureTextEntry
            value={newPassword}
            onChangeText={setNewPassword}
            placeholder="Enter new password"
            placeholderTextColor={customColors.primary}
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            secureTextEntry
            value={confirmNewPassword}
            onChangeText={setConfirmNewPassword}
            placeholder="Confirm new password"
            placeholderTextColor={customColors.primary}
          />
          <TouchableOpacity style={styles.button} onPress={handlePasswordChange}>
            <Text style={styles.buttonText}>Confirm password change</Text>
          </TouchableOpacity>
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
  menuIcon: {
    position: 'absolute',
    top: 60,
    right: 20,
    zIndex: 1,
  },
  topHalf: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
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
    marginVertical: 30,
  },
  logo: {
    borderRadius: 200,
    width: 250,
    height: 250,
    marginTop: 50,
  },
  icon: {
    paddingBottom: 5,
  },
  imageButton: {
    width: '50%', // Set the width to 50%
    height: 35,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center', // Center the button horizontally
    backgroundColor: customColors.primary,
  },
  updateButton: {
    width: '70%',
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    alignSelf: 'center',
    backgroundColor: customColors.primary, // You can change the color if needed
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: customColors.primary,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    fontSize: 20,
    height: 30,
    color: customColors.primary,
    paddingLeft: 5,
    paddingRight: 40,
    paddingBottom: 5,
    fontFamily: 'Anon',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 15,
    fontWeight: 'bold',
    color: customColors.dark,
  },
  button: {
    backgroundColor: customColors.secondary,
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: customColors.white,
    fontSize: 18,
    fontWeight: '600',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 15,
    fontWeight: 'bold',
    color: customColors.dark,
  },
  button: {
    backgroundColor: customColors.secondary,
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
export default EditProfileScreen;
