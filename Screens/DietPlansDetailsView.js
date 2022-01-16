import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

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
            <ScrollView>
                <View>
                    <View style={styles.dietPlanView}>
                        <View style={styles.timeView}>
                            <LanguageText styles={styles.textStyles2} value={'breakfast'} />
                            <LanguageText styles={styles.textStyles2} value={`breakfastTime${name}`} />
                        </View>
                        <View style={styles.mealView}>
                            <LanguageText styles={styles.textStyles} screen='WI' value={`${dayName}Breakfast${name}`} />
                        </View>
                    </View>
                    <View style={styles.dietPlanView}>
                        <View style={styles.timeView}>
                            <LanguageText styles={styles.textStyles2} value={'midMeal'} />
                            <LanguageText styles={styles.textStyles2} value={`snackTime${name}`} />
                        </View>
                        <View style={styles.mealView}>
                            <LanguageText styles={styles.textStyles} screen='WI' value={`${dayName}Snack${name}`} />
                        </View>
                    </View>
                    <View style={styles.dietPlanView}>
                        <View style={styles.timeView}>
                            <LanguageText styles={styles.textStyles2} value={'lunch'} />
                            <LanguageText styles={styles.textStyles2} value={`lunchTime${name}`} />
                        </View>
                        <View style={styles.mealView}>
                            <LanguageText styles={styles.textStyles} value={`${dayName}Lunch${name}`} screen='WI'/>
                        </View>
                    </View>
                    <View style={styles.dietPlanView}>
                        <View style={styles.timeView}>
                            <LanguageText styles={styles.textStyles2} value={'evening'} />
                            <LanguageText styles={styles.textStyles2} value={`eveningTime${name}`} />
                        </View>
                        <View style={styles.mealView}>
                            <LanguageText styles={styles.textStyles} screen='WI' value={`${dayName}Evening${name}`} />
                        </View>
                    </View>
                    <View style={styles.dietPlanView}>
                        <View style={styles.timeView}>
                            <LanguageText styles={styles.textStyles2} value={'dinner'} />
                            <LanguageText styles={styles.textStyles2} value={`dinnerTime${name}`} />
                        </View>
                        <View style={styles.mealView}>
                            <LanguageText styles={styles.textStyles} screen='WI' value={`${dayName}Dinner${name}`} />
                        </View>
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
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        width: '100%',
    },
    dayText: {
        fontSize: 28,
        color: Colors.primary,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    timeView: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 5
    },
    mealView: {
        width: '78%',
        padding: 10,
        justifyContent: 'center'
    },
    dietPlanView: {
        flexDirection: 'column',
        margin: 5,
    },
    textStyles: {
        fontSize: 18,
        textAlign: 'justify',
        paddingLeft: 10
    },
    textStyles2: {
        fontSize: 18,
        paddingLeft: 5,
        fontWeight: 'bold',
        color: Colors.primary
    },
    headingTextStyles: {
        fontSize: 16,
        fontWeight: 'bold'
    },

})

export default DietPlansDetailsView
