import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
  SW,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  header: {
    marginLeft: horizontalScale(27),
    marginRight: horizontalScale(17),
    marginTop: verticalScale(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: horizontalScale(14),
    borderRadius: horizontalScale(100),
    backgroundColor: '#F9FAFB',
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: horizontalScale(10),
    height: horizontalScale(10),
    borderRadius: horizontalScale(10),
    position: 'absolute',
    right: horizontalScale(10),
    top: verticalScale(10),
  },
  messageNumber: {
    color: '#FFFFFF',
    fontSize: scaleFontSize(6),
    fontFamily: getFontFamily('Inter', '600'),
  },
  userStoryContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(28),
  },
  userPostContainer: {
    marginHorizontal: horizontalScale(24),
  },
  statAmount: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(20),
    color: '#022150',
    textAlign: 'center',
  },
  statType: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(16),
    color: '#79869F',
    textAlign: 'center',
  },
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(40),
    paddingVertical: verticalScale(30),
    borderBottomWidth: 1,
    borderColor: '#E9EFF1',
  },
  statBorder: {
    borderRightWidth: 1,
    borderColor: '#E9EFF1',
  },
  userName: {
    marginTop: verticalScale(20),
    textAlign: 'center',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(20),
  },
  caloriesRemaining: {
    marginTop: verticalScale(20),
    textAlign: 'center',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(14),
  },
  subHeader: {
    marginTop: verticalScale(20),
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(12),
  },
  Pad20: {
    paddingHorizontal: SW(20),
  },
});

export default style;
