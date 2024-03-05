import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('window');

const isSmall = width <= 375 && !DeviceInfo.hasNotch();

const guidelineBaseWidth = () => {
  if (isSmall) {
    return 330;
  }
  return 350;
};

const horizontalScale = size => (width / guidelineBaseWidth()) * size;

const guidelineBaseHeight = () => {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
};

const verticalScale = size => (height / guidelineBaseHeight()) * size;

const guidelineBaseFonts = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};

const SW = dimension => {
  return wp((dimension / 375) * 100 + '%');
};

const SH = dimension => {
  return hp((dimension / 812) * 100 + '%');
};

const SF = dimension => {
  return hp((dimension / 812) * 100 + '%');
};

const scaleFontSize = size => Math.round((width / guidelineBaseFonts()) * size);

export {horizontalScale, verticalScale, scaleFontSize, SW, SH, SF};
