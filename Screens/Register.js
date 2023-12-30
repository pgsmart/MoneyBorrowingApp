import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,Alert} from 'react-native';
import * as React from 'react'


export default class Register extends React.Component{

    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password:''
        }
    }

    render(){
        return (
            <View>
                <Text>Register Screen</Text>
                <TextInput style={styles.input} placeholder='First Name' value={this.state.firstName} onChange={(text)=>{this.setState({firstName: text})}}/>
                <TextInput style={styles.input} placeholder='Last Name' value={this.state.lastName} onChange={(text)=>{this.setState({lastName: text})}}/>
                <TextInput style={styles.input} placeholder='Username' value={this.state.username} onChange={(text)=>{this.setState({username: text})}}/>
                <TextInput style={styles.input} placeholder='Password' value={this.state.password} onChange={(text)=>{this.setState({password: text})}}/>
                <TouchableOpacity onPress={()=>{this.submit()}}><Text>Submit</Text></TouchableOpacity>
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
  input:{
    borderRadius: 20,
    borderWidth:5
  }
});
