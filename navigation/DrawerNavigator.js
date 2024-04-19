
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import DetailsScreen from '../screens/DetailsScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={StackNavigator} />
    <Drawer.Screen name="Details" component={DetailsScreen} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
