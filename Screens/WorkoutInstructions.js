import React, { useState, useEffect } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import LanguageText from '../components/LanguageText';

const WorkoutInstructions = ({ route }) => {
    const catName = route.params.catName
    const image = route.params.image
    const translated = (<LanguageText styles={styles.textStyles} value={`${catName}HowToDo`} screen='WI' />)

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        try{
            const newTranslated = (<LanguageText value={`${catName}HowToDo`} />)
            console.log(newTranslated)
        }
        catch(error){
            console.log(error.meassage)
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <LanguageText styles={styles.headingText} value={catName} />
            </View>
            <View>
                <Image style={styles.imageStyles} source={image} />
            </View>
            <ScrollView>
                <View style={{ paddingHorizontal: 10 }}>
                        {translated}
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headingText: {
        color: 'black',
        fontSize: 22,
        backgroundColor: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'black'
    },
    imageStyles: {
        width: '100%',
        height: 250,
    },
    textStyles: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical:5,
        textAlign: 'justify'
    },
})
export default WorkoutInstructions;
