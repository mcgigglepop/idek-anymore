import {StyleSheet, Platform} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {SH, SW, SF} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  areaFocusBoxStyle: {
    width: '44%',
    height: SH(170),
    backgroundColor: '#FFFFFF',
    shadowColor: '#691BFB',
    shadowOffset: {
      width: 0,
      height: Platform.os === 'ios' ? 2 : 5,
      minHeight: '100%',
    },
    shadowOpacity: 0.5,
    shadowRadius: Platform.OS === 'ios' ? 2 : 100,
    elevation: Platform.OS === 'ios' ? 1 : 7,
    overflow: 'hidden',
    borderRadius: SW(7),
    marginHorizontal: SW(10),
    marginVertical: SH(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  workoutStyle: {
    width: SW(70),
    height: SH(70),
  },
  workoutNameStyle: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: SF(18),
    color: 'black',
  },
});

export default style;
