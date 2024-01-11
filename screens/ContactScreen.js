import React, { useState } from 'react';
import { View,StyleSheet, TouchableOpacity, Alert } from 'react-native';
import ContactForm from '../components/ContactForm';
import customColors from "../config/customColors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from "@react-navigation/routers";




const ContactScreen = ({onSubmit}) => {
  const navigate = useNavigation();

  const openDrawer = () => {
    navigate.dispatch(DrawerActions.openDrawer());
  };

  const navigateToHomeScreen = () => {
    // Replace 'AnotherScreen' with the actual name of the screen you want to navigate to
    navigate.navigate("HomeScreen");
  };

  const [loading, setLoading] = useState(false);
  // const navigate = useNavigation();

  

  const handleSubmit = async (formData) => {
    setLoading(true);

    try {
      
      alert('Success','Thank you! I will be in contact soon.');

    } catch (error) {
      console.error(error);
      alert({title: 'Error',message:'Something went wrong. Please try again.'});
      throw error; 
    } finally {
      setLoading(false);
    }
  };


  return (
   
    <View style={styles.container}>
    
      <View style={styles.topHalf}>
        <TouchableOpacity
          style={styles.menuIcon}
          onPress={() => navigate.dispatch(DrawerActions.openDrawer())}
        >
          <Ionicons name={"menu"} size={40} />
        </TouchableOpacity>
        
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ContactForm onSubmit={handleSubmit} loading={loading} />
      </View>
      
       
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

