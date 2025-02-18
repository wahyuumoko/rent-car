/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './src/screen/Home';
import SplashScreen from './src/screen/SplashScreen';
import SearchScreen from './src/screen/Search';
import Menu from './src/screen/Rent';
import LoginScreen from './src/screen/LoginScreen';
import RegisterScreen from './src/screen/RegisterScreen';
import DetailCar from './src/screen/DetailCar';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Beranda"
        component={Home}
        options={{ tabBarIcon: ({ color, size }) => (<Icon name="home-outline" color={color} size={size} />), headerShown: false }}
      />
      <Tab.Screen
        name="Cari"
        component={SearchScreen}
        options={{ tabBarIcon: ({ color, size }) => (<Icon name="search-outline" color={color} size={size} />), headerShown: false }}
      />
      <Tab.Screen
        name="Sewa"
        component={Menu}
        options={{ tabBarIcon: ({ color, size }) => (<Icon name="car-outline" color={color} size={size} />), headerShown: false }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailCar"
          component={DetailCar}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
