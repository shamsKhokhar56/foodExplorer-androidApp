import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import DietPlansData from '../data/DietPlansData';

import Colors from '../constants/Colors';

import { useContext } from 'react';
import i18n from 'i18n-js';
import { LanguageContext } from '../LanguageContext';
import translations from '../services/translations';
import LanguageText from '../components/LanguageText';

const DietPlansDetailsView = ({ navigation, route }) => {
    const id = route.params.id
    const { context, setContext } = useContext(LanguageContext);
    i18n.locale = context
    i18n.fallbacks = true;
    i18n.translations = translations
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
            <ScrollView>
                <View style={styles.dayView}>
                    <LanguageText styles={styles.dayText} value={'sunday'} />
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('breakfast')} {i18n.t(`breakfastTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`sundayBreakfast${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('midMeal')} {i18n.t(`snackTime${name}`)}
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`sundaySnack${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('lunch')} {i18n.t(`lunchTime${name}`)}
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`sundayLunch${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('evening')} {i18n.t(`eveningTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`sundayEvening${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('dinner')} {i18n.t(`dinnerTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`sundayDinner${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dayView}>
                    <LanguageText styles={styles.dayText} value={'monday'} />
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('breakfast')} {i18n.t(`breakfastTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`mondayBreakfast${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('midMeal')}{i18n.t(`snackTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`mondaySnack${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('lunch')}{i18n.t(`lunchTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`mondayLunch${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('evening')}{i18n.t(`eveningTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`mondayEvening${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('dinner')}{i18n.t(`dinnerTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`mondayDinner${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dayView}>
                    <LanguageText styles={styles.dayText} value={'tuesday'} />
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('breakfast')}{i18n.t(`breakfastTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`tuesdayBreakfast${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('midMeal')}{i18n.t(`snackTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`tuesdaySnack${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('lunch')}{i18n.t(`lunchTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`tuesdayLunch${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('evening')}{i18n.t(`eveningTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`tuesdayEvening${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('dinner')}{i18n.t(`dinnerTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`tuesdayDinner${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dayView}>
                    <LanguageText styles={styles.dayText} value={'wednesday'} />
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('breakfast')}{i18n.t(`breakfastTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`wednesdayBreakfast${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('midMeal')}{i18n.t(`snackTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`wednesdaySnack${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('lunch')}{i18n.t(`lunchTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`wednesdayLunch${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('evening')}{i18n.t(`eveningTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`wednesdayEvening${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('dinner')}{i18n.t(`dinnerTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`wednesdayDinner${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dayView}>
                    <LanguageText styles={styles.dayText} value={'thursday'} />
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('breakfast')}{i18n.t(`breakfastTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`thursdayBreakfast${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('midMeal')}{i18n.t(`snackTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`thursdaySnack${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('lunch')}{i18n.t(`lunchTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`thursdayLunch${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('evening')}{i18n.t(`eveningTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`thursdayEvening${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('dinner')}{i18n.t(`dinnerTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`thursdayDinner${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dayView}>
                    <LanguageText styles={styles.dayText} value={'friday'} />
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('breakfast')}{i18n.t(`breakfastTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`fridayBreakfast${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('midMeal')}{i18n.t(`snackTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`fridaySnack${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('lunch')}{i18n.t(`lunchTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`fridayLunch${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('evening')}{i18n.t(`eveningTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`fridayEvening${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('dinner')}{i18n.t(`dinnerTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`fridayDinner${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dayView}>
                    <LanguageText styles={styles.dayText} value={'saturday'} />
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('breakfast')}{i18n.t(`breakfastTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`saturdayBreakfast${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('midMeal')}{i18n.t(`snackTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`saturdaySnack${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('lunch')}{i18n.t(`lunchTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`saturdayLunch${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('evening')}{i18n.t(`eveningTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`saturdayEvening${name}`)}
                        </Text>
                    </View>
                </View>
                <View style={styles.dietPlanView}>
                    <View style={styles.timeView}>
                        <Text style={[styles.textStyles2]}>
                            {i18n.t('dinner')}{i18n.t(`dinnerTime${name}`)}:
                        </Text>
                    </View>
                    <View style={styles.mealView}>
                        <Text style={styles.textStyles}>
                            {i18n.t(`saturdayDinner${name}`)}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
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
        textAlign: 'justify',
        fontWeight: 'bold'
    },
    headingTextStyles: {
        fontSize: 16,
        textAlign: 'justify',
        fontWeight: 'bold'
    },

})

export default DietPlansDetailsView
