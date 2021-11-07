import React, { useState, useContext } from 'react';
import { StyleSheet, View, StatusBar, ImageBackground, Image, Dimensions } from 'react-native';

import jwtDecode from 'jwt-decode';
import * as Google from 'expo-google-app-auth';


import Colors from '../config/Colors';

import Input from '../components/Input';
import Button from '../components/Button';
import TextButton from '../components/TextButton';
import IconButton from '../components/IconButton';
import AppText from '../components/AppText';
import ErrorToast from '../components/ErrorToast';
import LoadingToast from '../components/LoadingToast';

import auth from '../api/Auth';

import UserContext from '../context/User';
import UserStorage from '../cache/User';

import GoogleConfig from '../config/Google';

const { width, height } = Dimensions.get('screen');


export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [active, setActive] = useState('');
    const [error, setError] = useState(null);

    const { setUser } = useContext(UserContext);



    const authHandler = async () => {
        setLoading(true);
        const res = await auth({ email, password });
        if (res.status === 200) {
            setUser(jwtDecode(res.data));
            await UserStorage.setToken(res.data);
            setLoading(false);
        }
        else {
            setError(res.data)
            setLoading(false);
        }
    }

    const GoogleLoginHandler = async () => {
        setLoading(true);
        const googleRes = await Google.logInAsync(GoogleConfig);
        const { user } = googleRes;
        const res = await auth({ email: user.email, password: '172E172558' });
        if (res.status === 200) {
            setUser(jwtDecode(res.data));
            await UserStorage.setToken(res.data);
            setLoading(false);
        }
        else {
            setError(res.data)
            setLoading(false);
        }
    }


    const errorHandler = () => {
        setActive('');
        setError(null);
    }


    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <ImageBackground blurRadius={2} style={[styles.container, { padding: 40, justifyContent: 'space-evenly' }]} source={require('../assets/bg1.jpg')}>
                <View>
                    <Image style={styles.logo} source={require('../assets/logoWhite.png')} />
                    <TextButton
                        title='Log In'
                        disabled={true}
                        style={{ color: Colors.primary, marginTop: 20 }}
                    />
                    <TextButton
                        title='Register'
                        disabled={false}
                        style={{ color: 'rgba(255,255,255,0.5)', marginTop: 5 }}
                        onPress={() => { navigation.navigate('Register') }}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Input
                        icon='email-outline'
                        iconColor={active === 'email' ? Colors.primary : 'grey'}
                        style={{ marginTop: 20, borderBottomColor: active === 'email' ? Colors.primary : 'grey' }}
                        placeholder='Email'
                        placeholderTextColor='grey'
                        onFocus={() => setActive('email')}
                        onChangeText={(email) => { setEmail(email) }}
                        textColor={active === 'email' ? Colors.primary : 'grey'}
                        value={email}
                    />
                    <Input
                        icon='lock-outline'
                        iconColor={active === 'password' ? Colors.primary : 'grey'}
                        style={{ marginTop: 20, borderBottomColor: active === 'password' ? Colors.primary : 'grey' }}
                        placeholder='Password'
                        onFocus={() => setActive('password')}
                        secureTextEntry
                        placeholderTextColor='grey'
                        onChangeText={(password) => { setPassword(password) }}
                        value={password}
                        textColor={active === 'password' ? Colors.primary : 'grey'}
                    />

                    <Button
                        title='Login'
                        style={{ backgroundColor: email && password ? Colors.primary : 'grey', marginTop: 20 }}
                        styleTitle={{ color: Colors.secondary }}
                        onPress={authHandler}
                        disabled={(email && password) ? false : true}
                    />
                    <View style={styles.socialHeader}>
                        <View style={styles.socialLine} />
                        <AppText style={styles.socialText}>Or Continue with</AppText>
                        <View style={styles.socialLine} />
                    </View>
                    <View style={styles.social}>
                        <IconButton
                            onPress={GoogleLoginHandler}
                            icon='google'
                            backgroundColor='#EE3B2D'
                        />
                    </View>
                </View>
            </ImageBackground>
            {
                loading && <View style={styles.overlay}>
                    <LoadingToast detail='Logging in...' />
                </View>
            }

            {error && <View style={styles.overlay}>
                <ErrorToast error={error} onPress={errorHandler} />
            </View>}
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        width,
        height,
        flex: 1,
    },
    overlay: {
        width,
        height,
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 0
    },
    logo: {
        height: 58,
        width: width / 2,
    },
    inputWrapper: {
    },
    socialHeader: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden'
    },
    socialLine: {
        width: '25%',
        backgroundColor: 'grey',
        height: 1
    },
    socialText: {
        color: Colors.primary,
        fontSize: 13
    },
    social: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: 50,
        justifyContent: 'space-between',
        marginTop: 20
    },
    loadingToast: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.secondary,
        height: 60,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    loadingToastText: {
        fontSize: 13,
        color: Colors.primary,
        marginLeft: 10
    },
    overlay: {
        width,
        height,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.2)'

    }
});