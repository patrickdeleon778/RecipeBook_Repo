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
    <View style={{ width: '80%', 
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderWidth: 2, 
    borderColor: 'black'}}>
      <Text style={{fontSize: 30, marginBottom: 20,marginTop: 40, textAlign: 'center' }}>Contact Us</Text>
    <View style={{ justifyContent: 'center',marginBottom: 20}}>
<TextInput
        placeholder='Enter your name'
        value={formData.name}
        onChangeText={(text) => handleChange('name', text)}
        style={{ fontSize: 20, padding: 15, marginBottom: 10, borderWidth: 1, width: '50%', height: 50, alignSelf: 'center' }}
      />

      <TextInput
        placeholder='Enter your email'
        value={formData.email}
        onChangeText={(text) => handleChange('email', text)}
        style={{ fontSize: 20, padding: 15, marginBottom: 10, borderWidth: 1, width: '50%', height: 50, alignSelf: 'center' }}
      />

      <TextInput
        placeholder='Enter your message'
        value={formData.message}
        onChangeText={(text) => handleChange('message', text)}
        multiline
        numberOfLines={6}
        style={{ fontSize: 20, padding: 15, marginBottom: 30, borderWidth: 1, width: '50%', height: 150, alignSelf: 'center' }}
      />

      <TouchableOpacity
        onPress={handleSubmit}
        disabled={loading}
        style={{
          backgroundColor: loading ? 'gray' : '#59983C',
          padding: 15,
          alignItems: 'center',
          alignSelf: 'center',
          borderRadius: 5,
           width: '50%',
           marginBottom: 30,
           height: 50
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
