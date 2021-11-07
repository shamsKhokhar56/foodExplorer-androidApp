import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native';

import i18n from 'i18n-js';
import { LanguageContext } from '../LanguageContext';
import translations from '../services/translations';

const Loading = () => {
    const { context, setContext } = useContext(LanguageContext);
    i18n.locale = context
    i18n.fallbacks = true;
    i18n.translations = translations
    return (
        <View style={styles.screen}>
            <Text>
                {i18n.t('dataIsLoading')}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default Loading
