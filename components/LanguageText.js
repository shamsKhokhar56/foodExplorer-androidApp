import React, { useContext, useEffect, useState } from 'react';
import i18n from 'i18n-js';
import { LanguageContext } from '../LanguageContext';
import translations from '../services/translations';
import { Text } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const LanguageText = (props) => {

    const [steps, setSteps] = useState([])

    useEffect(async () => {
        await getData();
        if (props.screen === 'WI') {
            await setSteps([...i18n.t(props.value).split('*')])
        }

    }, [])

    const { context, setContext } = useContext(LanguageContext);

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('langCode')
            if (value !== null) {
                setContext(value)
            }
            else {
                setContext('en')
            }
        } catch (e) {
            console.log(e)
        }
    }



    i18n.locale = context
    i18n.fallbacks = true;
    i18n.translations = translations
    if (props.screen !== 'WI') {
        return (
            <Text style={props.styles} >{i18n.t(props.value)}</Text>
        )
    }
    return (
        <>
            {
                steps.map((item, i) => (
                    <Text style={props.styles} key={i}>{item}</Text>
                ))
            }
        </>

    )
}

export default LanguageText;

