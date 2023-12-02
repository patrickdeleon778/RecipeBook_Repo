import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import * as Font from 'expo-font';

const AnonBold = (props) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'AnonBold': require('../../assets/fonts/AnonymousPro-Bold.ttf'),
    });
    setFontLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return <Text {...props} />;
  }

  return <Text {...props} style={[props.style, { fontFamily: 'AnonBold' }]} />;
};

export default AnonBold;