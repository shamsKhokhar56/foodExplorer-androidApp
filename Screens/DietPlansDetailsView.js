import React, { useState, useEffect, useContext } from 'react'
import { Alert, ScrollView, StyleSheet, Switch, Text, View } from 'react-native'

import Colors from '../constants/Colors';

import LanguageText from '../components/LanguageText';


const DietPlansDetailsView = ({ navigation, route }) => {

    const id = route.params.id
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

    const weekdays = [
        { id: '1', dayName: 'monday', },
        { id: '2', dayName: 'tuesday', },
        { id: '3', dayName: 'wednesday', },
        { id: '4', dayName: 'thursday', },
        { id: '5', dayName: 'friday', },
        { id: '6', dayName: 'saturday', },
        { id: '7', dayName: 'sunday' },
    ]

    return (
        <View style={styles.screen}>
            {/* <View style={styles.notificationStyles}>
                <Text style={styles.textStyles2}>
                    Notifications for daily diet
                </Text>
                {loading ?
                    <Entypo name="circle" size={10} color="black" />
                    :
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#81b0ff" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />}
            </View>
            {isEnabled ? <App /> : <></>} */}
            <ScrollView>
                {weekdays.map((item) => {
                    return (
                        <View key={item.id}>
                            <View style={styles.dayView}>
                                <LanguageText styles={styles.dayText} value={item.dayName} />
                            </View>
                            <View style={styles.dietPlanView}>
                                <View style={styles.timeView}>
                                    <LanguageText styles={styles.textStyles2} value={'breakfast'} />
                                    <LanguageText styles={styles.textStyles2} value={`breakfastTime${name}`} />
                                </View>
                                <View style={styles.mealView}>
                                    <LanguageText styles={styles.textStyles} value={`${item.dayName}Breakfast${name}`} />
                                </View>
                            </View>
                            <View style={styles.dietPlanView}>
                                <View style={styles.timeView}>
                                    <LanguageText styles={styles.textStyles2} value={'midMeal'} />
                                    <LanguageText styles={styles.textStyles2} value={`snackTime${name}`} />
                                </View>
                                <View style={styles.mealView}>
                                    <LanguageText styles={styles.textStyles} value={`${item.dayName}Snack${name}`} />
                                </View>
                            </View>
                            <View style={styles.dietPlanView}>
                                <View style={styles.timeView}>
                                    <LanguageText styles={styles.textStyles2} value={'lunch'} />
                                    <LanguageText styles={styles.textStyles2} value={`lunchTime${name}`} />
                                </View>
                                <View style={styles.mealView}>
                                    <LanguageText styles={styles.textStyles} value={`${item.dayName}Lunch${name}`} />
                                </View>
                            </View>
                            <View style={styles.dietPlanView}>
                                <View style={styles.timeView}>
                                    <LanguageText styles={styles.textStyles2} value={'evening'} />
                                    <LanguageText styles={styles.textStyles2} value={`eveningTime${name}`} />
                                </View>
                                <View style={styles.mealView}>
                                    <LanguageText styles={styles.textStyles} value={`${item.dayName}Evening${name}`} />
                                </View>
                            </View>
                            <View style={styles.dietPlanView}>
                                <View style={styles.timeView}>
                                    <LanguageText styles={styles.textStyles2} value={'dinner'} />
                                    <LanguageText styles={styles.textStyles2} value={`dinnerTime${name}`} />
                                </View>
                                <View style={styles.mealView}>
                                    <LanguageText styles={styles.textStyles} value={`${item.dayName}Dinner${name}`} />
                                </View>
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
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
