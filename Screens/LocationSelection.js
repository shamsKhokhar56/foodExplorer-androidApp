import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Button, Modal, Text, TouchableHighlight } from 'react-native';

const LocationSelection = props => {
    const [enteredGoal, setenteredGoal] = useState('');

    const locations = [
        {
            id: 1,
            name: 'Islamabad'
        },
        {
            id: 2,
            name: 'Faisalabad'
        },
        {
            id: 3,
            name: 'Karachi'
        },
        {
            id: 4,
            name: 'Lahore'
        },
        {
            id: 5,
            name: 'Rawalpindi'
        },
    ]

    return (
        <Modal visible={props.visible} transparent presentationStyle={'overFullScreen'} animationType="slide">
            <View style={styles.screen} >
                {locations.map((item) => {
                    return (
                        <View style={styles.buttonsContainer} key={item.id}>
                            <TouchableHighlight onPress={props.onCancel} >
                                <Text>
                                    {item.name}
                                </Text>
                            </TouchableHighlight>
                        </View>
                    )
                })}
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green'
    },
    buttonsContainer: {
        backgroundColor: 'blue',
        height: 40,
        width: 100
    },
    inputField: {
        borderWidth: 1,
        marginBottom: 15,
        padding: 10,
        width: '80%'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '80%'
    },
    buttons: {
        width: '30%'
    }

});

export default LocationSelection;