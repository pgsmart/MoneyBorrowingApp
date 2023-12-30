import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react'

export default class AddBorrow extends React.Component{
    render(){
        return (
            <View>
                <Text>Add A Borrow Screen</Text>
            </View>
        );  
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
