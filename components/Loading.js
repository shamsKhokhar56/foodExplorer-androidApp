import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import LanguageText from './LanguageText';

const Loading = () => {
    return (
        <View style={styles.screen}>
            <ActivityIndicator size="large" color={Colors.primary} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default Loading
