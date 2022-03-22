import React from 'react';
import {View} from 'react-native';
import * as Animatable from 'react-native-animatable';

import SVGIconDown from '../../assets/icon-done';

const IconAnimated = ({style}) => {
  const pulse = {
    0: {
      scale: 0.5,
    },
    0.5: {
      scale: 0.7,
    },
    1: {
      scale: 0.5,
    },
  };
  return (
    <View style={[style]}>
      <Animatable.View
        animation={pulse}
        easing="ease-out-sine"
        iterationCount={3}
        duration={2000}
        style={{textAlign: 'center'}}>
        <SVGIconDown width={94} height={94} />
      </Animatable.View>
    </View>
  );
};

export default IconAnimated;
