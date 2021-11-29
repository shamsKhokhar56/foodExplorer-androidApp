import React from 'react'
import {
    View, StyleSheet, TouchableHighlight,
    ImageBackground, FlatList, ScrollView, Dimensions, Text
}
    from 'react-native';

import homeBasedWorkout from '../data/HomeBasedWorkoutData';
import LoseWeight from '../data/LoseWeightData';

import Card from '../components/Card';

import Colors from '../constants/Colors';
import building from '../data/BuildMuscles';
import LanguageText from '../components/LanguageText';


const WorkoutTypes = ({ route, navigation }) => {
    const workoutNameId = route.params.workoutId
    var name = ''

    if (workoutNameId === 1) {
        name = 'Home Based Workout'
    }
    if (workoutNameId === 2) {
        name = 'Build Muscles'
    }
    if (workoutNameId === 3) {
        name = 'Lose Weight'
    }

    if (name === "Home Based Workout") {
        return (
            <View style={styles.screen}>
                <View>
                    <LanguageText styles={styles.headingText} value={'homeBasedWorkout'} />
                </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={homeBasedWorkout}
                    keyExtractor={item => item.workoutId}
                    renderItem={({ item }) => {
                        return (
                            <Card style={styles.cardStyles} >
                                <TouchableHighlight underlayColor={'white'}
                                    style={styles.buttonStyles}
                                    onPress={() => {
                                        navigation.navigate('WorkoutDetail', {
                                            id: item.workoutId, workName: name
                                        })
                                    }
                                    }>
                                    <ImageBackground style={styles.imageStyle} source={item.image}>
                                        <LanguageText styles={styles.innerTextStyles} value={`${item.name}`} />
                                    </ImageBackground>
                                </TouchableHighlight>
                            </Card>
                        )
                    }}
                />
            </View>
        )

    }
    else if (name === "Build Muscles") {
        return (
            <View style={styles.screen}>
                <View>
                    <LanguageText styles={styles.headingText} value={'buildMuscles'} />
                </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={building}
                    keyExtractor={item => item.workoutId}
                    renderItem={({ item }) => {
                        return (
                            <Card style={styles.cardStyles} key={item.workoutId} >
                                <TouchableHighlight underlayColor={'white'}
                                    style={styles.buttonStyles}
                                    onPress={() => {
                                        navigation.navigate('WorkoutDetail', {
                                            id: item.workoutId, workName: name
                                        })
                                    }
                                    }>
                                    <ImageBackground style={styles.imageStyle} source={item.image}>
                                        <LanguageText styles={styles.innerTextStyles} value={`${item.name}`} />
                                    </ImageBackground>
                                </TouchableHighlight>
                            </Card>
                        )
                    }}
                />
            </View>
        )
    }
    else if (name === 'Lose Weight') {
        return (
            <View style={styles.screen}>
                <View>
                    <LanguageText styles={styles.headingText} value={'loseWeight'} />
                </View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={LoseWeight}
                    keyExtractor={item => item.workoutId}
                    renderItem={({ item }) => {
                        return (
                            <Card style={styles.cardStyles} >
                                <TouchableHighlight underlayColor={'white'}
                                    style={styles.buttonStyles}
                                    onPress={() => {
                                        navigation.navigate('WorkoutDetail', {
                                            id: item.workoutId, workName: name
                                        })
                                    }
                                    }>
                                    <ImageBackground style={styles.imageStyle} source={item.image}>
                                        <LanguageText styles={styles.innerTextStyles} value={`${item.name}`} />
                                    </ImageBackground>
                                </TouchableHighlight>
                            </Card>
                        )
                    }}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.backgroundGrey
    },
    headingText: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    cardStyles: {
        height: 150,
        width: 350,
        margin: 10,
        overflow: 'hidden'
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
    buttonStyles: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        resizeMode: 'cover'
    },
})
export default WorkoutTypes;
