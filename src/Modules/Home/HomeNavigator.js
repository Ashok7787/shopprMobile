import React from 'react';
import Home from './Home';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function HomeNavigator(props) {
  //console.log(props);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="home">
      <Stack.Screen name="home" component={Home} />
     
    </Stack.Navigator>
  );
}
