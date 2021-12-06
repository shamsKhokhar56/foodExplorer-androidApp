import React, { useState, useEffect, useContext } from 'react'
import { Alert, ScrollView, StyleSheet, Switch, Text, View } from 'react-native'

import Colors from '../constants/Colors';

import LanguageText from '../components/LanguageText';


const DietPlansDetailsView = ({ navigation, route }) => {

    const id = route.params.id
    const dayName = route.params.name
    var name = 'name'
    if (id === 0) {
        name = 'NormalWeight'
    }
    if (id === 1) {
        name = 'MaintainWeight'
    }
    if (id === 2) {
        name = 'OverWeight'
    }

    return (
        <View style={styles.screen}>
            <View style={styles.dayView}>
                <LanguageText styles={styles.dayText} value={dayName} />
            </View>
            <View style={styles.dietPlanView}>
                <View style={styles.timeView}>
                    <LanguageText styles={styles.textStyles2} value={'breakfast'} />
                    <LanguageText styles={styles.textStyles2} value={`breakfastTime${name}`} />
                </View>
                <View style={styles.mealView}>
                    <LanguageText styles={styles.textStyles} value={`${dayName}Breakfast${name}`} />
                </View>
            </View>
            <View style={styles.dietPlanView}>
                <View style={styles.timeView}>
                    <LanguageText styles={styles.textStyles2} value={'midMeal'} />
                    <LanguageText styles={styles.textStyles2} value={`snackTime${name}`} />
                </View>
                <View style={styles.mealView}>
                    <LanguageText styles={styles.textStyles} value={`${dayName}Snack${name}`} />
                </View>
            </View>
            <View style={styles.dietPlanView}>
                <View style={styles.timeView}>
                    <LanguageText styles={styles.textStyles2} value={'lunch'} />
                    <LanguageText styles={styles.textStyles2} value={`lunchTime${name}`} />
                </View>
                <View style={styles.mealView}>
                    <LanguageText styles={styles.textStyles} value={`${dayName}Lunch${name}`} />
                </View>
            </View>
            <View style={styles.dietPlanView}>
                <View style={styles.timeView}>
                    <LanguageText styles={styles.textStyles2} value={'evening'} />
                    <LanguageText styles={styles.textStyles2} value={`eveningTime${name}`} />
                </View>
                <View style={styles.mealView}>
                    <LanguageText styles={styles.textStyles} value={`${dayName}Evening${name}`} />
                </View>
            </View>
            <View style={styles.dietPlanView}>
                <View style={styles.timeView}>
                    <LanguageText styles={styles.textStyles2} value={'dinner'} />
                    <LanguageText styles={styles.textStyles2} value={`dinnerTime${name}`} />
                </View>
                <View style={styles.mealView}>
                    <LanguageText styles={styles.textStyles} value={`${dayName}Dinner${name}`} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    notificationStyles: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center'
    },
    dayView: {
        justifyContent: 'center',
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        width: '100%'
    },
    dayText: {
        fontSize: 28,
        color: Colors.primary,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    timeView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '22%',
        borderRightWidth: 1,
        borderRightColor: 'black',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 5
    },
    mealView: {
        width: '78%',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        justifyContent: 'center'
    },
    dietPlanView: {
        flexDirection: 'row',
        margin: 5
    },
    textStyles: {
        fontSize: 18,
        textAlign: 'justify',
    },
    textStyles2: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    headingTextStyles: {
        fontSize: 16,
        textAlign: 'justify',
        fontWeight: 'bold'
    },

})

export default DietPlansDetailsView
