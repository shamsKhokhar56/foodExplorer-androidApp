import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, TextInput, KeyboardAvoidingView, ScrollView, Dimensions, Alert } from 'react-native';
import Colors from '../constants/Colors';

import { AntDesign, Ionicons } from '@expo/vector-icons';

import firebase from '../Firebase/fire';
import ChangePassword from '../components/ChangePassword';

const Profile = () => {

    const [placeholder, setPlaceholder] = useState('')
    var uid = ''

    useEffect(() => {
        getUserData()
    }, [])

    const getUserData = async () => {
        uid = await firebase.auth().currentUser.uid
        await firebase.firestore().collection('User').doc(uid).get()
            .then(snapshot => setPlaceholder(snapshot.data().UserName))
    }

    const [userName, setUserName] = useState('')
    const udpateUserNameHandler = async (name) => {
        if (name === '') {
            Alert.alert('Error!', 'Please input username first!')
        }
        else {
            uid = await firebase.auth().currentUser.uid
            await firebase.firestore().collection('User').doc(uid)
                .update({
                    UserName: userName
                })
            await firebase.auth().currentUser.updateProfile({ displayName: placeholder })
            await firebase.auth().currentUser.reload()

            setPlaceholder(userName)
            Alert.alert('Username Updated!', 'Username has been updated')
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.container} >
                <View style={styles.headingView}>
                    <Text style={styles.headingText}>
                        Change Username OR Update Password
                    </Text>
                </View>
                <View>
                    <View style={styles.bottomView}>
                        <AntDesign name="user" size={40} color={Colors.primary} />
                        <TextInput
                            placeholder={placeholder}
                            placeholderTextColor="grey"
                            style={styles.inputFields}
                            value={userName}
                            onChangeText={text => setUserName(text)}
                        />
                    </View>
                </View>
                <View style={styles.buttonView}>
                    <TouchableHighlight underlayColor="none" onPress={() => udpateUserNameHandler(userName)}>
                        <Text style={styles.buttonText}>
                            Update Username
                        </Text>
                    </TouchableHighlight>
                </View>
                <ChangePassword />
            </View>
            <View style={{ height: '25%', backgroundColor: Colors.backgroundGrey }}>

            </View>
        </ScrollView>
    )
};
const styles = StyleSheet.create({
    contentContainer: {
        height: Dimensions.get('screen').height
    },
    container: {
        alignItems: 'center',
        backgroundColor: Colors.backgroundGrey,
        paddingTop: 40,
    },
    headingView: {
        margin: 20,
        // width: '90%'
    },
    headingText: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        color: Colors.primary
    },
    bottomView: {
        // backgroundColor: 'green',
        width: '90%',
        paddingVertical: 10,
        flexDirection: 'row'
    },
    inputFields: {
        height: 40,
        borderBottomWidth: 2,
        borderBottomColor: 'grey',
        width: '90%'
    },
    buttonView: {
        backgroundColor: Colors.primary,
        padding: 10,
        margin: 20,
        borderRadius: 10
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center'
    },

});

export default Profile
