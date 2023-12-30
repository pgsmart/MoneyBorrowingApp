import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login';
import DrawerNavigator from './DrawerNavigator';
import Register from '../Screens/Register';
import Signup from '../Screens/Signup';

const Stack = createStackNavigator()

export default LoginStackNavigator=()=> {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='Drawer' component={DrawerNavigator}/>
    </Stack.Navigator>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

