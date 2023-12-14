import React, { useState } from 'react';
import { View, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import ContactForm from '../components/ContactForm';
import customColors from "../config/customColors";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/routers";



const ContactScreen = ({onSubmit}) => {
  const [loading, setLoading] = useState(false);

  // const navigate = useNavigation();

  const handleSubmit = async (formData) => {
    setLoading(true);

    try {
      
      alert('Success', 'Thank you! I will be in contact soon.');
    } catch (error) {
      console.error(error);
      alert('Error', 'Something went wrong. Please try again.');
      throw error; 
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
          style={styles.menuIcon}
          onPress={() => navigate.dispatch(DrawerActions.openDrawer())}
        >
          <Ionicons name={"menu"} size={40} />
        </TouchableOpacity>
      <ContactForm onSubmit={handleSubmit} loading={loading} />
    </View>
  );
};

const styles = {
  menuIcon: {
    position: 'absolute',
    top: 60,
    right: 20,
    zIndex: 1,
  },
};

export default ContactScreen;

