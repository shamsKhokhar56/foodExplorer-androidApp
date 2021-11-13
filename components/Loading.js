import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import LanguageText from './LanguageText';

const Loading = () => {
    return (
        <View style={styles.screen}>
            <LanguageText styles={styles.textStyles} value={'dataIsLoading'} />
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
