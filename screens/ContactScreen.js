import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import {ContactForm} from '../Components/ContactForm';

const ContactScreen = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    setLoading(true);

    try {
      // Your emailjs logic here
      // await emailjs.send(...);
      Alert.alert('Success', 'Thank you! I will be in contact soon.');
    } catch (error) {
      console.error(error);
      throw error; // Propagate the error to be caught in the ContactForm component
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ContactForm onSubmit={handleSubmit} loading={loading} />
    </View>
  );
};

export default ContactScreen;

