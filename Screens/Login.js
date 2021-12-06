import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SocialIcon } from 'react-native-elements';

import Colors from '../constants/Colors';
import Auth from '../services/auth';
import LanguageText from '../components/LanguageText';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <LinearGradient colors={Colors.gradient} style={styles.background}>
                <View style={styles.heading}>
                    <LanguageText styles={styles.headingText} value={'login'} />
                </View>
                <View style={styles.bottomView}>
                    <TextInput style={styles.inputEmail}
                        keyboardType='email-address'
                        placeholder='Email'
                        placeholderTextColor='white'
                        autoCapitalize='none'
                        onChangeText={text => setEmail(text)}
                    />
                    <TextInput style={styles.inputEmail}
                        placeholder='Password'
                        placeholderTextColor='white'
                        autoCapitalize='none'
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}
                    />
                    <View style={{ height: '20%', width: '50%', marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableHighlight
                            style={{ backgroundColor: 'white', width: '80%', borderRadius: 30 }}
                            onPress={() => Auth.signIn(email, password)}
                        >
                            <LanguageText styles={{ textAlign: 'center', fontSize: 30, color: 'orange', padding: 10 }} value={'login'} />
                        </TouchableHighlight>
                    </View>
                    <View style={{ flexDirection: 'row' }}>

                        <LanguageText styles={{ fontSize: 20 }} value={'dontHaveAccount'} />
                        <TouchableOpacity style={{ borderBottomWidth: 2 }} onPress={() => { navigation.navigate('Signup') }}>
                            <LanguageText styles={{ fontSize: 18 }} value={'signup'} />
                        </TouchableOpacity>
                    </View>
                    {/* <View style={{ flexDirection: 'column', alignItems: 'center', margin: 10 }}>
                        <Text style={{ fontSize: 20, padding: 10 }}>OR</Text>

                        <LanguageText styles={{ fontSize: 20 }} value={'continueWith'} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableHighlight>
                            <SocialIcon type="google" />
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <SocialIcon type="facebook" />
                        </TouchableHighlight>
                    </View> */}
                </View>
            </LinearGradient>
        </View >
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
        width: '100%',
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
    inputEmail: {
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
export default Login;