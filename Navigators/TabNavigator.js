import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddBorrow from '../Screens/AddBorrow';
import Home from '../Screens/Home';


const Tab = createBottomTabNavigator()

export default TabNavigator=()=> {
  return (
    
    <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name='Home' component={Home}></Tab.Screen>
        <Tab.Screen name='Add Borrow' component={AddBorrow}></Tab.Screen>
    </Tab.Navigator>

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
