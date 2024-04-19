
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import DetailsScreen from '../screens/DetailsScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={StackNavigator} />
    <Tab.Screen name="Details" component={DetailsScreen} />
  </Tab.Navigator>
);

export default TabNavigator;
