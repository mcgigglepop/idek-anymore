import React, {useMemo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import propTypes from 'prop-types';
import {RowComponent, VectorIcons} from '../../components';
import {SF, SH, SW, Fonts, Colors} from '../../utils';
function AppHeader({
  headerStyle,
  LeftIconStyle,
  rightView,
  LeftIconLeftStyle,
  headerTitle,
  onPress,
  titleStyle,
  Iconname,
}) {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          postiion: 'relative',
          ...headerStyle,
        },
        leftView: {
          width: '15%',
          justifyContent: 'center',
          alignItems: 'flex-start',
        },
        LeftImageViewStyle: {
          height: SH(18),
          width: SW(18),
          resizeMode: 'contain',
        },
        headerTitle: {
          fontSize: SF(23),
          fontWeight: '700',
          color: Colors.theme_background,
          ...titleStyle,
        },
        rightView: {
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: Colors.bgwhite,
          width: '100%',
          height: SH(60),
        },
        rightImageStyle: {
          resizeMode: 'contain',
        },
        LeftIconStyle: {
          fontSize: SF(30),
          color: Colors.theme_background,
          paddingLeft: SH(15),
          paddingRight: SH(30),
          ...LeftIconLeftStyle,
        },
      }),
    [headerStyle, titleStyle, LeftIconLeftStyle],
  );

  return (
    <RowComponent rowStyle={styles.container}>
      <View style={[styles.rightView, {...rightView}]}>
        <TouchableOpacity onPress={onPress} style={styles.LeftIconStyle}>
          {Iconname && (
            <VectorIcons
              icon="AntDesign"
              name={'arrowLeft'}
              iconStyle={styles.LeftIconStyle}
            />
          )}
          {headerTitle && <Text style={styles.headerTitle}>{headerTitle}</Text>}
        </TouchableOpacity>
      </View>
    </RowComponent>
  );
}

AppHeader.defaultProps = {
  headerStyle: {},
  LeftImageViws: null,
  LeftComponent: null,
  title: '',
  rightImage: null,
  onLeftPress: () => {},
};

AppHeader.propTypes = {
  headerStyle: propTypes.shape({}),
  LeftImageView: propTypes.any,
  LeftComponent: propTypes.any,
  title: propTypes.string,
  rightImage: propTypes.any,
  onLeftPress: propTypes.func,
};

export default AppHeader;
