import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home'
import Signup from './src/screens/Auth/Signup';
import Signin from './src/screens/Auth/Signin'
import ForgotPassword from './src/screens/Auth/ForgotPassword';
import SetPassword from './src/screens/Auth/SetPassword';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}  />
      <Stack.Screen name="Signin" component={Signin} options={{headerShown:false}}  />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown:false}}  />
      <Stack.Screen name="SetPassword" component={SetPassword} options={{headerShown:false}}  />
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
    </Stack.Navigator>
  </NavigationContainer>
    
  );
}

export default App;