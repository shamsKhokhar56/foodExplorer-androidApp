import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';
import Colors from '../constants/Colors';
import AsyncStorageHelper from '../Helpers/AsyncStorage';

const Settings = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false)
    useEffect(async() => {
            const value = await AsyncStorageHelper.getData('notificationKey')
            setIsEnabled(JSON.parse(value))
    }, [])
    const toggleSwitch = async () => {
        setIsEnabled(prevState => !prevState)
        await AsyncStorageHelper.saveData('notificationKey', JSON.stringify(!isEnabled))
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
                    // thumbColor={isEnabled ? "#81b0ff" : "#f4f3f4"}
                    thumbColor={isEnabled ? "white" : "grey"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => toggleSwitch()}
                    value={isEnabled}
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
