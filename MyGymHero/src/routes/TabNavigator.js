import React from 'react';
import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ColorPicker,
  VectorIcons,
  HeaderLeftMenuIcon,
  AppHeader,
  CustomSidebarMenu,
} from '../components';
import {Style} from '../styles';
import {RouteName} from '../routes';
import {Colors, SF} from '../utils';
import {View} from 'react-native';
import {TrainingTab} from '../screens';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const headerArray = {
  headerShown: true,
  headerTitleStyle: Style.headerTitleStyle,
  headerStyle: Style.headerStyle,
  headerShadowVisible: false,
};
function DrawerSidebarScreen(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{paddingTop: 0}}>
      <CustomSidebarMenu {...props} />
    </DrawerContentScrollView>
  );
}
function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreenTabAll"
      drawerContent={props => <DrawerSidebarScreen {...props} />}>
      <Drawer.Screen
        name="HomeScreenTabAll"
        options={{headerShown: false}}
        component={HomeScreenTabAll}
      />
    </Drawer.Navigator>
  );
}
function TrainingTabStack(props) {
  return (
    <Stack.Navigator initialRouteName="TrainingTab">
      <Stack.Screen
        name="TrainingTab"
        component={TrainingTab}
        options={{
          headerTitle: () => (
            <AppHeader {...props} headerTitle={'Training_Label'} />
          ),
          ...headerArray,
          headerLeft: () => <HeaderLeftMenuIcon {...props} />,
          headerRight: () => <ColorPicker />,
        }}
      />
    </Stack.Navigator>
  );
}
function Root() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="Drawer"
        component={MyDrawer}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreenTabAll}
        options={{
          title: '',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
export default Root;

export function HomeScreenTabAll(props) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
      tabBarOptions={{
        activeTintColor: Colors.theme_background,
        inactiveTintColor: Colors.black_text_color,
        labeled: true,
        labelStyle: {},
        tabStyle: {
          backgroundColor: Colors.white_text_color,
          paddingTop: 0,
        },
      }}>
      <Tab.Screen
        name={RouteName.TRAINING_TAB}
        component={TrainingTabStack}
        options={{
          tabBarLabel: 'Training_Title_Label',
          tabBarIcon: ({focused}) => (
            <View>
              <VectorIcons
                icon="FontAwesome5"
                name="dumbbell"
                color={
                  focused ? Colors.theme_background : Colors.black_text_color
                }
                size={SF(18)}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
