import React, { useState } from 'react'
import { StyleSheet, Text, TouchableHighlight, View, TextInput } from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

import Auth from '../services/auth';

const ChangePassword = () => {

    const [currentPass, setCurrentPass] = useState('')
    const [newPass, setNewPass] = useState('')
    const [newPass2, setNewPass2] = useState('')

    const changePasswordHandler = () => {
        Auth.changePassword(currentPass, newPass, newPass2)
        setCurrentPass('')
        setNewPass('')
        setNewPass2('')
    }

    return (
        <View>
            <View>
                <View style={styles.bottomView}>
                    <Ionicons name="key-outline" size={40} color={Colors.primary} />
                    <TextInput
                        placeholder="Current Password"
                        style={styles.inputFields}
                        value={currentPass}
                        onChangeText={text => setCurrentPass(text)}
                        secureTextEntry={true}
                        autoCapitalize="none"
                    />
                </View>
                <View style={styles.bottomView}>
                    <Ionicons name="key-outline" size={40} color={Colors.primary} />
                    <TextInput
                        placeholder="New Password"
                        style={styles.inputFields}
                        value={newPass}
                        onChangeText={text => setNewPass(text)}
                        secureTextEntry={true}
                        autoCapitalize="none"
                    />
                </View>
                <View style={styles.bottomView}>
                    <Ionicons name="key-outline" size={40} color={Colors.primary} />
                    <TextInput
                        placeholder="Confirm New Password"
                        style={styles.inputFields}
                        value={newPass2}
                        onChangeText={text => setNewPass2(text)}
                        secureTextEntry={true}
                        autoCapitalize="none"
                    />
                </View>
            </View>
            <View style={styles.buttonView}>
                <TouchableHighlight underlayColor="none"
                    onPress={() => { changePasswordHandler() }}
                >
                    <Text style={styles.buttonText}>
                        Update Passowrd
                    </Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
})

export default ChangePassword
