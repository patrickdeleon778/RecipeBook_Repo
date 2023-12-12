import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import customColors from "../config/customColors";

const ContactForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      await onSubmit(formData);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  return (
    <View style={{ width: '80%' }}>
      <Text style={{fontSize: 30, marginBottom: 20, textAlign: 'center' }}>Contact Us</Text>
    <View style={{marginBottom: 20}}>
<TextInput
        placeholder='Enter your name'
        value={formData.name}
        onChangeText={(text) => handleChange('name', text)}
        style={{ fontSize: 20, padding: 15, marginBottom: 10, borderWidth: 1 }}
      />

      <TextInput
        placeholder='Enter your email'
        value={formData.email}
        onChangeText={(text) => handleChange('email', text)}
        style={{ fontSize: 20, padding: 15, marginBottom: 10, borderWidth: 1 }}
      />

      <TextInput
        placeholder='Enter your message'
        value={formData.message}
        onChangeText={(text) => handleChange('message', text)}
        multiline
        numberOfLines={6}
        style={{ fontSize: 20, padding: 15, marginBottom: 20, borderWidth: 1 }}
      />

      <TouchableOpacity
        onPress={handleSubmit}
        disabled={loading}
        style={{
          backgroundColor: loading ? 'gray' : 'blue',
          padding: 15,
          alignItems: 'center',
          borderRadius: 5,
        }}
      >
        <Text style={{ color: 'white', fontSize: 20 }}>
          {loading ? 'Sending......' : 'Send'}
        </Text>
      </TouchableOpacity>


    </View>
      
    </View>
  );
};

export default ContactForm;
