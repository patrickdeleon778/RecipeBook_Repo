import React, { useState } from 'react';
import { View, TouchableOpacity} from 'react-native';
import ContactForm from '../components/ContactForm';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from "@react-navigation/routers";



const ContactScreen = () => {
  const navigate = useNavigation();

  const openDrawer = () => {
    navigate.dispatch(DrawerActions.openDrawer());
  };

  const navigateToHomeScreen = () => {
    navigate.navigate("Home", { screen: "Settings" });
  };
  

  const [loading, setLoading] = useState(false);
 

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
      
      <View style={styles.bottomHalf}>
        <ContactForm onSubmit={handleSubmit} loading={loading} />
      </View>
    </View>
     
      
    
  );
};

const styles = {
  container: {
    flex: 1,
  },
  topHalf: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingTop: 20,
    paddingRight: 20,
  },
  bottomHalf: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
};

export default ContactScreen;

