import React, { useState } from "react";
//import {auth} from '../database/firebase'
import {Button} from 'react-native-elements'

import firebase from 'firebase/app';
import 'firebase/auth';

import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import { ActivityIndicatorComponent } from "react-native";
import { event } from "react-native-reanimated";


const LoginScreen = (props) => {

  const [state, setState] = useState
    ({
        email: '',
        pass: '',
    });
    var emailw = state.email
    var passw = state.pass
    const auth = firebase.auth();

    const login = async () =>
    {
        
      if(emailw === '' || passw === ''){
        alert('Credenciales incorrectas')
      }else{
        auth.signInWithEmailAndPassword(emailw,passw)
        props.navigation.navigate('UsersList')
      }
      
      

      /*auth.onAuthStateChanged(user =>{
        if(user != null)
        {
          props.navigation.navigate('UsersList')
        }
        else{
          //alert('Credenciales incorrectas')
        }
      })  */
          
    };
    const signUp = () =>
    {
      try 
      {
        if(passw.length < 6){
          alert('La contraseña debe tener minimo 6 caracteres');
        }else{
          if(emailw === ''){
            alert('Email vacio');
          }else{
            console.log(emailw, passw)
            auth.createUserWithEmailAndPassword(emailw,passw) 
            alert('Usuario Creado');
          }
        }
      } 
      catch (error) {
        console.log(error+'')
        alert('Fotmato de correo incorrecto');
      }    
    };

    const SignOut = () =>
    {
     auth.signOut();
     props.navigation.navigate('login');
    }
    return (
    <ScrollView style={styles.container}>
            {/* Email Input */}
            <View style={styles.inputGroup}>
                <TextInput
                placeholder="Email"
                onChangeText={(value) => setState({...state,email: value})}
                value={state.email}
                
                />
            </View>
            {/* Pass Input */}
            <View style={styles.inputGroup}>
                <TextInput
                secureTextEntry={true}
                placeholder="Contraseña"
                onChangeText={(value) => setState({...state,pass: value})}
                value={state.pass}
                />
            </View>
            <View style={styles.inputGroup}>
                <View style={styles.button}>
                    <Button type="outline" title="Login" onPress={() => login()} />
                </View>
            
                <View style={styles.button}>
                    <Button type="outline" title="Sign Up" onPress={() => signUp()} />
                </View>
            </View>

            <View style={styles.buttonG}>
                <Button type="solid" title="LogOut" onPress={() => SignOut()} />
            </View>
            
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    padding: 4,
  },
  buttonG: {
    flex: 1,
    padding: 4,
    paddingTop: 15,
  }
});

export default LoginScreen;
/*
const Login = (props) => {
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')

    const registrarUsuario = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,pass)
        .then((res) => alert('Usuario Refistrado'))
    }
    return(
        <ScrollView style={styles.container}>
            {/* Email Input *//*}
            <View style={styles.inputGroup}>
                <TextInput
                placeholder="email"
                className = "form-control mb-3" type = "email"
                onChangeText={(e) =>{setEmail(e.target.value)}}
                />
            </View>
            {/* Pass Input *//*}
            <View style={styles.inputGroup}>
                <TextInput
                placeholder="contraseña"
                onChangeText={(e) =>{setPass(e.target.value)}}
                type = "password"
                />
            </View>
            <View style={styles.button}>
                <Button title="Save User" onPress={() => registrarUsuario()} />
            </View>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;*/