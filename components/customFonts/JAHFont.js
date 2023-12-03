import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import * as Font from 'expo-font';

const JAHFont = (props) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'JAHFont': require('../../assets/fonts/JustAnotherHand-Regular.ttf'),
    });
    setFontLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return <Text {...props} />;
  }

  return <Text {...props} style={[props.style, { fontFamily: 'JAHFont' }]} />;
};

export default JAHFont;