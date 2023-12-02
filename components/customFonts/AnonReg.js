import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import * as Font from 'expo-font';

const AnonReg = (props) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Anon': require('../../assets/fonts/AnonymousPro-Regular.ttf'),
    });
    setFontLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return <Text {...props} />;
  }

  return <Text {...props} style={[props.style, { fontFamily: 'Anon' }]} />;
};

export default AnonReg;