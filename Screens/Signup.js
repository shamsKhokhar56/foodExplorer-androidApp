import React, { useState } from 'react';
import {
    Alert, StyleSheet, Text, TextInput, TouchableHighlight,
    TouchableOpacity, View
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../constants/Colors';
import Auth from '../services/auth';

const Signup = ({ navigation }) => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const singupChecking = () => {
        if (!password || !confirmPassword) {
            Alert.alert("Error", "Please enter all fields")
        }
        if (password !== confirmPassword) {
            Alert.alert("Error", "Password and confirm password do not match!")
        }
        if (password && confirmPassword && password === confirmPassword) {
            Auth.signUp(userName, email, password)
        }
    }

    return (
        <View style={styles.container}>
            <LinearGradient colors={Colors.gradient} style={styles.background}>
                <View style={styles.heading}>
                    <Text style={styles.headingText}>
                        Sign Up
                    </Text>
                </View>
                <View style={styles.bottomView}>
                    <TextInput style={styles.inputSignup}
                        placeholder='User Name'
                        placeholderTextColor='white'
                        onChangeText={text => setUserName(text)}
                    />
                    <TextInput style={styles.inputSignup}
                        placeholder='Email'
                        placeholderTextColor='white'
                        autoCapitalize='none'
                        onChangeText={text => setEmail(text)}
                    />
                    <TextInput style={styles.inputSignup}
                        placeholder='Password'
                        placeholderTextColor='white'
                        autoCapitalize='none'
                        onChangeText={text => setPassword(text)}
                        secureTextEntry={true}
                    />
                    <TextInput style={styles.inputSignup}
                        placeholder='Confirm Password'
                        placeholderTextColor='white'
                        onChangeText={text => setConfirmPassword(text)}
                        autoCapitalize='none'
                        secureTextEntry={true}
                    />
                    <View style={{ height: '20%', width: '50%', marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableHighlight
                            style={{ backgroundColor: 'white', width: '80%', borderRadius: 30 }}
                            onPress={singupChecking}
                        >
                            <Text style={{ textAlign: 'center', fontSize: 30, color: 'orange', padding: 10 }}>
                                Sign Up
                            </Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Text style={{ fontSize: 20, color: 'black' }}>Already have account? </Text>
                        <TouchableOpacity style={{ borderBottomWidth: 2, borderBottomColor: 'black' }}
                            underlayColor='white' onPress={() => { navigation.navigate('Login') }}
                        >
                            <Text style={{ fontSize: 18, color: 'black' }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    background: {
        flex: 1,
        height: '100%',
        position: 'absolute',
        borderBottomLeftRadius: 300,
        left: 0,
        right: 0,
        top: 0,
    },
    heading: {
        flex: 3,
        justifyContent: 'center'
    },
    headingText: {
        fontSize: 40,
        color: 'white',
        textAlign: 'center',
    },
    bottomView: {
        flex: 7,
        alignItems: 'center',
        paddingTop: 30,
        paddingVertical: 40

    },
    inputSignup: {
        color: '#6A4545',
        fontSize: 18,
        height: 50,
        width: '70%',
        borderColor: 'grey',
        borderBottomWidth: 3,
        borderBottomColor: '#707070',
        textAlign: 'center'
    }

});
export default Signup;