import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {RouteName} from '../routes';
import {YourProgram} from '../screens';

const Stack = createNativeStackNavigator();

const RootNavigator = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={RouteName.YOUR_PROGRAM} componenet={YourProgram} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
