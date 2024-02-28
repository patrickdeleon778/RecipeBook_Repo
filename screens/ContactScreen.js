import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import ContactForm from '../components/ContactForm';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from "@react-navigation/routers";
import customColors from "../config/customColors";


const ContactScreen = () => {
  const navigate = useNavigation();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  const openDrawer = () => {
    navigate.dispatch(DrawerActions.openDrawer());
  };

  const navigateToHomeScreen = () => {
    navigate.navigate("Home", { screen: "Settings" });
  };
  

 
 

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
        {image ? (
          <Image source={{ uri: image }} style={styles.logo} />
        ) : (
          <Image
            source={require("../assets/images/dishLogo.png")}
            style={styles.logo}
          />
        )}
      </View>
      
      <View style={styles.bottomHalf}>
        <ContactForm onSubmit={handleSubmit} loading={loading} />
      </View>
    </View>
     
      
    
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: customColors.primary,
    padding: 10,
  },
  menuIcon: {
    position: 'absolute',
    top: 60,
    right: 20,
    zIndex: 1,
  
  },
  logo: {
    borderRadius: 160,
    width: 160,
    height: 160,
    marginbottom: 60,
    marginTop: 20,
  },
  
  topHalf: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    
  },
  bottomHalf: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  menuIcon: {
    position: 'absolute',
    top: 60,
    right: 20,
    zIndex: 1,
  },
  
});

export default ContactScreen;

