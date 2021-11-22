import React, { useContext } from 'react';
import { Alert, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { LanguageContext } from '../LanguageContext';

import { AntDesign } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Colors from '../constants/Colors';
import LanguageText from '../components/LanguageText';

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
        },
        {
            code: 'ge',
            language: 'German'
        },
        {
            code: 'sp',
            language: 'Spanish'
        },
    ];

    const languageHandler = async (languageCode) => {
        try{
            await AsyncStorage.setItem('langCode', languageCode)
            .then(setContext(languageCode))
            .then(Alert.alert('','Language has been updated!'))
        }
        catch (error) {
            Alert.alert('','Language cannot be updated!');
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.headingView}>
                <LanguageText styles={styles.headingText} value={'selectLanguage'} />
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
                                <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
                                    <Text style={styles.buttonText}>
                                        {item.language}
                                    </Text>
                                    <Text>
                                        {
                                            item.code === context ?
                                                <AntDesign name="check" size={40} color={Colors.primary} />
                                                :
                                                (
                                                    <View>

                                                    </View>
                                                )
                                        }
                                    </Text>
                                </View>
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
