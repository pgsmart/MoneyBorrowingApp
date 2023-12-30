import { Text, SafeAreaView, StyleSheet ,TouchableOpacity,Alert} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginStackNavigator from './Navigator/LoginStackNavigator';


export default function App() {
 
  return (
    <NavigationContainer>
    <LoginStackNavigator/>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
