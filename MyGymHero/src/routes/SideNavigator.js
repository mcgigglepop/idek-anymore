import React from 'react';
import {RouteName} from '../routes';
import {Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigator} from '../routes';
import {CustomSidebarMenu} from '../components';

const SideNavigator = props => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomSidebarMenu {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Stack.Screen name={RouteName.HOME_SCREEN} component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export default SideNavigator;
