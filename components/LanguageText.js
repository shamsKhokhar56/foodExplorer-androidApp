import React, { useContext } from 'react';
import i18n from 'i18n-js';
import { LanguageContext } from '../LanguageContext';
import translations from '../services/translations';
import { Text } from 'react-native';

const LanguageText = (props) => {

    const { context, setContext } = useContext(LanguageContext);
    i18n.locale = context
    i18n.fallbacks = true;
    i18n.translations = translations

    return (
        <Text style={props.styles} >{i18n.t(props.value)}</Text>
    )
}

export default LanguageText;

