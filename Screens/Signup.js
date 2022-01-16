import React, { useState } from 'react';
import { Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

import Colors from '../constants/Colors';
import Auth from '../services/auth';
import LanguageText from '../components/LanguageText';
import Card from '../components/Card';
import Statusbar from '../components/Statusbar';
import { FontAwesome, Entypo } from '@expo/vector-icons';

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
        <Statusbar style={styles.container}>
            <ImageBackground style={styles.imageStyles} blurRadius={10} source={require('../assets/splash.png')}>
                <Card style={styles.searchView}>
                    <View>
                        <Text style={{ fontSize: 30, color: Colors.primary, fontWeight: 'bold', paddingBottom: 5 }}>
                            Food Explorer
                        </Text>
                    </View>
                    <View style={styles.searchCard}>
                        <View style={styles.searchIcon}>
                            <FontAwesome name="user" size={30} color={Colors.primary} />
                        </View>
                        <View underlayColor="none" style={styles.searchInput} >
                            <TextInput
                                placeholder='Username'
                                placeholderTextColor='grey'
                                onChangeText={text => setUserName(text)}
                            />
                        </View>
                    </View>
                    <View style={styles.searchCard}>
                        <View style={styles.searchIcon}>
                            <Entypo name="mail" size={30} color={Colors.primary} />
                        </View>
                        <View underlayColor="none" style={styles.searchInput} >
                            <TextInput
                                keyboardType='email-address'
                                placeholder='Email'
                                placeholderTextColor='grey'
                                autoCapitalize='none'
                                onChangeText={text => setEmail(text)}
                            />
                        </View>
                    </View>
                    <View style={styles.searchCard}>
                        <View style={styles.searchIcon}>
                            <Entypo name="key" size={30} color={Colors.primary} />
                        </View>
                        <View underlayColor="none" style={styles.searchInput} >
                            <TextInput
                                placeholder='Password'
                                placeholderTextColor='grey'
                                autoCapitalize='none'
                                secureTextEntry={true}
                                onChangeText={text => setPassword(text)}
                            />
                        </View>
                    </View>
                    <View style={styles.searchCard}>
                        <View style={styles.searchIcon}>
                            <Entypo name="key" size={30} color={Colors.primary} />
                        </View>
                        <View underlayColor="none" style={styles.searchInput} >
                            <TextInput
                                placeholder='Confirm Password'
                                placeholderTextColor='grey'
                                autoCapitalize='none'
                                secureTextEntry={true}
                                onChangeText={text => setConfirmPassword(text)}
                            />
                        </View>
                    </View>
                    <View style={styles.buttonView}>
                        <TouchableHighlight underlayColor={'none'} onPress={singupChecking} style={styles.buttonStyles}>
                            <Text style={styles.textStyles}>
                                Signup
                            </Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.signupView}>
                        <Text style={styles.text}>
                            Already have Account? {' '}
                        </Text>
                        <TouchableHighlight underlayColor={'none'} onPress={() => { navigation.navigate('Login') }}>
                            <Text style={styles.signupButtonText}>
                                Login
                            </Text>
                        </TouchableHighlight>
                    </View>
                </Card>
            </ImageBackground>
        </Statusbar>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyles: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchView: {
        padding: 20,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchCard: {
        width: '100%',
        height: 60,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: Colors.gradient[2],
        marginVertical: 5,
        flexDirection: 'row'
    },
    searchIcon: {
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchInput: {
        width: '70%',
        justifyContent: 'center',
    },
    buttonView: {
        width: '100%',
        marginTop: 20
    },
    buttonStyles: {
        backgroundColor: Colors.primary,
        height: 50,
        justifyContent: 'center',
        borderRadius: 20
    },
    textStyles: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center'
    },
    signupView: {
        flexDirection: 'row',
        paddingTop: 10
    },
    text: {
        color: 'black',
        fontSize: 18,
    },
    signupButtonText: {
        fontSize: 18,
        color: Colors.primary,
        fontWeight: 'bold',
    },

});
export default Signup;