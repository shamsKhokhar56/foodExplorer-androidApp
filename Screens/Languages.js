import React, { useContext, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { LanguageContext } from '../LanguageContext';

import i18n from 'i18n-js';

const Languages = ({ navigation }) => {
    const { context, setContext } = useContext(LanguageContext)
    const Languages = [
        {
            code: 'en',
            language: 'English'
        },
        {
            code: 'it',
            language: 'Italian'
        },
        {
            code: 'fr',
            language: 'French'
        }
    ];

    const languageHandler = (languageCode) => {
        setContext(languageCode)
        Alert.alert('', 'Language has been Updated')
    }
    return (
        <View style={styles.container}>
            <View style={styles.headingView}>
                <Text style={styles.headingText}>
                    {i18n.t('selectLanguage')}
                </Text>
            </View>
            {
                Languages.map(item => {
                    return (
                        <View key={item.code} style={styles.buttonView}>
                            <TouchableHighlight
                                underlayColor='none'
                                style={styles.buttonStyles}
                                onPress={() => languageHandler(item.code)}
                            >
                                <Text style={styles.buttonText}>
                                    {item.language}
                                </Text>
                            </TouchableHighlight>
                        </View>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headingView: {
        marginHorizontal: 30,
        marginTop: 20
    },
    headingText: {
        fontSize: 35
    },
    buttonView: {
        marginTop: 20,
        marginHorizontal: 30,
        height: 70,
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        // margin: 5
    },
    buttonStyles: {
    },
    buttonText: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center'
    },
})


export default Languages