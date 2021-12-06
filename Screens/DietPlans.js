import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableHighlight, ImageBackground, Alert } from 'react-native';

import dietPlans from '../data/DietPlans';
import Card from '../components/Card';
import Colors from '../constants/Colors';

import firebase from '../Firebase/fire';

import LanguageText from '../components/LanguageText';

const DietPlans = ({ navigation }) => {
    const [isBmiCalculated, setIsBmiCalculated] = useState(false)
    const [bmiSnapshot, setbmiSnapshot] = useState('')
    useEffect(() => {
        getBmi()
    }, [])
    const getBmi = async () => {
        const uid = await firebase.auth().currentUser.uid
        await firebase.firestore().collection('User').doc(uid).get()
            .then(snapshot => setbmiSnapshot(snapshot.data().bmi))
            // .then(() => setIsBmiCalculated(true))
            .catch((error) => Alert.alert(error.message))
    }

    return (
        <View style={styles.screen}>
            <View style={styles.screenInner}>
                {dietPlans.map(item => {
                    return (
                        <Card style={styles.cardStyles} key={item.id}>
                            <TouchableHighlight
                                underlayColor='none'
                                onPress={() => {
                                    navigation.navigate('DietPlansDetails', {
                                        id: item.id, bmi: bmiSnapshot
                                    })
                                }}>
                                <ImageBackground style={styles.imageStyle} resizeMode='contain' source={item.imageSource}>
                                    <LanguageText styles={styles.innerTextStyles} value={item.name} />
                                </ImageBackground>
                            </TouchableHighlight>
                        </Card>
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.backgroundGrey
    },
    screenInner: {
        height: '90%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardStyles: {
        backgroundColor: 'white',
        width: '90%',
        height: '35%',
        margin: 10,
        overflow: 'hidden'
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    innerTextStyles: {
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        color: 'white',
        fontSize: 24,
        paddingBottom: 5,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default DietPlans
