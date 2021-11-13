import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableHighlight, View, ImageBackground, Alert, KeyboardAvoidingView } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/Colors';

import DietPlansData from '../data/DietPlansData';

import LanguageText from '../components/LanguageText';

const DietPlansDetails = ({ navigation, route }) => {
    const id = route.params.id

    var name = ''

    if (id === 1) {
        name = 'Calculate BMI'
    }
    if (id === 2) {
        name = 'Diet Plans'
    }

    const [weight, setweight] = useState('')
    const [feet, setFeet] = useState('')
    const [inches, setInches] = useState('')
    const [result, setResult] = useState('')
    const [status, setStatus] = useState('')
    const [showResult, setShowResult] = useState(false)

    const CalculateBMI = () => {
        if (weight == '' || feet == '' || inches == '') {
            Alert.alert('First enter all values!')
        }
        else {
            const a = feet * 0.3048 + inches * 0.0254
            setResult((weight / (a * a)).toFixed(2))
            if (result > 0 && result < 18) {
                setStatus('Under Weight')
                setShowResult(true)
            }
            if (result > 18 && result < 24.9) {
                setStatus('Normal Weight')
                setShowResult(true)
            }
            if (result > 25) {
                setStatus('Over Weight')
                setShowResult(true)
            }
        }
    }
    if (name === 'Calculate BMI') {
        return (
            <KeyboardAvoidingView style={styles.screen} behavior='height' keyboardVerticalOffset={'10'}>
                <View style={styles.BmiInformationView}>
                    <LanguageText styles={styles.headingText} value={'whatIsBMI'} />
                    <LanguageText styles={styles.innerHeading} value={'bmiInfo'} />
                    <LanguageText styles={styles.innerHeading} value={'bmiCategory'} />
                    <View style={{ paddingLeft: 25, paddingTop: 5 }}>
                        <Text style={styles.innerHeading}>
                            - <LanguageText styles={styles.innerHeading} value={'underWeight'} /> = <LanguageText styles={styles.innerHeading} value={'lessThan'} /> 18.5
                        </Text>
                        <Text style={styles.innerHeading}>
                            - <LanguageText styles={styles.innerHeading} value={'normalWeight'} /> = 18.5 - 24.9
                        </Text>
                        <Text style={styles.innerHeading}>
                            - <LanguageText styles={styles.innerHeading} value={'overWeight'} /> = Greater then 30
                        </Text>
                    </View>
                </View>
                <View style={styles.BmiCalculatorView}>
                    <Card style={styles.cardStyles}>
                        <View style={styles.BMIView}>
                            <Text style={styles.textStyles}>
                                <LanguageText styles={styles.textStyles} value={'weight'} />( in kg ):
                            </Text>
                            <TextInput
                                placeholder='Kg'
                                style={styles.inputStyles}
                                onChangeText={text => { setweight(text) }}
                                value={weight}
                            />
                        </View>
                        <View style={styles.BMIView}>
                            <LanguageText styles={styles.textStyles} value={'height'} />
                            <TextInput
                                placeholder='Feet'
                                style={styles.inputStyles}
                                onChangeText={text => { setFeet(text) }}
                                value={feet}
                            />
                            <TextInput
                                placeholder='Inches'
                                style={styles.inputStyles}
                                onChangeText={text => { setInches(text) }}
                                value={inches}
                            />
                        </View>
                        <View style={styles.calculateButtonView}>
                            <TouchableHighlight onPress={CalculateBMI} style={styles.calculateButton}>
                                <LanguageText styles={styles.buttonText} value={'calculate'} />
                            </TouchableHighlight>
                        </View>
                        <View style={styles.resultView}>
                            <LanguageText styles={styles.textStyles} value={'yourBmiIs'} />
                            <Text style={[styles.textStyles, { paddingHorizontal: 5, color: Colors.primary }]}>
                                {result}
                            </Text>
                        </View>
                    </Card>

                </View>
                <View style={styles.BmiNoteView}>
                    <LanguageText styles={[styles.textStyles, { color: Colors.primary, fontSize: 22, textAlign: 'justify' }]} value={'bmiNote'} />
                </View>
            </KeyboardAvoidingView>
        )
    }
    else if (name === 'Diet Plans') {
        return (
            <View style={styles.screen}>
                <View style={styles.upperScreen}>
                    <LanguageText styles={styles.upperText} value={'mealPlanNote'} />
                </View>
                <View style={styles.screenInner}>
                    {DietPlansData.map(item => {
                        return (
                            <Card style={styles.cardStyles2} key={item.id}>
                                <TouchableHighlight
                                    onPress={() => {
                                        navigation.navigate('DietPlansDetailsView', {
                                            id: item.id
                                        })
                                    }}>
                                    <ImageBackground style={styles.imageStyle} source={item.image}>
                                        <Text style={styles.innerTextStyles}>
                                            {item.name}
                                        </Text>
                                    </ImageBackground>
                                </TouchableHighlight>
                            </Card>
                        )
                    })}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
    },
    BmiInformationView: {
        padding: 10,
        paddingBottom: 30,
        width: '90%'
    },
    headingText: {
        color: Colors.primary,
        fontSize: 28,
        fontWeight: 'bold'
    },
    innerHeading: {
        fontSize: 16,
        textAlign: 'justify'
    },
    BmiCalculatorView: {
        // height: '40%',
        width: '90%'
    },
    cardStyles: {
        padding: 20,
        // height: '100%',
        width: '100%'
    },
    BMIView: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
    },
    textStyles: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    inputStyles: {
        width: '30%',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'black'
    },
    calculateButtonView: {
        paddingTop: 20,
        justifyContent: 'center',
        height: 70,
        alignItems: 'center'
    },
    calculateButton: {
        // height: '100%',
        height: 50,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        borderRadius: 15,
        width: 100
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    },
    resultView: {
        padding: 10,
        flexDirection: 'row'
    },
    BmiNoteView: {
        width: '90%',
        paddingTop: 15
    },
    upperScreen: {
        width: '90%',
        height: '15%',
        justifyContent: 'center'
    },
    upperText: {
        fontSize: 20,
        color: Colors.primary,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    screenInner: {
        height: '80%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardStyles2: {
        backgroundColor: 'white',
        width: '90%',
        height: '30%',
        margin: 10,
        overflow: 'hidden'
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        resizeMode: 'cover'
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
    },

})

export default DietPlansDetails
