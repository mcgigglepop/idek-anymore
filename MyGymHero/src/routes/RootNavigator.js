import React, {useEffect, useState} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {Colors} from '../utils';
import {RouteName, SideNavigator} from '../routes';
import {
  // LoginScreen,
  SplashScreen,
  // SwiperScreen,
  // TranslationScreen,
  // ForgotPassword,
  // YourProgram,
  // WorkoutList,
  // ReadyToGoScreen,
  // StartScreen,
  // TakeRestScreen,
  // DietPlan,
  // DietDetails,
  // AboutSelfScreen,
  // AgeScreen,
  // WeightScreen,
  // GoalScreen,
  // WeHelpScreen,
  // SignUpScreen,
  // OtpVerifyScreen,
} from '../screens';

const Stack = createNativeStackNavigator();

const RootNavigator = props => {
  const {colordata} = useSelector(state => state.commonReducer) || {};
  const [colorValue, setColorValue] = useState(MyTheme);

  const MyTheme = {
    ...DefaultTheme,
    Colors: Colors,
  };

  useEffect(() => {
    if (Colors.length != 0 && colordata != '') {
      Colors.theme_background = colordata;
      const MyThemeNew = {
        ...DefaultTheme,
        Colors: Colors,
      };
      setColorValue(MyThemeNew);
    }
  }, [colordata, Colors]);

  return (
    <NavigationContainer theme={colorValue}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
