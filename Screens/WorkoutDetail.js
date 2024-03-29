import React, { useState, useContext } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import homeBasedWorkout from '../data/HomeBasedWorkoutData';
import LoseWeight from '../data/LoseWeightData';

import Colors from '../constants/Colors';
import building from '../data/BuildMuscles';

import LanguageText from '../components/LanguageText';

const WorkoutDetail = ({ navigation, route }) => {
    const typeName = route.params.workName
    const id = route.params.id

    if (typeName === "Home Based Workout") {
        return (
            <View style={styles.screen}>
                <View>
                    <LanguageText styles={styles.headingText} value={'workout'} />
                </View>
                <View>
                    <LanguageText styles={styles.noteText} value={'excercisesNote'} />
                </View>
                <ScrollView>
                    {homeBasedWorkout[id].category.map(item => {
                        return (
                            <View key={item.id} style={styles.mainView}>
                                <TouchableHighlight underlayColor="none" onPress={() => {
                                    navigation.navigate('WorkoutInstructions', {
                                        catName: item.catName, image: item.image1
                                    })
                                }}>
                                    <View>
                                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                                            {item.id}. <LanguageText value={`${item.catName}`} />
                                        </Text>
                                        <Image style={styles.imageStyles} source={item.image1} />
                                        <Text style={[styles.textStyles, { fontSize: 16 }]}>
                                            {item.circuit[1]}
                                        </Text>
                                        <Text style={[styles.textStyles, { fontSize: 16 }]}>
                                            {item.circuit[2]}
                                        </Text>
                                        <Text style={[styles.textStyles, { fontSize: 16 }]}>
                                            {item.circuit[3]}
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        )
                    })}

                </ScrollView>
            </View>
        )
    }
    else if (typeName === "Lose Weight") {
        return (
            <View style={styles.screen}>
                <View>
                    <LanguageText styles={styles.headingText} value={`${LoseWeight[id].name}`} />
                </View>
                <View>
                    <LanguageText styles={styles.noteText} value={'excercisesNote'} />
                </View>
                <ScrollView>
                    {LoseWeight[id].category.map(item => {
                        return (
                            <View key={item.id} style={styles.mainView}>
                                <TouchableHighlight underlayColor="none" onPress={() => {
                                    navigation.navigate('WorkoutInstructions', {
                                        catName: item.catName, image: item.image1
                                    })
                                }}>
                                    <View>
                                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                                            {item.id}. <LanguageText value={`${item.catName}`} />
                                        </Text>
                                        <Image style={styles.imageStyles} source={item.image1} />
                                        <Text style={[styles.textStyles, { fontSize: 16 }]}>
                                            <LanguageText value={'circuit'} /> {item.circuit[1]}
                                        </Text>
                                        <Text style={[styles.textStyles, { fontSize: 16 }]}>
                                            {item.circuit[3]}
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        )
                    })}

                </ScrollView>
            </View>
        )
    }
    else if (typeName === "Build Muscles") {
        return (
            <View style={styles.screen}>
                <View>
                    <LanguageText styles={styles.headingText} value={`${building[id].name}`} />
                </View>
                <View>
                    <LanguageText styles={styles.noteText} value={'excercisesNote'} />
                </View>
                <ScrollView>
                    {building[id].category.map(item => {
                        return (
                            <View key={item.id} style={styles.mainView}>
                                <TouchableHighlight underlayColor="none" onPress={() => {
                                    navigation.navigate('WorkoutInstructions', {
                                        catName: item.catName, image: item.image1
                                    })
                                }}>
                                    <View>
                                        <Text style={[styles.textStyles, { fontWeight: 'bold' }]}>
                                            {item.id}. <LanguageText value={`${item.catName}`} />
                                        </Text>
                                        <Image style={styles.imageStyles} source={item.image1} />
                                        <Text style={[styles.textStyles, { fontSize: 16 }]}>
                                            <LanguageText value={'circuit'} /> {item.circuit[1]}
                                        </Text>
                                        <Text style={[styles.textStyles, { fontSize: 16 }]}>
                                            <LanguageText value={'circuit'} /> {item.circuit[2]}
                                        </Text>
                                        <Text style={[styles.textStyles, { fontSize: 16 }]}>
                                            {
                                                item.circuit[3] ? <LanguageText value={'circuit'} /> : item.circuit[3]
                                            }
                                            {item.circuit[3]}
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        )
                    })}

                </ScrollView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // alignItems: 'center',
        // backgroundColor: Colors.backgroundGrey
    },
    headingText: {
        color: 'black',
        fontSize: 22,
        backgroundColor: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        borderBottomWidth: 3,
        borderBottomColor: 'black'
    },
    noteText: {
        color: Colors.primary,
        fontSize: 18,
        fontStyle: 'italic',
        backgroundColor: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    mainView: {
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        marginTop: 10
    },
    textStyles: {
        fontSize: 16,
        textAlign: 'center',
    },

    imageStyles: {
        width: '100%',
        height: 250,
    },

})

export default WorkoutDetail
