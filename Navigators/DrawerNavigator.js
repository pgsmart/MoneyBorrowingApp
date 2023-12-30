import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../Screens/Profile';
import LogOut from '../Screens/Logout';


const Drawer = createDrawerNavigator();

export default DrawerNavigator=()=> {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
        <Drawer.Screen name='Profile' component={Profile}/>
        <Drawer.Screen name='Logout' component={LogOut}/>
    </Drawer.Navigator>
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
