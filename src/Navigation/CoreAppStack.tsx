import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from '../Screens/Splash/Splash';
import Login from '../Screens/Login/Login';
import Dashboard from '../Screens/Dashboard/Dashboard';
import CountryDetails from '../Screens/CountryDetails/CountryDetails';

const Stack = createStackNavigator();

const CoreAppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}
      initialRouteName="Splash">
      <Stack.Screen name={'Splash'} component={Splash} />
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'Dashboard'} component={Dashboard} />
      <Stack.Screen name={'CountryDetails'} component={CountryDetails} />
    </Stack.Navigator>
  );
};

export default CoreAppStack;
