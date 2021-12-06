import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useContext, useEffect, useState, useRef } from 'react';
import { Text, View, StyleSheet, Switch, Alert } from 'react-native';
import Colors from '../constants/Colors';
import AsyncStorageHelper from '../Helpers/AsyncStorage';

const Settings = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false)
    const [vibration, setVibration] = useState(false)
    useEffect(async () => {
        const value = await AsyncStorageHelper.getData('notificationKey')
        setIsEnabled(JSON.parse(value))
        if (isEnabled) {
            try {
                await registerNotifications().then(
                    scheduleNotification()
                )
            }
            catch (error) {
                Alert.alert(error.message)
            }

        }
    }, [isEnabled])
    const toggleSwitch = async () => {
        setIsEnabled(prevState => !prevState)
        await AsyncStorageHelper.saveData('notificationKey', JSON.stringify(!isEnabled))
    }
    const toggleVibration = async () => {
        setVibration(prevState => !prevState)
    }
    const scheduleNotification = async () => {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: "You've got a notification",
                body: 'Notifications are turned on for Diet Plans',
                data: { data: 'goes here' },
            },
            trigger: { seconds: 5 },
        });
    }
    const registerNotifications = async () => {
        let token;
        if (Constants.isDevice) {
            const { status: existingStatus } = await Notifications.getPermissionsAsync();
            let finalStatus = existingStatus;
            if (existingStatus !== 'granted') {
                const { status } = await Notifications.requestPermissionsAsync();
                finalStatus = status;
            }
            if (finalStatus !== 'granted') {
                alert('Failed to get push token for push notification!');
                return;
            }
            token = (await Notifications.getExpoPushTokenAsync()).data;
            // console.log(token);
        } else {
            alert('Must use physical device for Push Notifications');
        }

        if (Platform.OS === 'android') {
            Notifications.setNotificationChannelAsync('default', {
                name: 'default',
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: '#FF231F7C',
            });
        }
        return token;
    }
    return (
        <View style={styles.container} >
            <View style={styles.headingView}>
                <Text style={styles.headingText}>
                    Notificaitons
                </Text>
            </View>
            <View style={styles.notificationStyles}>
                <Text style={styles.textStyles2}>
                    Notifications for daily diet
                </Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? Colors.primary : "white"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => toggleSwitch()}
                    value={isEnabled}
                />
            </View>
            <View style={styles.notificationStyles}>
                <Text style={styles.textStyles2}>
                    Vibration for notification
                </Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={vibration ? Colors.primary : "white"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => toggleVibration()}
                    value={vibration}
                />
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundGrey
    },
    headingView: {
        padding: 5,
    },
    headingText: {
        fontWeight: 'bold',
        fontSize: 28
    },
    notificationStyles: {
        borderWidth: 0.5,
        borderColor: 'grey',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 5,
        alignItems: 'center'
    },
    textStyles2: {
        fontSize: 18,
        textAlign: 'center',
    },
});

export default Settings
