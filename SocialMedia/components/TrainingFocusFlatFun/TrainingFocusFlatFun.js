import React from 'react';
import {View, Text, Image} from 'react-native';
import style from './style';
import {SH} from '../../assets/styles/scaling';
import Spacing from '../Spacing/Spacing';

const TrainingFocusFlatFun = props => {
  const {item} = props;

  return (
    <View style={style.areaFocusBoxStyle}>
      <Image
        source={item.workoutImg}
        style={style.workoutStyle}
        resizeMode="contain"
      />
      <Spacing space={SH(15)} />
      <Text style={style.workoutNameStyle}>{item.name}</Text>
    </View>
  );
};

export default TrainingFocusFlatFun;
